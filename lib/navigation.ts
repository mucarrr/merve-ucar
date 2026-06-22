const NAVBAR_OFFSET = 72;

export function scrollToSection(sectionId: string): boolean {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const top = window.scrollY + element.getBoundingClientRect().top - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

/** Same-page hash scroll, or full navigation to homepage section from other routes. */
export function navigateToSection(sectionId: string): void {
  if (window.location.pathname === "/") {
    scrollToSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    return;
  }

  window.location.href = `/#${sectionId}`;
}
