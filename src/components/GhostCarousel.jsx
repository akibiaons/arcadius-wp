import React, { useState, useEffect } from "react";

export default function () {
  const img = [
    "https://cdn.sanity.io/images/z5s3oquj/production/ed7fe06ad850f14bdd5de4c030e278e85dababaa-2000x1080.jpg?w=640&q=75&fit=max",
    "https://cdn.sanity.io/files/z5s3oquj/production/3e3aabd3f483d52a7a525bfdaee6788556002ef5.mp4",
    "https://cdn.sanity.io/files/z5s3oquj/production/cbbe090aaa34ee2d6f65bf3ae0ae8c4827f65919.mp4",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

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
      <div className="relative flex flex-col items-center bg-black pb-4">
        <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4">
          {activeSlide === 1 || activeSlide === 2 ? (
            <video
              className="h-full w-full"
              src={img[activeSlide]}
              autoPlay
              muted
            />
          ) : (
            <img src={img[activeSlide]} className="w-full h-full" />
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
