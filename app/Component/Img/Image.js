"use client";

import clsx from "clsx";
import NextImage from "next/image";
import { useState } from "react";

const Image = ({ priority,loading,alt, src, className, rounded, ...rest }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isLoading ? "animate-pulse rounded-full" : "",
        rounded,
      )}
    >
      <NextImage
        className={clsx(
          "duration-700 ease-in-out ",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className,
        )}
        style={{height: 'auto', width: "auto"}}
        src={src}
        alt={alt}
        // loading="lazy"
        quality={100}
        loading={loading}
        priority={priority}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
