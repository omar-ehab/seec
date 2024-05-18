'use client';
import { CountUp } from 'use-count-up';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function NumberCounter({
  value = 0,
  durationInSeconds = 2,
  className,
}: {
  value: number;
  durationInSeconds: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <span className={className} ref={ref}>
      <CountUp isCounting={isInView} end={value} duration={durationInSeconds} />
    </span>
  );
}
