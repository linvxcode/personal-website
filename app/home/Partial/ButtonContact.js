'use client'
import { motion, useAnimation } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import dynamic from "next/dynamic";

const GitVariants = {
  hover: {
    y: -6.5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const ButtonContact = () => {
    const ContactSvg = dynamic(() => import('./ContactSvg'))
  const buttonGitControls = useAnimation();
  const gitControls = useAnimation();

  const handlGiteHover = async () => {
    await buttonGitControls.start("hover");
    await gitControls.start("hover");
  };

  const handleGitLeave = async () => {
    await buttonGitControls.start({ y: 0 });
    await gitControls.start({ y: 0 });
  };
  return (
    <div>
      <motion.div
        data-testid="githover"
        onMouseEnter={handlGiteHover}
        onMouseLeave={handleGitLeave}
        className=""
      >
        <Button
          size="lg"
          color="default"
          variant="ghost"
          as={Link}
          href="mailto:mfahlevi740@mail.com"
          target="__blank"
        >
         <ContactSvg GitVariants={GitVariants} buttonGitControls={buttonGitControls} />
          Contact
        </Button>
      </motion.div>
    </div>
  );
};

export default ButtonContact;
