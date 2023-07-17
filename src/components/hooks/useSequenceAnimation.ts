import {
  AnimationSequence,
  useAnimate,
  SequenceOptions,
  DynamicAnimationOptions,
  At,
} from "framer-motion";
import { MutableRefObject, useCallback } from "react";

interface SequenceItem {
  ref: MutableRefObject<any>;
  withNav?: boolean;
  option?: DynamicAnimationOptions & At;
}

export const useSequenceAnimation = (options?: SequenceOptions) => {
  const [_, animate] = useAnimate();

  return useCallback(
    (items: SequenceItem[]) => {
      const isValid = items.every(({ ref: node }) => node.current !== null);

      if (!isValid) {
        return;
      }

      const sequence: AnimationSequence = items.map(
        ({ ref, withNav, option }) => [
          withNav ? [ref.current, "nav"] : [ref.current],
          { y: [50, 0], opacity: [0, 1] },
          { duration: 0.3, ...option },
        ]
      );

      animate(sequence, options);
    },
    [animate, options]
  );
};
