import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 1200,
  prefix = "+",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const steps = duration / 20;
    const increment = target / steps;
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(interval);
          return target;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(count)}
    </span>
  );
}
