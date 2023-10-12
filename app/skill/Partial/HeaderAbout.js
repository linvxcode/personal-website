'use client'
import React from 'react'
import { motion } from 'framer-motion'

const HeaderAbout = () => {
  return (
    <div>
      <motion.h2 className="text-2xl max-md:text-xl mt-5 md:pr-[50px]"
          initial={{
            opacity: 0,
            translateY: 100,
          }}
          viewport={{once: true}}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              type: "spring",
              duration: 1,
              stiffness: 100
            }
          }}
          >
            I find joy in the art of building interactive and responsive
            front-end solutions, helping brands and businesses connect with
            their target audience through seamless user experiences
          </motion.h2>
    </div>
  )
}

export default HeaderAbout
