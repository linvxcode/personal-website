'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { texts } from '../Text'

const HeaderText = () => {
  return (
    <div>
      <motion.h1 className="text-4xl lg:text-6xl flex w-[100%] font-semibold tracking-tight font-mons">
            {texts.map((text, index) => (
              <motion.span
                key={index}
                className={`${text.class}`}
                initial={{
                  translateX: "-20px",
                  translateY: "10px",
                  translateZ: "0px",
                  opacity: 0,
                }}
                viewport={{once : true}}
                whileInView={text.whileInVIew}
              >
                {text.t}
              </motion.span>
            ))}
          </motion.h1>
    </div>
  )
}

export default HeaderText
