import React from "react";
import HomeHeader from "../components/HomeHeader";

function Home() {
  return (
    <>
      <HomeHeader />
      {/* Homepage section 1 will be going here...*/}
      <div className="block lg:hidden">
        <div className="flex flex-col items-center">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <p className="text-lg mb-4 font-medium">Our Mission</p>
            <p className="font-semibold text-xl">
              Transforming defense capabilities with advanced technology.
            </p>
          </div>
          <div className="mb-4 max-w-lg mx-auto px-4">
            <p className="">
              The battlefield has changed. How we deter & defend needs to change
              too.
            </p>
            <p className="">
              Security threats are evolving at machine speed. To keep pace,
              Anduril puts products ahead of process and builds technology to
              bring the United States and partners quantum leaps ahead in
              capability.
            </p>
          </div>
          <div className="max-w-lg mx-auto px-4">
            <p className="underline">Learn More About Our Mission</p>
            <button></button>
            {/* Need to add an arrow right icon that is in a circle */}
          </div>
        </div>
        {/* Section two Lattice OS will be going below this comment... need to add a bkg with overlay*/}
        <div
          className="flex flex-col items-center"
          style={{
            backgroundImage:
              "url(https://cdn.sanity.io/images/z5s3oquj/production/6f8ffbfe0c2b4e62a9921b2fb0b5dce454dc93ec-2103x1321.png?w=828&q=75&fit=max)",
          }}
        >
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4 text-white">
            <p className="text-lg mb-4 font-medium">Lattice OS</p>
          </div>
          <div className="mb-4 max-w-lg mx-auto px-4 text-white">
            <p className="">
              Anduril's family of systems is powered by Lattice OS, an
              AI-powered, open operating system that brings autonomy to
              defense's toughest missions. Lattice connects autonomous
              sensemaking and command & control capabilities with open, modular,
              and scalable hardware components for a layered family of systems
              approach.
            </p>
          </div>
          <div className="max-w-lg mx-auto px-4 text-white mt-4 pb-10">
            <p className="underline mb-4">Learn More about Command & Control</p>
            <p className="underline">Learn More about Mission Autonomy</p>
            {/* DONT FORGET TO ADD ARROW BTN / ICONS to these two <p> above */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
