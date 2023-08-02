import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { Link } from "react-router-dom";

function Home() {
  const [openItem, setOpenItem] = useState("first");
  {
    /* This will be the single state for the accordian style carousel */
  }

  return (
    <>
      <HomeHeader />
      {/* Homepage section 1 will be going here...*/}
      <div className="block lg:hidden">
        <div className="flex flex-col items-center mt-8">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <p className="text-md mb-4 font-medium">Our Mission</p>
            <p className="font-semibold text-lg">
              Transforming defense capabilities with advanced technology.
            </p>
          </div>
          <div className="mb-4 max-w-lg mx-auto px-4">
            <p className="text-sm pb-4 font-light">
              The battlefield has changed. How we deter & defend needs to change
              too.
            </p>
            <p className="text-sm pb-4 font-light">
              Security threats are evolving at machine speed. To keep pace,
              Anduril puts products ahead of process and builds technology to
              bring the United States and partners quantum leaps ahead in
              capability.
            </p>
          </div>
          <div className="max-w-lg mx-auto flex items-center pb-14">
            <p className="underline text-md">Learn More About Our Mission</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
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
            <p className="text-md mb-4 font-medium">Lattice OS</p>
            <p className="font-semibold text-lg">Autonomy for Every Mission</p>
          </div>
          <div className="max-w-lg mx-auto px-4 text-white mb-8">
            <p className="text-sm font-light">
              Anduril's family of systems is powered by Lattice OS, an
              AI-powered, open operating system that brings autonomy to
              defense's toughest missions. Lattice connects autonomous
              sensemaking and command & control capabilities with open, modular,
              and scalable hardware components for a layered family of systems
              approach.
            </p>
          </div>
          <div className="max-w-lg mx-auto flex items-center pb-10">
            <p className="underline text-md text-white">
              Learn More About Command & Control
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
          <div className="max-w-lg mx-auto flex items-center pb-14">
            <p className="underline text-md text-white">
              Learn More About Mission Autonomy
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
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
            <div className="grid grid-cols-3 gap-4 mb-8">
              <p>
                <Link
                  onClick={() =>
                    setOpenItem(openItem !== "first" ? "first" : "")
                  }
                  className="underline"
                >
                  Counter UAS
                </Link>
              </p>
              <p>
                <Link
                  onClick={() =>
                    setOpenItem(openItem !== "second" ? "second" : "")
                  }
                  className="underline"
                >
                  Counter Intrusion
                </Link>
              </p>
              <p>
                <Link
                  onClick={() =>
                    setOpenItem(openItem !== "third" ? "third" : "")
                  }
                  className="underline"
                >
                  Maritime Intrusion
                </Link>
              </p>
            </div>
            {openItem === "first" && (
              <div className="flex flex-col items-center mt-4">
                <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
                  <video
                    src="https://cdn.sanity.io/files/z5s3oquj/production/3daa068ad9d0b2c81c4340637447b135cc0ec7c8.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: "cover" }}
                  ></video>
                  <div className="mb-4 max-w-lg mx-auto px-4 text-black">
                    <p className="font-medium text-md mb-4">Counter UAS</p>
                    <p className="mb-4 max-w-lg mx-auto px-4 text-black">
                      No threat goes unseen. Anduril’s open Counter UAS system
                      is built to detect, track and intercept unmanned aircraft
                      and autonomous drone systems.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {openItem === "second" && (
              <>
                <video
                  src="https://cdn.sanity.io/files/z5s3oquj/production/331b2dfb7bc30e1c8e0076f86f71cf068d09e4cd.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                ></video>
                <div className="flex flex-col items-center mt-4">
                  <p className="font-medium text-md mb-4 text-left">
                    Counter Intrusion
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-black">
                    Lattice automates the protection of both domestic and
                    forward operating bases. Our family of systems saves crucial
                    time by autonomously identifying and surfacing threats,
                    freeing our personnel to do what they do best.
                  </p>
                </div>
              </>
            )}
            {openItem === "third" && (
              <>
                <video
                  src="https://cdn.sanity.io/files/z5s3oquj/production/8b0135fb673e8d8fa2a2bdb7d4e7e8f0f88ab91d.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                ></video>
                <div className="flex flex-col items-center mt-4">
                  <p className="font-medium text-md mb-4">
                    Maritime Counter Intrusion
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-black">
                    Maritime security and awareness is critical to shoreline
                    safety, security, law enforcement, border control and
                    environmental protection. Anduril’s family of systems,
                    powered by Lattice, brings autonomous, accurate & persistent
                    security to the seaside.
                  </p>
                </div>
              </>
            )}
          </div>
          {/* The DIV below will contain autonomous air systems section*/}
          <div className="border-t-2 border-black bg-orange-50">
            <div className="flex flex-col items-center mt-4">
              <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
                <video
                  src="https://cdn.sanity.io/files/z5s3oquj/production/72980bbd2350f1ed002addec0a68e2cdff22ebae.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                ></video>
                <p className="font-semibold text-xl pt-4">
                  Autonomous Air Systems
                </p>
                <div className="mb-4 max-w-lg mx-auto pt-4 text-black">
                  <p className="">
                    Autonomous air systems that are all tasked, connected, and
                    controlled by Lattice. Together, they enable a variety of
                    intelligence, surveillance, reconnaissance, and targeting
                    mission profiles.
                  </p>
                </div>
                <div className="max-w-lg mx-auto px-4 text-black mt-4 pb-10">
                  <p className="underline mb-4">Learn More about Ghost</p>
                  <p className="underline">Learn More about ALTIUS</p>
                  {/* DONT FORGET TO ADD ARROW BTN / ICONS to these two <p> above */}
                </div>
              </div>
            </div>
          </div>
          {/* Below is the autonomous underwater vehicle section */}
          <div
            style={{
              backgroundImage:
                "url(https://cdn.sanity.io/images/z5s3oquj/production/dc07b33729dac4732968a880edfe34a8bf3c641d-1373x720.png?w=750&q=75&fit=max)",
            }}
          >
            <div className="flex flex-col items-center pb-20">
              <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
                <p className="font-semibold text-xl text-white">
                  Autonomous Underwater Vehicles
                </p>
                <div className="mb-4 max-w-lg mx-auto pt-8 text-white">
                  <p className="text-white">
                    Autonomous air systems that are all tasked, connected, and
                    controlled by Lattice. Together, they enable a variety of
                    intelligence, surveillance, reconnaissance, and targeting
                    mission profiles.
                  </p>
                </div>
                <div className="max-w-lg mx-auto pt-4 text-black mt-4 pb-10">
                  <p className="underline text-white">
                    Learn More about Dive-LD
                  </p>
                  {/* DONT FORGET TO ADD ARROW BTN / ICONS to these two <p> above */}
                </div>
              </div>
            </div>
          </div>
          {/* Below is the section for careers... */}
          <div>
            <div className="flex flex-col items-center border-b-2">
              <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
                <p className="font-semibold text-xl pb-4">Careers</p>
                <p className="font-semibold text-2xl">
                  Join us in creating the future of defense
                </p>
                <div className="mb-4 max-w-lg mx-auto pt-8">
                  <p>
                    From light bulb to functional prototype in a week. An
                    engineer’s playground where we make what we feel is right
                    and needs to exist. A dedicated team rallying around a
                    shared intention to make a positive impact by creating a
                    safer world. That’s life at Anduril.
                  </p>
                </div>
                <div className="max-w-lg mx-auto text-black mt-4 pb-10">
                  <p className="underline">Learn More</p>
                  {/* DONT FORGET TO ADD ARROW BTN / ICONS to these two <p> above */}
                </div>
                <div className="max-w-lg mx-auto text-black mt-4 pb-10">
                  <div className="grid grid-rows-2 grid-cols-2 gap-1">
                    <img
                      className="col-span-2"
                      src="https://cdn.sanity.io/images/z5s3oquj/production/8916f3bfece4c71e1aa614a29ceb83d1f7374df5-1295x864.jpg?w=640&q=75&fit=max"
                      alt="arcadius-careers"
                    />
                    <img
                      src="https://cdn.sanity.io/images/z5s3oquj/production/c048a05d8247342eb35979a644df0c67db77af87-1204x804.png?w=640&q=75&fit=max"
                      alt="arcadius-engineers"
                    />
                    <img
                      src="https://cdn.sanity.io/images/z5s3oquj/production/76eb58c86a72ede47b80f8ad1667bbb7fca2d267-1129x753.jpg?w=750&q=75&fit=max"
                      alt="join us in creating the future of defense"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* */}
        </div>
      </div>
    </>
  );
}

export default Home;
