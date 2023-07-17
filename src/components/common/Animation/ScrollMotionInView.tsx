import { FC, PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const ScrollMotionInView: FC<PropsWithChildren<HTMLMotionProps<"div">>> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotionInView;
