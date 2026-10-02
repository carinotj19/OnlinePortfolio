import { useEffect } from 'react';
import { workshopState } from './workshopState';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lastY = window.scrollY;
    let lastTime = performance.now();

    const update = () => {
      const now = performance.now();
      const y = window.scrollY;
      const elapsed = Math.max(16, now - lastTime);
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

      workshopState.scroll = y / max;
      workshopState.velocity = ((y - lastY) / elapsed) * 16.67;

      lastY = y;
      lastTime = now;
    };

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const revealTargets = Array.from(
      document.querySelectorAll(
        'section:not(#hero) .section-label, section:not(#hero) .section-title, .about-text > p, .about-stack > *, .exp-item, .project-card, .skill-group, .contact-inner > *'
      )
    );

    let observer;

    if (!reduced && 'IntersectionObserver' in window) {
      revealTargets.forEach((element) => element.classList.add('motion-reveal'));

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('motion-reveal-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );

      revealTargets.forEach((element) => observer.observe(element));
    }

    window.addEventListener('scroll', update, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', update);
      observer?.disconnect();
    };
  }, []);

  return children;
}
