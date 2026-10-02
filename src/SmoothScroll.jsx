import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './motion/gsap';
import { workshopState } from './workshopState';

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduced = prefersReducedMotion();

    const updateWorkshopState = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      workshopState.scroll = window.scrollY / max;
    };

    if (reduced) {
      window.addEventListener('scroll', updateWorkshopState, { passive: true });
      updateWorkshopState();
      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener('scroll', updateWorkshopState);
      };
    }

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.35,
      syncTouch: false,
    });

    const onScroll = ({ velocity }) => {
      workshopState.velocity = velocity || 0;
      updateWorkshopState();
      ScrollTrigger.update();
    };

    lenis.on('scroll', onScroll);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);

    const ctx = gsap.context(() => {
      document.querySelectorAll('section:not(#hero)').forEach((section) => {
        const targets = section.querySelectorAll(
          '.section-label, .section-title, .about-text > p, .about-stack > *, .exp-item, .project-card, .skill-group, .contact-inner > *'
        );

        if (!targets.length) return;

        gsap.fromTo(
          targets,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.055,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 76%',
              once: true,
            },
          }
        );
      });
    });

    updateWorkshopState();
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.off('scroll', onScroll);
      lenis.destroy();
    };
  }, []);

  return children;
}
