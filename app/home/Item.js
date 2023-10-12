export const item = [
    {
      href: "https://www.linkedin.com/in/m-fahlevi-921a1b26a/",
      ovr: "overflow-hidden",
      iconPath: "/svg/linkedin.svg",
  
      initial: {scale:1},
      animate: {scale:1.1},
      initialAnim : {translateY: -500, opacity: 0},
      whileInView: {translateY: 0, opacity: 1,transition: {
        type: "spring",
        stiffness: 300,
        duration: 3,
      }}
    },
    {
      href: "https://github.com/linvxcode",
      mt: "mt-20",
      iconPath: "/svg/github.svg",
      rounded: "rounded-full",
      initial: {rotate: 0},
      animate: {rotate: 20},
      initialAnim : {translateY: -520, opacity:0},
      whileInView: {translateY: 0, opacity:1,transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
      }}
    },
    {
      href: "https://www.instagram.com/viii_999_/?igshid=MzMyNGUyNmU2YQ%3D%3D",
      mt: "mt-20",
      iconPath: "/svg/ig.svg",
      initial: {scale:1},
      animate: {scale:1.1},
      initialAnim : {translateY: -500, opacity: 0},
      whileInView: {translateY: 0,opacity: 1, transition: {
        type: "spring",
        stiffness: 200,
        duration: 1,
      }}
    },
    {
      href: "https://www.facebook.com/muhammad.fahlevi.37017",
      iconPath: "/svg/fb.svg",
      initial: {translateY: 0},
      animate: {translateY: -10},
      initialAnim : {translateY: -500, opacity: 0},
      whileInView: {translateY: 0, opacity: 1,transition: {
        type: "spring",
        stiffness: 300,
        duration: 1,
      }}
    },
  ];