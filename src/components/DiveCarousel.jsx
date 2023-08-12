import React, { useState, useEffect } from "react";

export default function DiveCarousel() {
  const img = [
    "https://cdn.sanity.io/images/z5s3oquj/production/a4c29a97fd3552594c836615e74f8d56b63e1623-1008x1008.png?w=3840&q=75&fit=max",
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
          <img src={img[activeSlide]} className="w-full h-full" />
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
