'use client'
import React from 'react'
import { motion } from 'framer-motion'

const SecondText = () => {
  return (
    <div>
      <motion.h2
            className="lg:text-2xl text-xl font-pop mt-5 dark:text-white text-black"
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
                duration: 2,
                stiffness: 100,
                delay: 0.3,
              },
            }}
          >
            Hi, my name is Fahlevi I am a front-end web developer, i’m 23 years
            old. I got a bachelor of Informatics Engineering at Universitas
            Islam Kebangsaan Indonesia(2018-2023),
            <br /> My journey in the world of web development has led me to
            specialize in cutting-edge technologies, with a strong foundation in
            Next.js and React on the frontend and Laravel on the backend. <br />
            In the realm of frontend development, I have honed my skills in
            creating dynamic and user-friendly interfaces using Next.js and
            React. I thrive on turning ideas into interactive experiences,
            whether it&rsquo;s building responsive web applications, optimizing
            website performance, or creating seamless user interfaces. I believe
            in staying up-to-date with the latest industry trends and best
            practices to ensure that the digital solutions I craft are not only
            visually stunning but also highly efficient and user-focused
          </motion.h2>
    </div>
  )
}

export default SecondText
