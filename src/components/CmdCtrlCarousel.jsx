import React, { useState, useEffect } from "react";

const Carousel = () => {
  const reviews = [
    "Lattice is the eyes in the back of my head.",
    "Lattice helps us react better and more efficiently use the little bit of manpower we have… We need it and it’s critically important… vitally important to control intrusions to protect this airspace. ",
    "The artificial intelligence at the heart of this system has great potential to protect our people and sites.",
    "Anduril’s integrated security system is novel, powerful and, if successfully implemented and realized, could be as transformational for the character and conduct of war as the emergence of mechanization, flight and wireless communication",
    "I believe that the Lattice system, when positioned in key areas, dramatically outpaces our current observation capabilities within the restricted area.",
  ];

  const reviwers = [
    "- Patrol Agent, US Customs & Border Protection",
    "- Marine Corps End User",
    "- General Sir Patrick Sanders, UK Strategic Command",
    "- UK Strategic Command",
    "- US Marine Corps End User",
  ];

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
    <div className="relative flex flex-col items-center bg-black text-white py-4">
      <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4 min-h-[300px]">
        <p className="text-xl">{reviews[activeSlide]}</p>
        <p className="text-md pt-8 font-mono">{reviwers[activeSlide]}</p>
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
