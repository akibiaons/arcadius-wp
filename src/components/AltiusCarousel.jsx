import React, { useState, useEffect } from "react";

export default function AltiusCarousel() {
  const img = [
    "https://cdn.sanity.io/images/z5s3oquj/production/25b617ac86c139de9e540913e6c550183e4ce1ca-2000x2000.png?w=2048&q=75&fit=max",
    "https://cdn.sanity.io/images/z5s3oquj/production/4a11f2b5c546eb9fd01b5b3a474de1eea7e07477-6048x4024.jpg?w=2048&q=75&fit=max",
    "https://cdn.sanity.io/images/z5s3oquj/production/272390dc7d31dee163637100744a9b788af85385-1920x1146.png?w=640&q=75&fit=max",
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
