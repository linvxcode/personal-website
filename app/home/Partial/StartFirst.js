import React from "react";
import { Motion } from "@/app/Component/Motion/Motion";

const AnimVariants = {
  initial: { translateY: 100, opacity: 0 },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  viewport: { once: true },
};
const StartFirst = () => {
  return (
    <div>
      <h1 className="lg:text-[4.5rem] text-gray-700 dark:text-gray-100 leading-[100px]  max-sm:text-3xl text-[3rem] text-center font-bold antialiased tracking-wide font-mons ">
        Frontend Developer
      </h1>
      <Motion
        className=" text-gray-700 dark:text-gray-100 text-center font-bold lg:text-7xl max-sm:text-3xl text-5xl antialiased tracking-wide font-mons "
        // variants={AnimVariants}
        // initial="initial"
        // animate="animate"
      >
        <span className=" font-normal">Based in</span> Indonesia
      </Motion>
    </div>
  );
};

export default StartFirst;
