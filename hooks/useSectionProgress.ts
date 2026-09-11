import { RefObject } from 'react';
import { MotionValue, useScroll } from 'framer-motion';

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset'];

export const SECTION_OFFSET: ScrollOffset = ['start end', 'end start'];
export const PINNED_OFFSET: ScrollOffset = ['start start', 'end end'];

export const useSectionProgress = (
  ref: RefObject<HTMLElement>,
  offset: ScrollOffset = SECTION_OFFSET
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return scrollYProgress;
};
