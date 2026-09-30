import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#root section:not(section section)",
    );

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
