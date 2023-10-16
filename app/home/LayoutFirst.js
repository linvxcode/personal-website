'use client'

import { Button, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { motion, MotionConfig} from "framer-motion";
import Image from "../Component/Img/Image";
import { useMediaQuery } from "react-responsive";



const LayoutFirst = () => {
  const [isHover, setIsHover] = useState(false);
  const isDekstop = useMediaQuery({
    query: '(min-width: 640px)'
  })


  const handleHover = (index) => {
    setIsHover(index);
  };

  const handleHoverLeave = () => {
    setIsHover(null);
  };


  const item = [
    {
      href: "https://www.linkedin.com/in/m-fahlevi-921a1b26a/",
      ovr: "overflow-hidden",
      iconPath: "/svg/linkedin.svg",
  
      initial: {scale:1},
      animate: {scale:1.1},
      initialAnim : {translateY: -500, opacity: 0},
      whileInView: {translateY: 0, opacity: 1,transition: {
        type: "spring",
        stiffness: 300,
        duration: 3,
      }}
    },
    {
      href: "https://github.com/linvxcode",
      mt: "mt-20",
      iconPath: "/svg/github.svg",
      rounded: "rounded-full",
      initial: {rotate: 0},
      animate: {rotate: 20},
      initialAnim : {translateY: -520, opacity:0},
      whileInView: {translateY: 0, opacity:1,transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
      }}
    },
    {
      href: "https://www.instagram.com/viii_999_/?igshid=MzMyNGUyNmU2YQ%3D%3D",
      mt: "mt-20",
      iconPath: "/svg/ig.svg",
      initial: {scale:1},
      animate: {scale:1.1},
      initialAnim : {translateY: -500, opacity: 0},
      whileInView: {translateY: 0,opacity: 1, transition: {
        type: "spring",
        stiffness: 200,
        duration: 1,
      }}
    },
    {
      href: "https://www.facebook.com/muhammad.fahlevi.37017",
      iconPath: "/svg/fb.svg",
      initial: {translateY: 0},
      animate: {translateY: -10},
      initialAnim : {translateY: -500, opacity: 0},
      whileInView: {translateY: 0, opacity: 1,transition: {
        type: "spring",
        stiffness: 300,
        duration: 1,
      }}
    },
  ];

  return (
      <div className="grid grid-cols-4 relative z-[9] max-md:gap-3 place-content-center place-items-center  max-md:grid-cols-2 w-full max-sm:w-[100%] max-[390px]:grid-cols-1 mx-auto gap-10">
        <MotionConfig reducedMotion={isDekstop ? 'never' : 'always'}>

        {item.map((items, index) => (
          <motion.div
            key={index}
            className={`relative ${items.mt} max-md:mt-5 flex `}
            whileHover={() => handleHover(index)}
            onMouseLeave={handleHoverLeave}
            initial={items.initialAnim  }
            viewport={{once: true}}
            animate={items.whileInView}
          >
            <Button
              className={`h-full group overflow-visible bg-transparent max-md:${items.ovr}`}
              variant="solid"
              as={Link}
              href={items.href}
              target="__blank"
              aria-label="button"
            >
              <motion.div
                initial={{ borderRadius: "100px" }}
                animate={
                  isHover === index
                    ? {
                        borderRadius: "40px",
                        scale: 1.1,
                        transition: {
                          type: "spring",
                        },
                      }
                    : {}
                }
                style={{ backgroundColor: "#10141e94" }}
                className={`w-[150px] h-[150px] max-sm:w-[140px] max-sm:h-[140px] flex  items-center`}
              >
              </motion.div>
              <motion.div className="absolute top-0 flex justify-center items-center p-5"
              initial={items.initial}
              animate={items.animate}
              transition={{
                type: "spring",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              >
                <Image className={`${items.rounded}`} priority={true} src={items.iconPath} alt="asd" width={150} height={150}  />
              </motion.div>
            </Button>
          </motion.div>
        ))}
        </MotionConfig>
       
      </div>
  );
};

export default LayoutFirst;
