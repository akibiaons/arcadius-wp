import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [openItem, setOpenItem] = useState("first");
  {
    /* This will be the single state for the accordian style carousel */
  }

  return (
    <>
      <div className="w-full h-screen bg-black">
        {/*className="absolute top-0 left-0 w-screen h-screen overflow-hidden" */}
        <video
          src="https://cdn.sanity.io/files/z5s3oquj/production/b7f8f4a89e564305b8c810113d7bf71d445b1419.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover z-50"
          allow="autoplay"
        ></video>
      </div>
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
              Arcadius puts products ahead of process and builds technology to
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
        {/* Section two Riptide OS will be going below this comment... need to add a bkg with overlay*/}
        <div
          className="flex flex-col items-center"
          style={{
            backgroundImage:
              "url(https://cdn.sanity.io/images/z5s3oquj/production/6f8ffbfe0c2b4e62a9921b2fb0b5dce454dc93ec-2103x1321.png?w=828&q=75&fit=max)",
          }}
        >
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4 text-white">
            <p className="text-md mb-4 font-medium">Riptide OS</p>
            <p className="font-semibold text-lg">Autonomy for Every Mission</p>
          </div>
          <div className="max-w-lg mx-auto px-4 text-white mb-8">
            <p className="text-sm font-light">
              Arcadius family of systems is powered by Riptide OS, an
              AI-powered, open operating system that brings autonomy to
              defense's toughest missions. Riptide connects autonomous
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
            <p className="font-semibold text-lg">
              Autonomous All Domain Force Protection
            </p>
          </div>
          <div className="mb-4 max-w-lg mx-auto px-4 text-black text-sm font-light">
            <p>
              A family of autonomous systems, powered by Riptide, that provide
              integrated, persistent awareness and security across land, sea and
              air, all at the tactical edge.
            </p>
          </div>
        </div>
        {/* Below is the carousel which will useState and open onClick */}
        <div className="mt-10">
          <div className="flex flex-col mt-4">
            <div className="grid grid-cols-3 gap-3 mb-8 font-light text-sm">
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
              <>
                <video
                  src="https://cdn.sanity.io/files/z5s3oquj/production/3daa068ad9d0b2c81c4340637447b135cc0ec7c8.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                ></video>
                <div className="flex flex-col items-center mt-4">
                  <p className="font-medium text-md mb-4 text-left">
                    Counter UAS
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-black text-sm font-light">
                    No threat goes unseen. Arcadius open Counter UAS system is
                    built to detect, track and intercept unmanned aircraft and
                    autonomous drone systems.
                  </p>
                </div>
              </>
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
                  <p className="mb-4 max-w-lg mx-auto px-4 text-black text-sm font-light">
                    Riptide automates the protection of both domestic and
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
                  <p className="mb-4 max-w-lg mx-auto px-4 text-black text-sm font-light">
                    Maritime security and awareness is critical to shoreline
                    safety, security, law enforcement, border control and
                    environmental protection. Arcadius family of systems,
                    powered by Riptide, brings autonomous, accurate & persistent
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
                <p className="font-semibold text-lg pt-8">
                  Autonomous Air Systems
                </p>
                <div className="mb-4 max-w-lg mx-auto pt-4 text-black">
                  <p className="text-sm font-normal pb-4">
                    Autonomous air systems that are all tasked, connected, and
                    controlled by Riptide. Together, they enable a variety of
                    intelligence, surveillance, reconnaissance, and targeting
                    mission profiles.
                  </p>
                </div>
                <div className="max-w-lg mx-auto flex items-center mt-4 mb-6">
                  <p className="underline">Learn More about Ghost</p>
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
                <div className="max-w-lg mx-auto flex items-center mt-4 mb-6">
                  <p className="underline">Learn More about ALTIUS</p>
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
                <p className="font-semibold text-lg text-white">
                  Autonomous Underwater Vehicles
                </p>
                <div className="mb-4 max-w-lg mx-auto pt-8 text-white">
                  <p className="text-white text-sm font-normal">
                    Autonomous air systems that are all tasked, connected, and
                    controlled by Riptide. Together, they enable a variety of
                    intelligence, surveillance, reconnaissance, and targeting
                    mission profiles.
                  </p>
                </div>
                <div className="max-w-lg mx-auto flex items-center pt-4 text-black mt-4 pb-10">
                  <p className="underline text-white">
                    Learn More about Dive-LD
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
                  {/* DONT FORGET TO ADD ARROW BTN / ICONS to these two <p> above */}
                </div>
              </div>
            </div>
          </div>
          {/* Below is the section for careers... */}
          <div>
            <div className="flex flex-col items-center border-b-2">
              <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
                <p className="fonfont-semibold text-lg pb-4">Careers</p>
                <p className="font-semibold text-lg">
                  Join us in creating the future of defense
                </p>
                <div className="mb-4 max-w-lg mx-auto pt-8">
                  <p className="text-sm font-normal">
                    From light bulb to functional prototype in a week. An
                    engineer’s playground where we make what we feel is right
                    and needs to exist. A dedicated team rallying around a
                    shared intention to make a positive impact by creating a
                    safer world. That’s life at Arcadius INC.
                  </p>
                </div>
                <div className="max-w-lg mx-auto flex items-center text-black mt-8 pb-10">
                  <p className="underline">Learn More</p>
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
      {/* Below is the desktop version ============================================================!!!!!!!!!*/}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 grid-rows-3 mx-auto">
          {" "}
          {/* Am trying to use grid or flex */}
          <div className="">
            <p className="text-lg font-normal">Our Mission</p>
            <p className="text-xl font-semibold">
              Transforming defense capabilities with advanced technology.
            </p>
          </div>
          <div className="font-normal text-lg">
            <p className="">
              The battlefield has changed. How we deter & defend needs to change
              too.
            </p>
            <p className="">
              Security threats are evolving at machine speed. To keep pace,
              Arcadius puts products ahead of process and builds technology to
              bring the United States and partners quantum leaps ahead in
              capability.
            </p>
          </div>
          <div className="">
            <p className="">Learn More About Our Mission</p>
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
        {/* Section two Riptide OS will be going below this comment... need to add a bkg with overlay*/}
        <div
          className=""
          style={{
            backgroundImage:
              "url(https://cdn.sanity.io/images/z5s3oquj/production/6f8ffbfe0c2b4e62a9921b2fb0b5dce454dc93ec-2103x1321.png?w=828&q=75&fit=max)",
          }}
        >
          <div className="">
            <p className="">Riptide OS</p>
            <p className="">Autonomy for Every Mission</p>
          </div>
          <div className="">
            <p className="">
              Arcadius family of systems is powered by Riptide OS, an
              AI-powered, open operating system that brings autonomy to
              defense's toughest missions. Riptide connects autonomous
              sensemaking and command & control capabilities with open, modular,
              and scalable hardware components for a layered family of systems
              approach.
            </p>
          </div>
          <div className="">
            <p className="">Learn More About Command & Control</p>
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
          <div className="">
            <p className="">Learn More About Mission Autonomy</p>
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
        <div className="">
          <div className=" ">
            <p className="">Autonomous All Domain Force Protection</p>
          </div>
          <div className="">
            <p>
              A family of autonomous systems, powered by Riptide, that provide
              integrated, persistent awareness and security across land, sea and
              air, all at the tactical edge.
            </p>
          </div>
        </div>
        {/* Below is the carousel which will useState and open onClick */}
        <div className="">
          <div className="">
            <div className="">
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
              <>
                <video
                  src="https://cdn.sanity.io/files/z5s3oquj/production/3daa068ad9d0b2c81c4340637447b135cc0ec7c8.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                ></video>
                <div className="">
                  <p className="">Counter UAS</p>
                  <p className="">
                    No threat goes unseen. Arcadius open Counter UAS system is
                    built to detect, track and intercept unmanned aircraft and
                    autonomous drone systems.
                  </p>
                </div>
              </>
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
                <div className="">
                  <p className="">Counter Intrusion</p>
                  <p className="">
                    Riptide automates the protection of both domestic and
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
                <div className="">
                  <p className="">Maritime Counter Intrusion</p>
                  <p className="">
                    Maritime security and awareness is critical to shoreline
                    safety, security, law enforcement, border control and
                    environmental protection. Arcadius family of systems,
                    powered by Riptide, brings autonomous, accurate & persistent
                    security to the seaside.
                  </p>
                </div>
              </>
            )}
          </div>
          {/* The DIV below will contain autonomous air systems section*/}
          <div className="">
            <div className="">
              <div className="">
                <video
                  src="https://cdn.sanity.io/files/z5s3oquj/production/72980bbd2350f1ed002addec0a68e2cdff22ebae.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                ></video>
                <p className="">Autonomous Air Systems</p>
                <div className="">
                  <p className="">
                    Autonomous air systems that are all tasked, connected, and
                    controlled by Riptide. Together, they enable a variety of
                    intelligence, surveillance, reconnaissance, and targeting
                    mission profiles.
                  </p>
                </div>
                <div className="">
                  <p className="underline">Learn More about Ghost</p>
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
                <div className="">
                  <p className="underline">Learn More about ALTIUS</p>
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
            </div>
          </div>
          {/* Below is the autonomous underwater vehicle section */}
          <div
            style={{
              backgroundImage:
                "url(https://cdn.sanity.io/images/z5s3oquj/production/dc07b33729dac4732968a880edfe34a8bf3c641d-1373x720.png?w=750&q=75&fit=max)",
            }}
          >
            <div className="">
              <div className="">
                <p className="">Autonomous Underwater Vehicles</p>
                <div className="">
                  <p className="">
                    Autonomous air systems that are all tasked, connected, and
                    controlled by Riptide. Together, they enable a variety of
                    intelligence, surveillance, reconnaissance, and targeting
                    mission profiles.
                  </p>
                </div>
                <div className="">
                  <p className="underline text-white">
                    Learn More about Dive-LD
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
                  {/* DONT FORGET TO ADD ARROW BTN / ICONS to these two <p> above */}
                </div>
              </div>
            </div>
          </div>
          {/* Below is the section for careers... */}
          <div>
            <div className="">
              <div className="">
                <p className="">Careers</p>
                <p className="">Join us in creating the future of defense</p>
                <div className="">
                  <p className="">
                    From light bulb to functional prototype in a week. An
                    engineer’s playground where we make what we feel is right
                    and needs to exist. A dedicated team rallying around a
                    shared intention to make a positive impact by creating a
                    safer world. That’s life at Arcadius INC.
                  </p>
                </div>
                <div className="">
                  <p className="underline">Learn More</p>
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
                <div className="">
                  <div className="">
                    <img
                      className=""
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
