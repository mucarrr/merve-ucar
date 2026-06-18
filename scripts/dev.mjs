#!/usr/bin/env node
/**
 * Starts Next.js dev server with a safe cache state.
 *
 * Root cause fix: running `next build` then `next dev` without clearing `.next`
 * leaves production artifacts (BUILD_ID, hashed CSS). Dev mode then serves HTML
 * that references `/_next/static/css/app/layout.css`, which does not exist → 404 → unstyled page.
 */
import { spawn, execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, ".next");
const devCssDir = path.join(nextDir, "static", "css", "app");

function dirHasCssFiles(dir) {
  if (!fs.existsSync(dir)) return false;
  return fs.readdirSync(dir).some((file) => file.endsWith(".css"));
}

function isProductionBuildCache() {
  return fs.existsSync(path.join(nextDir, "BUILD_ID"));
}

function isBrokenDevCache() {
  if (!fs.existsSync(nextDir)) return false;

  const serverAppDir = path.join(nextDir, "server", "app");
  if (!fs.existsSync(serverAppDir)) return false;

  // Dev compiled routes but dev CSS bundle is missing.
  return fs.existsSync(devCssDir) && !dirHasCssFiles(devCssDir);
}

function cleanNextCache(reason) {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log(`[dev] Cleared .next (${reason})`);
}

function stopStaleDevServers() {
  try {
    const output = execSync('pgrep -fl "next dev"', { encoding: "utf8" }).trim();
    if (!output) return;

    const stalePids = output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .filter((line) => line.includes(root))
      .map((line) => Number.parseInt(line.split(" ")[0], 10))
      .filter((pid) => Number.isFinite(pid));

    for (const pid of stalePids) {
      try {
        process.kill(pid, "SIGTERM");
      } catch {
        // Process may have already exited.
      }
    }

    if (stalePids.length > 0) {
      console.log(`[dev] Stopped ${stalePids.length} stale next dev process(es) for this project`);
    }
  } catch {
    // pgrep returns non-zero when no matches — that's fine.
  }
}

stopStaleDevServers();

if (isProductionBuildCache()) {
  cleanNextCache("production build cache must not be reused by dev");
} else if (isBrokenDevCache()) {
  cleanNextCache("dev CSS bundle missing");
}

const child = spawn("next", ["dev"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
