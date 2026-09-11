import { MotionValue, useReducedMotion, useTransform } from 'framer-motion';

export const useParallax = <T extends number | string>(
  progress: MotionValue<number>,
  output: [T, T],
  input: [number, number] = [0, 1],
  restValue: T = output[1]
): MotionValue<T> => {
  const reduced = useReducedMotion();
  return useTransform(progress, input, reduced ? [restValue, restValue] : output);
};
