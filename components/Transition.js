import { animate, delay, easeInOut, motion } from "framer-motion";

const transitionanimation = {
  initial: { x: "100%", width: "100%" },
  animate: { x: "0%", width: "0%" },
  exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
};

const Transition = () => {
  return (
    <>
     <motion.div
      variants={transitionanimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 button-0 right-full w-screen h-screen z-30 bg-white/90"></motion.div>

       <motion.div
      variants={transitionanimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
      className="fixed top-0 button-0 right-full w-screen h-screen z-20 bg-[#f16324]"></motion.div>
    </>


  );
};

export default Transition;
