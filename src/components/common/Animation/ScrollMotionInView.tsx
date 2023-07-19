import { FC, PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { DEFAULT_DURATION } from "./constant";

const ScrollMotionInView: FC<PropsWithChildren<HTMLMotionProps<"div">>> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: DEFAULT_DURATION }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotionInView;
