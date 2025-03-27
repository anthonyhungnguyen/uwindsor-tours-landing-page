"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [particlePositions, setParticlePositions] = useState<
    Array<{ start: { x: number; y: number }; end: { x: number; y: number } }>
  >([]);

  useEffect(() => {
    // Set initial viewport size
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Generate initial particle positions
    const positions = Array(20)
      .fill(0)
      .map(() => ({
        start: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        end: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      }));
    setParticlePositions(positions);

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Handle window resize
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Update particle positions on resize
      const newPositions = positions.map(() => ({
        start: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        end: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      }));
      setParticlePositions(newPositions);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (viewport.width === 0) return null; // Don't render until we have viewport dimensions

  return (
    <>
      <div className="fixed inset-0 pointer-events-none">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            animate={{
              x: [position.start.x, position.end.x],
              y: [position.start.y, position.end.y],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="fixed w-96 h-96 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </>
  );
};
