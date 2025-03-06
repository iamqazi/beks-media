"use client";

import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [circles, setCircles] = useState<
    {
      id: number;
      size: number;
      left: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const numCircles = 100;
    const newCircles = Array.from({ length: numCircles }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // Random size between 4px and 12px
      left: Math.random() * 100, // Positioning in viewport width
      duration: Math.random() * 9 + 5, // Animation duration between 5s and 14s
      delay: Math.random() * 1, // Random delay up to 1s
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div className="w-full inset-0 overflow-hidden bg-white">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute bg-white rounded-full animate-float"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.left}vw`,
            bottom: "-10vh",
            opacity: 1, // Ensure full opacity
            animationDuration: `${circle.duration}s`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(100vh);
            opacity: 1;
          }
          to {
            transform: translateY(-100vh);
            opacity: 1; // Ensure dots remain fully visible
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
