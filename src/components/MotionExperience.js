import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MotionExperience() {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const xRef = useRef(null);
  const yRef = useRef(null);
  const scrollRef = useRef(null);
  const rpmRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      if (loaderRef.current) {
        loaderRef.current.style.display = "none";
      }
      document.documentElement.classList.add("reduced-motion");
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.05
    });

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onPointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      if (xRef.current) xRef.current.textContent = Math.round(x);
      if (yRef.current) yRef.current.textContent = Math.round(y);

      const stage = document.querySelector(".contraption-stage");
      if (!stage) return;

      const xPercent = x / window.innerWidth - 0.5;
      const yPercent = y / window.innerHeight - 0.5;

      gsap.to(stage, {
        rotateY: xPercent * 3.5,
        rotateX: yPercent * -3,
        x: xPercent * 7,
        y: yPercent * 5,
        duration: 0.9,
        ease: "power3.out",
        transformPerspective: 1100,
        transformOrigin: "center center",
        overwrite: "auto"
      });
    };

    const onScroll = ({ scroll, velocity }) => {
      if (scrollRef.current) scrollRef.current.textContent = Math.round(scroll);
      if (rpmRef.current) {
        const rpm = Math.min(512, Math.max(24, Math.round(Math.abs(velocity) * 14 + 64)));
        rpmRef.current.textContent = rpm;
      }
    };

    lenis.on("scroll", onScroll);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const loaderValue = { value: 0 };
    const loadTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.documentElement.classList.add("motion-ready");
      }
    });

    loadTimeline
      .to(loaderValue, {
        value: 100,
        duration: 1.15,
        ease: "power2.inOut",
        onUpdate: () => {
          const value = Math.round(loaderValue.value);
          if (progressRef.current) progressRef.current.textContent = value;
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${value / 100})`;
          }
        }
      })
      .to(".loader-door-left", { xPercent: -102, duration: 0.82 }, "+=0.08")
      .to(".loader-door-right", { xPercent: 102, duration: 0.82 }, "<")
      .to(loaderRef.current, { autoAlpha: 0, duration: 0.15 }, "-=0.15")
      .set(loaderRef.current, { display: "none" })
      .from(".topbar", { y: -90, autoAlpha: 0, duration: 0.7 }, "-=0.3")
      .from(".status-chip", { y: 18, autoAlpha: 0, duration: 0.45 }, "-=0.4")
      .from(".hero-kicker", { y: 28, autoAlpha: 0, duration: 0.5 }, "-=0.25")
      .from(".hero-copy h1", { y: 70, autoAlpha: 0, duration: 0.85 }, "-=0.28")
      .from(".hero-intro", { y: 35, autoAlpha: 0, duration: 0.6 }, "-=0.42")
      .from(".hero-actions > *", {
        y: 25,
        autoAlpha: 0,
        duration: 0.45,
        stagger: 0.08
      }, "-=0.35")
      .from(".instrument", {
        y: 26,
        autoAlpha: 0,
        duration: 0.42,
        stagger: 0.06
      }, "-=0.3")
      .from(".contraption-stage", {
        scale: 0.93,
        autoAlpha: 0,
        rotateZ: -1.3,
        duration: 1
      }, "-=0.9");

    gsap.to(".gear-one", {
      rotation: 900,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.35
      }
    });

    gsap.to(".gear-two", {
      rotation: -1220,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4
      }
    });

    gsap.to(".gear-three", {
      rotation: 1580,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });

    gsap.to(".vertical-shaft", {
      backgroundPositionY: "0 -280px",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    gsap.to(".belt-track", {
      backgroundPositionX: "-420px",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.4
      }
    });

    gsap.to(".contraption-stage", {
      yPercent: 9,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.6
      }
    });

    gsap.utils.toArray(".section-heading").forEach((heading) => {
      const eyebrow = heading.querySelector(".eyebrow");
      const title = heading.querySelector("h2");
      const copy = heading.querySelector(".section-copy");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 82%",
          once: true
        }
      });

      timeline
        .from(eyebrow, { x: -25, autoAlpha: 0, duration: 0.45 })
        .from(title, { y: 55, autoAlpha: 0, duration: 0.75 }, "-=0.18");

      if (copy) {
        timeline.from(copy, { y: 25, autoAlpha: 0, duration: 0.5 }, "-=0.35");
      }
    });

    gsap.utils.toArray(".project-machine").forEach((card, index) => {
      gsap.from(card, {
        y: 110,
        autoAlpha: 0,
        rotateX: 7,
        scale: 0.97,
        duration: 0.9,
        delay: (index % 2) * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true
        }
      });

      const screen = card.querySelector(".project-screen img");
      if (screen) {
        gsap.fromTo(
          screen,
          { yPercent: -7, scale: 1.08 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.55
            }
          }
        );
      }
    });

    gsap.from(".logbook", {
      y: 100,
      rotateX: 8,
      autoAlpha: 0,
      transformOrigin: "center top",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".logbook",
        start: "top 84%",
        once: true
      }
    });

    gsap.from(".processor", {
      y: 55,
      autoAlpha: 0,
      stagger: 0.12,
      duration: 0.6,
      ease: "back.out(1.45)",
      scrollTrigger: {
        trigger: ".processing-line",
        start: "top 83%",
        once: true
      }
    });

    gsap.fromTo(
      ".tree-line",
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".advancement-tree",
          start: "top 78%",
          once: true
        }
      }
    );

    gsap.from(".advancement", {
      y: 55,
      scale: 0.88,
      autoAlpha: 0,
      stagger: 0.11,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".advancement-tree",
        start: "top 80%",
        once: true
      }
    });

    gsap.from(".station-board", {
      y: 100,
      scale: 0.95,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".signal-section",
        start: "top 78%",
        once: true
      }
    });

    const magneticTargets = document.querySelectorAll(".create-button, .project-links a, .departure-board a");

    const magneticCleanups = Array.from(magneticTargets).map((target) => {
      const move = (event) => {
        const rect = target.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(target, {
          x: x * 0.08,
          y: y * 0.1,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto"
        });
      };

      const leave = () => {
        gsap.to(target, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.45)",
          overwrite: "auto"
        });
      };

      target.addEventListener("pointermove", move);
      target.addEventListener("pointerleave", leave);

      return () => {
        target.removeEventListener("pointermove", move);
        target.removeEventListener("pointerleave", leave);
      };
    });

    ScrollTrigger.refresh();

    return () => {
      magneticCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("pointermove", onPointerMove);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      gsap.ticker.remove(ticker);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div className="site-loader" ref={loaderRef} aria-hidden="true">
        <div className="loader-door loader-door-left" />
        <div className="loader-door loader-door-right" />
        <div className="loader-core">
          <span>ASSEMBLING WORKSHOP</span>
          <strong><span ref={progressRef}>0</span>%</strong>
          <div className="loader-track">
            <span ref={progressBarRef} />
          </div>
        </div>
      </div>

      <aside className="kinetic-telemetry" aria-hidden="true">
        <span>KINETIC TELEMETRY</span>
        <dl>
          <div><dt>X</dt><dd ref={xRef}>0</dd></div>
          <div><dt>Y</dt><dd ref={yRef}>0</dd></div>
          <div><dt>SCROLL</dt><dd ref={scrollRef}>0</dd></div>
          <div><dt>RPM</dt><dd ref={rpmRef}>64</dd></div>
        </dl>
      </aside>
    </>
  );
}

export default MotionExperience;
