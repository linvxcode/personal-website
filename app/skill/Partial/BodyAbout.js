'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { item } from '../ItemAbout'

const BodyAbout = () => {
  return (
    <div className='grid grid-cols-3  max-md:grid-cols-1 lg:col-span-2 relative z-[9]  place-items-center   w-full max-md:w-[100%] max-[390px]:grid-cols-1 mx-auto gap-x-[11rem]'>
      {item.map((items, index) => (
            <motion.div
              key={index}
              className={`relative ${items.mt} ${items.left} mx-auto max-md:mt-5  flex justify-center items-center`}
              initial={{
                opacity: 0,
                translateY: 100
              }}
              viewport={{once: true}}
              whileInView={{
                opacity: 1,
                translateY: 0,
                transition: {
                  type: "spring",
                  duration: 2,

                }
              }}
            >
              <motion.div
                initial={items.initial}
                animate={items.animate}
                transition={items.transition}
                className={`example-container ${items.backgroundColor} rounded-[15px] ${items.w} ${items.h} px-5`}
              ></motion.div>
              <motion.div
                className={`absolute top-0 ${items.w} ${items.h} mx-auto flex justify-center items-center p-5`}
              >
                {items.iconPath}
              </motion.div>
            </motion.div>
          ))}
    </div>
  )
}

export default BodyAbout
