import React, { useState, useEffect } from "react";

const MissionCycles = () => {
  const images = [
    "https://cdn.sanity.io/images/z5s3oquj/production/9434d2d5dab216ae23144a3842b10e51d637d6ca-1920x1080.png?w=3840&q=75&fit=max",
    "https://cdn.sanity.io/images/z5s3oquj/production/dee5dd1cef8de769553db5e6cb273d53f5ad2c23-1920x1080.png?w=3840&q=75&fit=max",
    "https://cdn.sanity.io/images/z5s3oquj/production/490b5767251ffdd39c42fd5965112d2bea80f68d-1920x1080.png?w=3840&q=75&fit=max",
    "https://cdn.sanity.io/images/z5s3oquj/production/5116087898b6b8cfde1366ce46834b255e989503-1920x1080.png?w=3840&q=75&fit=max",
  ];

  const desc = [
    "Leverage operations analysis and modeling and simulation to design autonomous behaviors, develop tactical playbooks, and design missions at machine speed​.",
    "Conduct mission planning with key factors, such as labeling goals and objectives, acceptable level of risk (ALR), rule of engagement (ROE), and order of battle. Leverage data-analytics to rapidly update planning based on previous outcomes.",
    "Human operator supervises autonomous mission execution with intuitive UI/UX to enable increased understanding and decision advantage​.",
    "Leverage the combination of warfighter experience with data analytics to inform autonomous behaviors and tactics development that can be rapidly applied for continuous improvement and learning for the next mission. ",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Start the timer to switch slides every 3 seconds
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <div className="block lg:hidden bg-black">
        <div className="relative flex flex-col items-center bg-black text-white py-4 ">
          <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4 min-h-[300px]">
            <img
              className="text-2xl"
              src={images[activeSlide]}
              alt={`Slide ${activeSlide + 1}`}
            />
            <p className="text-sm pt-8 font-mono">{desc[activeSlide]}</p>
          </div>
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === activeSlide ? "bg-gray-300" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-black">
        <div className="max-w-[100%] bg-black">
          <div className=" text-left mb-10 mt-8 max-w-[60%] mx-auto px-4 min-h-[300px]">
            <img
              className="text-2xl"
              src={images[activeSlide]}
              alt={`Slide ${activeSlide + 1}`}
            />
            <p className="text-xl text-white pt-8 font-normal">
              {desc[activeSlide]}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === activeSlide ? "bg-gray-300" : "bg-white"
                }`}
              ></div>
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default MissionCycles;
