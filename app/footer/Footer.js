
'use client'
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.div
        className="flex items-end h-[300px] pt-5 pb-5 justify-center flex-col "
        initial={{ height: 50 }}
        viewport={{ once: true }}
        whileInView={{
          height: 300,
          transition: {
            type: "spring",
            duration: 1,
          },
        }}
      >
        <motion.div
          className="flex justify-center flex-col"
          initial={{
            opacity: 0,
            translateY: 100,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              type: "spring",
              duration: 1,
            },
          }}
        >
          <motion.div
            className="flex "
            initial={{
              translateX: "-20px",
              translateY: "10px",
              translateZ: "0px",
              opacity: 0,
            }}
            viewport={{once:true}}
            whileInView={{
              translateX: "0px",
              translateY: "0px",
              translateZ: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1,
              },
            }}
          >
            <h1 className="text-2xl text-center font-medium">
            &quot;Last but not least, I want to thank me for believing in me. I
              want to thank me for doing all this hard work, I want to thank me
              for having no days off&quot;
            </h1>
          </motion.div>
          <div className="mt-3">
            <h2 className="text-xl italic text-center">&quot;Mamang Snoop Dog&quot;</h2>
            <h2 className="text-sm mt-3 text-center">
              Made by M Fahlevi. All rights reserved
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
