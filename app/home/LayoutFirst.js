'use client'

import { Button, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { motion} from "framer-motion";
import Image from "next/image";
import { item } from "./Item";

const LayoutFirst = () => {
  const [isHover, setIsHover] = useState(false);
  

  const handleHover = (index) => {
    setIsHover(index);
  };

  const handleHoverLeave = () => {
    setIsHover(null);
  };

  return (
    <div>
      <div className="grid grid-cols-4 relative z-[9] max-md:gap-3 place-content-center place-items-center  max-md:grid-cols-2 w-full max-sm:w-[100%] max-[390px]:grid-cols-1 mx-auto gap-10">
        {item.map((items, index) => (
          <motion.div
            key={index}
            className={`relative ${items.mt} max-md:mt-5 flex `}
            whileHover={() => handleHover(index)}
            onMouseLeave={handleHoverLeave}
            initial={items.initialAnim}
            whileInView={items.whileInView}
            viewport={{once: true}}
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
                style={{ backgroundColor: "#2654b98f" }}
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
                <Image className={`${items.rounded}`} quality={100} loading="lazy" src={items.iconPath} alt="asd" width={150} height={150} style={{width: "auto", height: "auto"}} />
              </motion.div>
            </Button>
          </motion.div>
        ))}

       
      </div>
    </div>
  );
};

export default LayoutFirst;
