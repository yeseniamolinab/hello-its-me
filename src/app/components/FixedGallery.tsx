import React from "react";
import RotatedImage from "./RotatedImage";
import { userAgent } from "next/server";
import { headers } from "next/headers";

const FixedGallery: React.FC = async () => {
  const headersList = await headers();
  const { device } = userAgent({ headers: headersList });
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <RotatedImage src="/opentable.JPG" alt="Me with the OpenTable team" />
      {device.type !== "mobile" && (
        <RotatedImage src="/googleio.JPG" alt="Me at Google I/O 2016" />
      )}
      <RotatedImage
        src="/speaker.jpg"
        alt="Me speaking at Encora's (Formerly Nearsoft) event"
      />
    </div>
  );
};

export default FixedGallery;
