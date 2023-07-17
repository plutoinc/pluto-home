import { AnimationSequence, useAnimate } from "framer-motion";
import { MutableRefObject, useCallback } from "react";

interface SequenceItem {
  node: MutableRefObject<any>;
  withNav?: boolean;
}

export const useSequenceAnimation = () => {
  const [_, animate] = useAnimate();

  return useCallback(
    (items: SequenceItem[]) => {
      const isValid = items.every(({ node }) => node.current !== null);

      if (!isValid) {
        return;
      }

      const sequence: AnimationSequence = items.map(({ node, withNav }) => [
        withNav ? [node.current, "nav"] : [node.current],
        { y: [50, 0], opacity: [0, 1] },
        { duration: 0.5 },
      ]);

      animate(sequence);
    },
    [animate]
  );
};
