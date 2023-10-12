"use client";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/react";
import { projects } from "../Project";
import CardExp from "@/app/Component/Card/CardExp";

const BodyExp = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-5 gap-5 mt-10">
        {projects?.map((project, index) => (
          // <LazyLoadComponent key={index}>
          <motion.div
            key={index}
            initial={project.initial}
            whileInView={project.whileInVIew}
            viewport={{ once: true }}
          >
            <Link
              className="z-[9] hover:opacity-100 focus:opacity-100"
              href={project.Url}
              target="__blank"
            >
              <motion.div
                className=""
                data-testid="hovertest"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{
                  type: "spring",
                }}
              >
                <CardExp project={project} />
              </motion.div>
            </Link>
          </motion.div>
          // </LazyLoadComponent>
        ))}
      </div>
    </div>
  );
};

export default BodyExp;
