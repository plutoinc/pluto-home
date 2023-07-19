import {
  AnimationSequence,
  useAnimate,
  DynamicAnimationOptions,
  At,
} from "framer-motion";
import { MutableRefObject, useCallback } from "react";
import { DEFAULT_DURATION, DEFAULT_Y } from "../common/Animation/constant";

interface SequenceItem {
  ref: MutableRefObject<any>;
  withNav?: boolean;
  option?: DynamicAnimationOptions & At;
}

export const useSequenceAnimation = () => {
  const [_, animate] = useAnimate();

  return useCallback(
    (items: SequenceItem[]) => {
      const hasEmptyNode = items.some(({ ref }) => ref.current === null);

      if (hasEmptyNode) {
        return;
      }

      const sequence: AnimationSequence = items.map(
        ({ ref, withNav, option }) => [
          withNav ? [ref.current, "nav"] : [ref.current],
          { y: [DEFAULT_Y, 0], opacity: [0, 1] },
          {
            duration: DEFAULT_DURATION,
            at: withNav ? "nav" : option?.at,
            ...option,
          },
        ]
      );

      animate(sequence);
    },
    [animate]
  );
};
