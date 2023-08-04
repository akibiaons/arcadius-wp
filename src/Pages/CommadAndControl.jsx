import React from "react";

export default function CommadAndControl() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        {/*className="absolute top-0 left-0 w-screen h-screen overflow-hidden" */}
        <video
          src="https://cdn.sanity.io/files/z5s3oquj/production/c641a16a59486b3a61c1d897ff06ac680ebd55de.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover z-50"
          allow="autoplay"
        ></video>
      </div>
      {/* END of the image for the background on both mobile and desktop...LEAVE IT ALONE PLS */}

      <div className="lg:hidden block">
        {/* Section one of command and control page will go right here...*/}
        <div className="flex flex-col items-center bg-black text-white">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <p className="text-md font-normal pb-8">
              Riptide for Command & Control
            </p>
            <p className="text-lg pb-8 font-medium">
              Riptide accelerates complex kill chains by orchestrating
              machine-to-machine tasks at scales and speeds beyond human
              capacity
            </p>
            <p className="text-sm font-normal">
              It enables men and women in uniform to move with machine speed,
              unparalleled confidence, and military-grade security by turning
              data into information, information into decisions, and decisions
              into actions across tactical and strategic operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
