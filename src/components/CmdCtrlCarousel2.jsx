import React, { useState, useEffect } from "react";

const Carousel2 = () => {
  const images = [
    "https://raw.githubusercontent.com/akibiaons/arcadius-wp/main/src/Assets/Images/Screenshot%202023-08-05%20at%205.22.58%20PM.png",
    "https://raw.githubusercontent.com/akibiaons/arcadius-wp/main/src/Assets/Images/Screenshot%202023-08-05%20at%205.23.10%20PM.png",
    "https://raw.githubusercontent.com/akibiaons/arcadius-wp/main/src/Assets/Images/Screenshot%202023-08-05%20at%205.23.38%20PM.png",
  ];
  const titles = [
    "Open & Extensible Software Platform",
    "Secure & Intelligent Mesh Network",
    "Simple & Intuitive UI",
  ];
  const desc = [
    "Riptide's open architecture has proven integrations across third-party, legacy, and autonomous systems to work together in a single command and control mission engine. Scaling an infinite number of data sources, Riptide extends across tactical and strategic operations. ",
    "Riptide's mesh network is built to securely deploy to the most remote and contested areas. It removes the single point of failure risk associated with traditional hub and spoke models. Riptide intelligently categorizes, evaluates, and prioritizes the best path for information to flow, especially when there is limited bandwidth. ",
    "The Lattice User Interface (UI) elegantly allows users to visualize and interact with thousands of sensors and effectors in a single UI. Operators can seamlessly scale from tactical to strategic views. The Lattice Ul spans web, desktop, mobile, and VR modalities to fit your need.",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Start the timer to switch slides every 3 seconds
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative flex flex-col items-center bg-black text-white py-4">
      <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4 min-h-[300px]">
        <img
          className="text-2xl"
          src={images[activeSlide]}
          alt={`Slide ${activeSlide + 1}`}
        />
        <p className="text-white">{titles[activeSlide]}</p>
        <p className="text-white pt-8">{desc[activeSlide]}</p>
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
  );
};

export default Carousel2;
