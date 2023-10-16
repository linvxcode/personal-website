"use client";
import Image from "../Component/Img/Image";
import { Nav } from "../Component/nav/Nav";
import About from "../about/About";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import Backgound from "../home/Extras/Backgound";
import Meteor from "../home/Extras/Meteor";
import First from "../home/page";
import Skill from "../skill/Skill";
import Orbit2 from "../home/Extras/Orbit2";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Svg from "../about/Extras/Svg";

const Home = () => {
  const mobile = useMediaQuery({
    query: "(min-width: 640px)",
  });
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 400], [0, 400]);
  const x = useTransform(scrollY, [0, 900], [0, -400]);
  const y1 = useTransform(scrollY, [100, 500], [0, 500]);
  const tranlateY = useSpring(y2, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const tranlateX = useSpring(y1, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const tranlatex = useSpring(x, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div className="">
      <motion.div className="">
        <Backgound />
      </motion.div>
      <motion.div className="overflow-x-clip  relative">
        <motion.div
          className="absolute top-0 left-[-70px] max-md:hidden hidden dark:flex"
          style={
            mobile ? { y: tranlateY, x: tranlateX } : { transform: "none" }
          }
        >
          <Meteor />
        </motion.div>
        <motion.div
          className="absolute right-[360px] top-[370px] max-md:hidden dark:flex hidden"
          style={mobile ? { x: tranlatex } : { transform: "none" }}
        >
          <Orbit2 />
        </motion.div>
      </motion.div>
      <motion.div className="max-w-7xl mx-auto">
        <Nav />
        <motion.div
          id="home"
          className="relative h-screen flex justify-center max-md:h-[400px] max-md:mt-[100px] items-center flex-row flex-wrap  "
        >
          <First />
        </motion.div>

        <div className="absolute top-[100px] left-[-100px] z-[-9]">
          <Image
            alt="svg"
            src="/svg/bg.svg"
            width={400}
            height={400}
            priority={true}
          />
        </div>

        <div
          id="about"
          className="relative overflow-hidden clipp max-md:mt-[300px] max-sm:mt-[300px] max-[390px]:mt-[700px] px-11 lg:px-24 flex "
        >
          <About />

          <motion.div className="absolute top-[100px]">
            <div className="flex w-full">

            <Svg />
            </div>
          </motion.div>
        </div>
        <div className="absolute right-0">
          <Image
            alt="svg"
            src="/svg/bg.svg"
            width={400}
            height={400}
            priority={true}
          />
        </div>
        <div id="skill" className=" max-sm:mt-[30px] px-11 lg:px-24 flex ">
          <Skill />
        </div>
        <div
          id="triple"
          className="   max-sm:mt-[100px] px-11 lg:px-24 flex flex-col"
        >
          <Experience />
        </div>
      </motion.div>
      <div className="h-auto  lg:px-24 px-11 bg-[#e2e8f0] dark:bg-[#232425]">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
