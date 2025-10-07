import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initTimeline() {
  // Small delay to ensure hydration is complete before animations start
  gsap.set("[data-scene-intro-element]", { opacity: 1 });

  const introTrigger = ScrollTrigger.create({
    trigger: ".hook",
    start: "top top",
    end: "50% top", // Increased to 50% for a smoother fade
    scrub: 0.5, // Increased scrub for a smoother fade
    onUpdate: (self) => {
      // Fade out SceneIntro elements based on scroll progress through the section
      const opacity = Math.max(0, 1 - self.progress * 2);

      gsap.to("[data-scene-intro-element]", {
        opacity,
        duration: 0.03,
        ease: "power2.out"
      });

      // Fade out the entire section background
      gsap.to(".hook", {
        opacity: Math.max(0, 1 - self.progress * 0.5),
        duration: 0.05,
        ease: "power2.out"
      });
    }
  });

  // Start timeline with Problem Section animations
  // Calculate dynamic scroll distance for the main timeline
  // This ensures the scroll duration adapts to the number of animated sections.
  // Each major scene (Problem, Solution, Features, Demo, CTA) is allocated 800 pixels of scroll.
  const dynamicScrollEnd = `+=100`; // Total scroll distance set to 100 pixels as per user feedback

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".story-root",
      start: "top top",
      end: dynamicScrollEnd, // Total scroll distance
      scrub: 1,
      pin: ".canvas-sticky",
      anticipatePin: 1
    }
  });

  // scene 1 - Problem Section
  tl.fromTo(".chaos .item", {
    y: -30,
    rotation: 5,
    rotationX: 10,
    rotationY: -10,
    opacity: 0
  }, {
    y: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    opacity: 1,
    stagger: 0.08,
    ease: "power3.out"
  })

  // scene 2 - Solution Section
  .fromTo(".ui-mock", {
    scale: 0.8,
    opacity: 0,
    rotationX: -5,
    rotationY: 5
  }, {
    scale: 1,
    opacity: 1,
    rotationX: 0,
    rotationY: 0,
    ease: "expo.out"
  })

  // scene 3 - Features Section (Enhanced 3D animations)
  .fromTo(".features-scene .gradient-text", {
    opacity: 0,
    rotationX: -45,
    rotationY: 15,
    y: 50
  }, {
    opacity: 1,
    rotationX: 0,
    rotationY: 0,
    y: 0,
    ease: "power2.out"
  })
  .fromTo(".features-scene h2", {
    opacity: 0,
    rotationX: -30,
    y: 30
  }, {
    opacity: 1,
    rotationX: 0,
    y: 0,
    ease: "power2.out"
  }, "-=0.3")
  .fromTo(".features-scene p", {
    opacity: 0,
    rotationX: 20,
    y: 20
  }, {
    opacity: 1,
    rotationX: 0,
    y: 0,
    ease: "power2.out"
  }, "-=0.2")
  .fromTo(".features-scene .card", {
    opacity: 0,
    rotationX: -25,
    rotationY: -15,
    scale: 0.8,
    y: 60
  }, {
    opacity: 1,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    y: 0,
    stagger: 0.15,
    ease: "back.out(1.7)"
  }, "-=0.4")
  .to(".features-scene .card", {
    rotationY: 5,
    rotationX: 2,
    duration: 3,
    ease: "none"
  })

  // scene 4 - Demo Section
  .fromTo(".step-1", {
    opacity: 0,
    x: -50,
    rotationX: 0,
    rotationY: 0
  }, {
    opacity: 1,
    x: 0,
    rotationX: 0,
    rotationY: 0,
    ease: "power2.out"
  })
  .fromTo(".step-2", {
    opacity: 0,
    x: -50,
    rotationX: 5,
    rotationY: -5
  }, {
    opacity: 1,
    x: 0,
    rotationX: 0,
    rotationY: 0,
    ease: "power2.out"
  }, "-=0.2")
  .fromTo(".step-3", {
    opacity: 0,
    x: -50,
    rotationX: -5,
    rotationY: 5
  }, {
    opacity: 1,
    x: 0,
    rotationX: 0,
    rotationY: 0,
    ease: "power2.out"
  }, "-=0.2")

  // scene 5 - CTA Section
  .fromTo(".cta", {
    opacity: 0,
    scale: 0.9,
    rotationX: 0,
    rotationY: 0
  }, {
    opacity: 1,
    scale: 1.02,
    rotationX: 0,
    rotationY: 0,
    ease: "power2.out"
  });

  return tl;
}
