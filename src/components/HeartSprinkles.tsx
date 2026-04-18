import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const HeartSprinkles = ({ onComplete }: { onComplete?: () => void }) => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const duration = 4000;
    const end = Date.now() + duration;

    const heartShape = confetti.shapeFromText({ text: "💕", scalar: 2 });

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#8B5E3C", "#D4A574", "#C9A96E", "#F5E6D3", "#A0522D"],
        shapes: [heartShape, "circle"],
        scalar: 1.2,
        drift: 0.5,
        gravity: 0.8,
        ticks: 200,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#8B5E3C", "#D4A574", "#C9A96E", "#F5E6D3", "#A0522D"],
        shapes: [heartShape, "circle"],
        scalar: 1.2,
        drift: -0.5,
        gravity: 0.8,
        ticks: 200,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        onComplete?.();
      }
    };

    frame();
  }, [onComplete]);

  return null;
};

export default HeartSprinkles;
