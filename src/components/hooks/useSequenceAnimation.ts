import { AnimationSequence, useAnimate, SequenceOptions } from "framer-motion";
import { MutableRefObject, useCallback } from "react";

interface SequenceItem {
  ref: MutableRefObject<any>;
  withNav?: boolean;
}

export const useSequenceAnimation = (options?: SequenceOptions) => {
  const [_, animate] = useAnimate();

  return useCallback(
    (items: SequenceItem[]) => {
      const isValid = items.every(({ ref: node }) => node.current !== null);

      if (!isValid) {
        return;
      }

      const sequence: AnimationSequence = items.map(({ ref, withNav }) => [
        withNav ? [ref.current, "nav"] : [ref.current],
        { y: [50, 0], opacity: [0, 1] },
        { duration: 0.5 },
      ]);

      animate(sequence, options);
    },
    [animate, options]
  );
};
