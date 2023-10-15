'use client'
import { motion, useAnimation } from "framer-motion";
import Btn from "@/app/Component/Button/Btn";
import dynamic from "next/dynamic";

const svgVariants = {
  hover: {
    x: 6.5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const ButtonGetStart = () => {
  const GetStartSvg = dynamic(() => import('./GetStartSvg'))

  const buttonControls = useAnimation();
  const svgControls = useAnimation();

  const handleHover = async () => {
    await buttonControls.start("hover");
    await svgControls.start("hover");
  };

  const handleLeave = async () => {
    await buttonControls.start({ x: 0 });
    await svgControls.start({ x: 0 });
  };
  return (
    <div>
      <motion.div
        data-testid="hover test"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className=""
      >
        <Btn to="about" className="shadow-2xl">
          Get Started
          <GetStartSvg svgVariants={svgVariants} svgControls={svgControls} />
        </Btn>
      </motion.div>
    </div>
  );
};

export default ButtonGetStart;
