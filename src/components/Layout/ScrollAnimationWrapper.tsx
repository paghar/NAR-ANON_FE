import {motion} from "framer-motion";

export default function ScrollAnimationWrapper({children, className,viewAmount=0.5, ...props}: any) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once: true, amount:viewAmount}}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
