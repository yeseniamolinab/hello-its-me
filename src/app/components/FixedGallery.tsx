import React from "react";
import RotatedImage from "./RotatedImage";

const FixedGallery: React.FC = () => {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <RotatedImage src="/opentable.JPG" alt="Me with the OpenTable team" />
      <RotatedImage src="/googleio.JPG" alt="Me at Google I/O 2016" />
      <RotatedImage
        src="/speaker.jpg"
        alt="Me speaking at Encora's (Formerly Nearsoft) event"
      />
    </div>
  );
};

export default FixedGallery;
