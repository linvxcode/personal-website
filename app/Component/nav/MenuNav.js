// import "./styles.css";
// import Styles from '@/styles/styles.css
import React from "react";
import { motion } from "framer-motion";
import Btn from "../Button/Btn";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};


function MenuNav({isOpen, setIsMenuOpen}) {


  return (
    <motion.div className="flex w-[100%]"
    initial={{ opacity: 0 }}
    transition={{ type: "spring", bounce: 0.2, duration: 1}}
    animate={{ opacity: 1 }}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="   aflex relative top-0 z-10   transition-all"
        
      >

        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className='h-screen fixed w-[100%] right-0 top-[80px] bg-[#b1b1b1]   dark:bg-[#3d3c3c]'
        >
           <motion.li variants={itemVariants} className="block ">
            <ul> {/* Add this unordered list */}
              <li> {/* List item for the first menu item */}
                <div className="flex flex-col justify-start px-8">
                  <Btn
                    to="about"
                    variant="light"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Btn>
                </div>
              </li>
              <li> 
                <div className="flex flex-col justify-start px-8">
                  <Btn
                    to="skill"
                    variant="light"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technology
                  </Btn>
                </div>
              </li>
              <li> 
                <div className="flex flex-col justify-start px-8">
                  <Btn
                    to="triple"
                    variant="light"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portofolio
                  </Btn>
                </div>
              </li>

            </ul>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
}

export default MenuNav;
