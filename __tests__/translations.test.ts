import { describe, it, expect } from "vitest";
import { translations } from "@/lib/translations";

/**
 * The site ships Turkish (tr) and English (en) translations as a single object.
 * Missing keys silently fall back to `undefined` at render time, so these tests
 * guard that both languages stay structurally in sync.
 */
describe("translations", () => {
  it("exposes the supported languages", () => {
    expect(Object.keys(translations).sort()).toEqual(["en", "tr"]);
  });

  it("defines the same keys for every language", () => {
    const trKeys = Object.keys(translations.tr).sort();
    const enKeys = Object.keys(translations.en).sort();
    expect(enKeys).toEqual(trKeys);
  });

  it("has no empty string values", () => {
    for (const [lang, dict] of Object.entries(translations)) {
      for (const [key, value] of Object.entries(dict)) {
        if (typeof value === "string") {
          expect(value.trim(), `${lang}.${key} should not be empty`).not.toBe("");
        }
      }
    }
  });

  it("keeps the heroRoles array aligned across languages", () => {
    expect(Array.isArray(translations.tr.heroRoles)).toBe(true);
    expect(translations.en.heroRoles).toHaveLength(translations.tr.heroRoles.length);
  });
});
