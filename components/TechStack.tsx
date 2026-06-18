"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const TAG_CLASS =
  "rounded-full border border-gray-200/70 bg-white/70 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-gray-600 backdrop-blur-sm dark:border-gray-700/80 dark:bg-gray-800/50 dark:text-gray-300";

const TOGGLE_CLASS =
  "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300";

/** ~2 rows of tags (line-height + gap) */
const COLLAPSED_MAX_HEIGHT = 52;

export default function TechStack({
  technologies,
  className = "",
  collapsible = true,
}: {
  technologies: string[];
  className?: string;
  collapsible?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(technologies.length);
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const measureVisibleCount = useCallback(() => {
    if (!collapsible || expanded) {
      setVisibleCount(technologies.length);
      return;
    }

    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const width = container.offsetWidth;
    if (width === 0) return;

    measure.style.width = `${width}px`;
    measure.replaceChildren();

    const fits = (count: number, withMore: boolean) => {
      measure.replaceChildren();

      for (let i = 0; i < count; i++) {
        const tag = document.createElement("span");
        tag.className = TAG_CLASS;
        tag.textContent = technologies[i];
        measure.appendChild(tag);
      }

      if (withMore) {
        const more = document.createElement("span");
        more.className = TOGGLE_CLASS;
        more.textContent = "more..";
        measure.appendChild(more);
      }

      return measure.scrollHeight <= COLLAPSED_MAX_HEIGHT + 1;
    };

    if (fits(technologies.length, false)) {
      setVisibleCount(technologies.length);
      return;
    }

    for (let count = technologies.length - 1; count >= 0; count--) {
      if (fits(count, true)) {
        setVisibleCount(count);
        return;
      }
    }

    setVisibleCount(0);
  }, [technologies, collapsible, expanded]);

  useLayoutEffect(() => {
    measureVisibleCount();
  }, [measureVisibleCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      measureVisibleCount();
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [measureVisibleCount]);

  if (!technologies.length) return null;

  const hasHidden = visibleCount < technologies.length;
  const showMore = collapsible && !expanded && hasHidden;
  const showLess = collapsible && expanded && hasHidden;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((value) => !value);
  };

  const displayed = expanded ? technologies : technologies.slice(0, visibleCount);

  return (
    <div className={`relative ${className}`.trim()}>
      <div
        ref={measureRef}
        aria-hidden
        className="pointer-events-none invisible absolute flex flex-wrap gap-1.5"
      />
      <div ref={containerRef} className="flex flex-wrap gap-1.5">
        {displayed.map((tech) => (
          <span key={tech} className={TAG_CLASS}>
            {tech}
          </span>
        ))}
        {showMore && (
          <button type="button" onClick={handleToggle} className={TOGGLE_CLASS}>
            more..
          </button>
        )}
        {showLess && (
          <button type="button" onClick={handleToggle} className={TOGGLE_CLASS}>
            less..
          </button>
        )}
      </div>
    </div>
  );
}
