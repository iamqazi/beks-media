// components/DotsAnimation.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Dot {
  element: HTMLDivElement;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
}

const DotsAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number | null>(null);

  const dotCount = 80;
  const minDotSize = 3;
  const maxDotSize = 8;
  const dotOpacity = 0.9;
  const speedFactor = 2;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    container.innerHTML = "";
    dotsRef.current = [];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");

      const size = minDotSize + Math.random() * (maxDotSize - minDotSize);

      // Apply styles
      dot.className = `absolute rounded-full`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.backgroundColor = "#ffffff"; // Pure white
      dot.style.opacity = `${dotOpacity}`;
      dot.style.boxShadow = "0 0 3px rgba(255, 255, 255, 0.8)"; // Add glow effect

      // Random initial position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;

      // Random speed (positive or negative), higher values
      const speedX = (Math.random() - 0.5) * 2 * speedFactor;
      const speedY = (Math.random() - 0.5) * 2 * speedFactor;

      gsap.set(dot, { x, y });
      container.appendChild(dot);

      dotsRef.current.push({ element: dot, x, y, speedX, speedY, size });
    }

    // Animation function
    const animate = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      dotsRef.current.forEach((dot) => {
        // Update position
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Boundary check and bounce
        if (dot.x <= 0 || dot.x >= containerWidth - dot.size) {
          dot.speedX *= -1;
          dot.x = Math.max(0, Math.min(dot.x, containerWidth - dot.size));
        }

        if (dot.y <= 0 || dot.y >= containerHeight - dot.size) {
          dot.speedY *= -1;
          dot.y = Math.max(0, Math.min(dot.y, containerHeight - dot.size));
        }

        // Apply new position
        gsap.set(dot.element, { x: dot.x, y: dot.y });
      });

      // Use requestAnimationFrame instead of gsap.delayedCall
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
    ></div>
  );
};

export default DotsAnimation;
