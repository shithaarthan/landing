import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initTimeline() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".story-root",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      pin: ".canvas-sticky",
      anticipatePin: 1
    }
  });

  // scene 0 - Hook
  tl.fromTo(".hook", { opacity: 0, y: 20, rotationX: -20, rotationY: 20 }, { opacity: 1, y: 0, rotationX: 0, rotationY: 0, scale: 1.1, ease: "power2.out" })
    // scene 1 - Problem
    .to(".chaos .item", { y: -30, stagger: 0.08, rotation: 5, ease: "power3.out", rotationX: 10, rotationY: -10 })
    // scene 2 - Solution
    .to(".ui-mock", { scale: 1, opacity: 1, ease: "expo.out", rotationX: -5, rotationY: 5 })
    // scene 3 - Demo
    .to(".step-1", { opacity: 1, x: 0, rotationX: 0, rotationY: 0 })
    .to(".step-2", { opacity: 1, x: 0, rotationX: 5, rotationY: -5 })
    .to(".step-3", { opacity: 1, x: 0, rotationX: -5, rotationY: 5 })
    // scene 4 - CTA
    .to(".cta", { opacity: 1, scale: 1.02, rotationX: 0, rotationY: 0 });

  return tl;
}
