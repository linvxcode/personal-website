
'use client'
import { motion } from "framer-motion"

export const Motion = ({children, initial,whileHover, whileInView, className, viewport}) => {
return(
    <>
    <motion.div initial={initial} whileHover={whileHover} whileInView={whileInView} className={className} viewport={viewport}> 
    {children}
    </motion.div>
    </>
)
}