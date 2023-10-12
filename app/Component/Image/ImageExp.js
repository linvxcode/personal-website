import React, { useState } from "react";
import Image from "next/image";
const ImageExp = ({project}) => {
  const [LoadImg, setImgLoad] = useState(true);
  return (
    <div>
      <Image
        src={project.imgSrc}
        alt="img"
        loading="lazy"
        width={400}
        height={400}
        quality={100}
        onLoadingComplete={() => setImgLoad(false)}
        className={`
                              'duration-700 ease-in-out',
                              ${
                                LoadImg
                                  ? "scale-[1.02] blur-xl grayscale "
                                  : "scale-100 blur-0 grayscale-0 "
                              }`}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ImageExp;
