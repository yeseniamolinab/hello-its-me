import React from "react";
import Image from "next/image";

interface RotatedImageProps {
  src: string;
  alt: string;
}

const RotatedImage: React.FC<RotatedImageProps> = ({ src, alt }) => {
  return (
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
      <Image
        src={src}
        width={400}
        height={400}
        className="absolute inset-0 h-full w-full object-cover"
        alt={alt}
      />
    </div>
  );
};

export default RotatedImage;
