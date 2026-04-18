import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Arrow {
  id: number;
  topPercent: number;
  duration: number;
}

const CupidArrow = () => {
  const [arrows, setArrows] = useState<Arrow[]>([]);

  useEffect(() => {
    let counter = 0;
    const spawn = () => {
      const newArrow: Arrow = {
        id: counter++,
        topPercent: 15 + Math.random() * 60,
        duration: 1.6 + Math.random() * 0.8,
      };
      setArrows((prev) => [...prev, newArrow]);
      setTimeout(() => {
        setArrows((prev) => prev.filter((a) => a.id !== newArrow.id));
      }, (newArrow.duration + 0.2) * 1000);
    };

    spawn();
    const interval = setInterval(spawn, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      <AnimatePresence>
        {arrows.map((arrow) => (
          <motion.div
            key={arrow.id}
            initial={{ x: "-15vw", opacity: 0 }}
            animate={{ x: "115vw", opacity: [0, 1, 1, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: arrow.duration, ease: "easeOut" }}
            style={{ top: `${arrow.topPercent}%` }}
            className="absolute text-3xl sm:text-4xl drop-shadow-lg"
          >
            <span className="inline-block">💘</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CupidArrow;
