import React, { useState, useEffect } from "react";

export default function CounterIntrusionImg() {
  const img = [
    "https://cdn.sanity.io/images/z5s3oquj/production/954be1706c4bf05ae4e62eef5540df317d5529e4-873x873.png?w=640&q=75&fit=max",
    "https://cdn.sanity.io/files/z5s3oquj/production/48dd154e1ad4366c3d5f9899210919fdcb167a32.mp4",
    "https://cdn.sanity.io/files/z5s3oquj/production/edb8775072e5903bdb4d8f6eb2e2087b757389b3.mp4",
  ];
  {
    /*Above is an array of images for counter intrusion*/
  }
  const [activeSlide, setActiveSlide] = useState(0);
  // Above is the state set to zero to initalize at an the first image [0]

  // Below I will make a function that changes the state based on a timer
  useEffect(() => {
    // Timer start here:
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % img.length);
    }, 4400);

    // Gotta clear the timer below...first-letter...
    return () => clearInterval(timer);
  }, [img.length]);

  return (
    <>
      <div className="relative flex flex-col items-center bg-black text-white py-4 border-b border-white">
        <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4 min-h-[300px]">
          {activeSlide === 1 || activeSlide === 2 ? (
            <video
              className="h-[300px]"
              src={img[activeSlide]}
              autoPlay
              muted
            />
          ) : (
            <img src={img[activeSlide]} className="h-full w-full" />
          )}
        </div>
        <div className="flex justify-center mt-4">
          {img.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === activeSlide ? "bg-gray-300" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
