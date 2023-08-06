import React, { useState, useEffect } from "react";

const Carousel2 = () => {
  const images = ["", "", ""];
  const titles = ["", "", ""];
  const desc = ["", "", ""];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Start the timer to switch slides every 3 seconds
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % reviews.length);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="relative flex flex-col items-center bg-black text-white py-4 border-b border-white">
      <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4 min-h-[300px]">
        <p className="text-2xl">{images[activeSlide]}</p>
      </div>
      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === activeSlide ? "bg-gray-300" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
