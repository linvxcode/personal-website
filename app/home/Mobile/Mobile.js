import { Button, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Image from "@/app/Component/Img/Image";

// const item = [
//     {
//       href: "https://www.linkedin.com/in/m-fahlevi-921a1b26a/",
//       ovr: "overflow-hidden",
//       iconPath: "/svg/linkedin.svg",
  
//     },
//     {
//       href: "https://github.com/linvxcode",
//       mt: "mt-20",
//       iconPath: "/svg/github.svg",
//       rounded: "rounded-full",
//     },
//     {
//       href: "https://www.instagram.com/viii_999_/?igshid=MzMyNGUyNmU2YQ%3D%3D",
//       mt: "mt-20",
//       iconPath: "/svg/ig.svg",
//     },
//     {
//       href: "https://www.facebook.com/muhammad.fahlevi.37017",
//       iconPath: "/svg/fb.svg",
//     },
//   ];

const Mobile = ({item}) => {
  return (
        <div>
      {item.map((items, index) => (
          <motion.div
            key={index}
            className={`relative ${items.mt} max-md:mt-5 flex `}
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
                // style={{ backgroundColor: "#2654b98f" }}
                
                className={`w-[150px] h-[150px] max-sm:w-[140px] max-sm:h-[140px] flex  items-center`}
              >
              </motion.div>
              <motion.div className="absolute top-0 flex justify-center items-center p-5"
              >
                <Image className={`${items.rounded}`} priority={true} src={items.iconPath} alt="asd" width={150} height={150}  />
              </motion.div>
            </Button>
          </motion.div>
        ))}
                </div>
    )
}

export default Mobile
