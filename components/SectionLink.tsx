"use client";

import type { ReactNode } from "react";
import { navigateToSection } from "@/lib/navigation";

type SectionLinkProps = {
  sectionId: string;
  className?: string;
  children: ReactNode;
};

export default function SectionLink({ sectionId, className, children }: SectionLinkProps) {
  return (
    <a
      href={`/#${sectionId}`}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigateToSection(sectionId);
      }}
    >
      {children}
    </a>
  );
}
