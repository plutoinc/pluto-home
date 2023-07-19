import { FC, PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { DEFAULT_DURATION, DEFAULT_Y } from "./constant";

const ScrollMotionInView: FC<PropsWithChildren<HTMLMotionProps<"div">>> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: DEFAULT_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: DEFAULT_DURATION }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotionInView;
