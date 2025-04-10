"use client";
import React, { useEffect, useRef, useState } from "react";

const FutureAnimation: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const requestRef = useRef<number>(0);
  const centerX = 600;
  const centerY = 800;
  const radii = [300, 380, 460, 540, 620, 700];
  const speed = 0.002;

  useEffect(() => {
    const animate = () => {
      setAngle((prevAngle) => (prevAngle + speed) % (2 * Math.PI));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const calculatePosition = (radius: number, offset: number) => {
    const x = Number((centerX + radius * Math.cos(angle + offset)).toFixed(4));
    const y = Number((centerY + radius * Math.sin(angle + offset)).toFixed(4));
    return { x, y };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 1600"
        preserveAspectRatio="xMidYMin slice"
        className="absolute sm:top-[-180px] top-[-80px] left-0 w-full h-full opacity-30"
      >
        <defs>
          <radialGradient
            id="bg-gradient"
            cx="50%"
            cy="60%"
            r="70%"
            fx="50%"
            fy="60%"
          >
            <stop offset="0%" stopColor="rgba(123, 21, 248, 0)" />
            <stop offset="100%" stopColor="rgba(100, 149, 237, 0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-gradient)" />

        {radii.map((radius, index) => (
          <circle
            key={index}
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(249, 249, 249, 0.878)"
            strokeWidth="1"
            strokeDasharray={index % 2 === 0 ? "none" : "5,8"}
            transform={`rotate(${
              (angle * 180) / Math.PI
            }, ${centerX}, ${centerY})`}
          />
        ))}

        {radii.map((radius, index) =>
          [0, 2, 4].map((dotOffset) => {
            const offset = index * (Math.PI / 3) + dotOffset * (Math.PI / 3);
            const { x, y } = calculatePosition(radius, offset);
            const isBorderedDot = dotOffset !== 0;
            return isBorderedDot ? (
              <g key={`${index}-${dotOffset}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="none"
                  stroke="#c9cbcf"
                  strokeWidth="1.5"
                />
                <circle cx={x} cy={y} r="3" fill="#c9cbcf" />
              </g>
            ) : (
              <circle
                key={`${index}-${dotOffset}`}
                cx={x}
                cy={y}
                r="4"
                fill="#c9cbcf"
              />
            );
          })
        )}
      </svg>
    </div>
  );
};

export default FutureAnimation;
