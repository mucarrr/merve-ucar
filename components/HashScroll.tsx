"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/navigation";

export default function HashScroll() {
  useEffect(() => {
    const sectionId = window.location.hash.replace("#", "");
    if (!sectionId) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToSection(sectionId));
    });
  }, []);

  return null;
}
