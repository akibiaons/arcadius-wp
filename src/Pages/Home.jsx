import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { Link } from "react-router-dom";

function Home() {
  const [isCounterOpen, setIsCounterOpen] = useState(false);
  const [isIntrusionOpen, setIsIntrusionOpen] = useState(false);
  const [isMaritimeOpen, setIsMaritimeOpen] = useState(false);

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
            <p className="font-semibold text-xl">Autonomy for Every Mission</p>
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
        {/* Section 3 will have <p> bold <p>descriptive small</p>  and a carousel that opens based onClick */}
        <div className="flex flex-col items-center mt-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <p className="font-semibold text-xl">
              Autonomous All Domain Force Protection
            </p>
          </div>
          <div className="mb-4 max-w-lg mx-auto px-4 text-black">
            <p>
              A family of autonomous systems, powered by Lattice, that provide
              integrated, persistent awareness and security across land, sea and
              air, all at the tactical edge.
            </p>
          </div>
        </div>
        {/* Below is the carousel which will useState and open onClick */}
        <div className="mt-10">
          <div className="flex flex-col mt-4">
            <div className="grid grid-cols-3 gap-4">
              <p>
                <Link
                  onClick={() => setIsCounterOpen(!isCounterOpen)}
                  className="underline"
                >
                  Counter UAS
                </Link>
              </p>
              <p>
                <Link className="underline">Counter Intrusion</Link>
              </p>
              <p>
                <Link className="underline">Maritime Intrusion</Link>
              </p>
            </div>
            {isCounterOpen && (
              <>
                <video
                  src="https://cdn.sanity.io/files/z5s3oquj/production/3daa068ad9d0b2c81c4340637447b135cc0ec7c8.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
                <div className="flex flex-col items-center mt-4">
                  <p className="font-medium text-md">Counter UAS</p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-black">
                    No threat goes unseen. Anduril’s open Counter UAS system is
                    built to detect, track and intercept unmanned aircraft and
                    autonomous drone systems.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
