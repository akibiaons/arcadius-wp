import React, { useState } from "react";
import MissonCycles from "../components/MissionAutoCarousel";

export default function MissionAutonomy() {
  const [openItem, setOpenItem] = useState("first");

  return (
    <>
      <div className="w-full h-screen bg-black">
        <video
          src="https://cdn.sanity.io/files/z5s3oquj/production/d0c08a434623cb09609086a1911fce1e97e2d135.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover z-50"
          allow="autoplay"
          alt="arcadius systems INC"
        ></video>
      </div>
      {/* End of the background video */}
      <div className="lg:hidden block">
        {/* Below is the gif section */}
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <video
              src="https://cdn.sanity.io/files/z5s3oquj/production/0245fce432420233ec5f09868ed2fe385fecbd62.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ objectFit: "cover" }}
              className="w-full h-full object-cover z-50"
              allow="autoplay"
              alt="arcadius systems INC"
            ></video>
            <div className="">
              <p className="mb-8">Riptide for Mission Autonomy</p>
              <p className="mb-8 font-semibold text-lg">
                An unfair advantage for unrivaled deterrence
              </p>
              <p className="font-normal text-sm">
                An advanced software platform enabling a single human to control
                and coordinate a wide range of autonomous assets across the
                ocean, land, and sky to deliver successful mission outcomes.
              </p>
            </div>
          </div>
        </div>
        {/*Below is the Showcase section for mission autonomy*/}

        {/* Section two will have 3 options and a drop down similar to homepage selection carousel */}
        <div className="flex flex-col items-center bg-black text-white">
          <div className="container text-left mb-4 max-w-lg mx-auto px-4 pt-4 pb-4">
            <div className="flex text-center justify-around text-gray-400 border border-white">
              {/* Will add text-white if certain state is open */}
              <p
                className="underline"
                onClick={() => setOpenItem(openItem !== "first" ? "first" : "")}
              >
                Open Architecture
              </p>
              <p
                className="underline"
                onClick={() =>
                  setOpenItem(openItem !== "second" ? "second" : "")
                }
              >
                Integrated Systems
              </p>
              <p
                className="underline"
                onClick={() => setOpenItem(openItem !== "third" ? "third" : "")}
              >
                Multi-Domain
              </p>
            </div>

            {/* The first slide/option */}
            {openItem === "first" && (
              <>
                <div className="relative h-80 md:h-96">
                  <video
                    className="absolute top-5 left-0 w-full h-full"
                    src="https://cdn.sanity.io/files/z5s3oquj/production/00e3e988f2083f2cdcb70ce28985e09fb2bea298.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: "cover" }}
                  ></video>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <p className="font-semibold text-lg mb-4 text-left">
                    Open Architecture
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide for Mission Autonomy makes it possible to compose
                    different platforms and payloads, made by different vendors,
                    into different mission solutions for different mission
                    requirements.
                  </p>
                </div>
              </>
            )}

            {/* The second slide/option which shows the decision making process behind command and control */}
            {openItem === "second" && (
              <>
                <div className="relative h-80 md:h-96">
                  <video
                    className="absolute top-5 left-0 w-full h-full"
                    src="https://cdn.sanity.io/files/z5s3oquj/production/08e5c5bfe73299477a465533b93cb474599b8ab9.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: "cover" }}
                  ></video>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <p className="font-semibold text-lg mb-4 text-left">
                    Integrated Systems
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Mission Autonomy integrates and orchestrates the platforms,
                    piloting, sensors, and payloads to deliver autonomous teams
                    capable of accomplishing complex missions.
                  </p>
                </div>
              </>
            )}

            {/* This below is the third slide/option */}
            {openItem === "third" && (
              <>
                <div className="relative h-80 md:h-96">
                  <video
                    className="absolute top-5 left-0 w-full h-full"
                    src="https://cdn.sanity.io/files/z5s3oquj/production/4e42fd5a2a5aa75174def825fac5578a91f2ef53.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: "cover" }}
                  ></video>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <p className="font-semibold text-lg mb-4 text-left">
                    Multi-Domain
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide for Mission Autonomy defense and commercial
                    applications extend across air, land, and sea by leveraging
                    platforms such as collaborative combat aircraft, robotic
                    combat vehicles and autonomous underwater vehicles to
                    conduct missions like ISR, defensive counter air, seafloor
                    mapping, critical infrastructure surveillance and more.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Section 3 will have the 4 cards similar to the command and control page */}
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4 border-b border-white pb-12">
            <p className="text-md pb-8 font-light">
              Distributed Autonomy at the Edge
            </p>
            <div className="grid grid-cols-3 grid-rows-1 pb-12">
              <div className="col-start-1 col-end-2">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/3c1936ba423b3cce06040f0a2f1d88e410d8799e-2085x2084.png?w=3840&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Distributed C2
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Automatically breaks down operator intent into discrete tasks
                  that are distributed across unmanned systems to best
                  accomplish missions under human supervision​.
                </p>
              </div>
              <div className="col-start-3 col-end-4">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/de59bd41b35cce6793aa938d71d97254e7b9adee-2084x2084.png?w=2048&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Sensor Processing & Fusion
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Onboard AI/ML algorithms autonomously process and fuse raw
                  sensor data from distributed assets to detect, track, and
                  target in real-time​.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-1">
              <div className="col-start-1 col-end-2">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/6a1040d0c7fc7f10e9e421b08bcc7c559efae8ea-2084x2084.png?w=2048&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Sensor Resource Management
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Automated management of onboard sensors and weapon systems to
                  execute missions.​ ​ ​ ​
                </p>
              </div>
              <div className="col-start-3 col-end-4">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/6fbbfab265752c426f9a70a5c0ffa20e412926d7-2084x2084.png?w=828&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Dynamic Planning
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Dynamically react to real-time inputs throughout mission
                  execution to effectively operate in highly contested
                  environments​ ​
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 4 will have the Mission Cycles Section which, shows a carousel of 4 items (wont fit as boxes) */}
        <div className="flex flex-col items-center bg-black text-white py-4">
          <MissonCycles />
        </div>
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4 pb-12">
            <video src="" />
          </div>
        </div>
      </div>
      {/* Below will be the div that starts the Desktop Version, I need to widen the containers by adding max-w-lg */}
      <div className="lg:block hidden bg-black">
        {/* Below is the gif section or Section 1 of desktop*/}
        <div className="max-w-[100%] mx-auto bg-black py-20">
          <div className="grid grid-cols-8 text-white">
            <div className="col-start-2 col-end-5">
              <video
                src="https://cdn.sanity.io/files/z5s3oquj/production/0245fce432420233ec5f09868ed2fe385fecbd62.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: "cover" }}
                className="w-full h-full object-cover z-50"
                allow="autoplay"
                alt="arcadius systems INC"
              ></video>
            </div>
            <div className="col-start-5 col-end-8 pt-20">
              <p className="mb-8 text-2xl">Riptide for Mission Autonomy</p>
              <p className="mb-8 font-semibold text-4xl">
                An unfair advantage for unrivaled deterrence
              </p>
              <p className="font-light text-xl">
                An advanced software platform enabling a single human to control
                and coordinate a wide range of autonomous assets across the
                ocean, land, and sky to deliver successful mission outcomes.
              </p>
            </div>
          </div>
        </div>
        {/*Below is the Showcase section for mission autonomy*/}

        {/* Section two will have 3 options and a drop down similar to homepage selection carousel */}
        <div className="max-w-[100%] mx-auto py-20 bg-black text-white">
          <div className=" text-left mb-4 max-w-[60%] mx-auto px-4 pt-4 pb-4">
            <div className="flex text-center justify-around text-white border border-white py-10">
              {/* Will add text-white if certain state is open */}
              <p
                className={`underline hover:cursor-pointer ${
                  openItem === "first" ? "text-gray-400" : ""
                }`}
                onClick={() => setOpenItem(openItem !== "first" ? "first" : "")}
              >
                Open Architecture
              </p>
              <span className="border-r-2"></span>
              <p
                className={`underline hover:cursor-pointer ${
                  openItem === "second" ? "text-gray-400" : ""
                }`}
                onClick={() =>
                  setOpenItem(openItem !== "second" ? "second" : "")
                }
              >
                Integrated Systems
              </p>
              <span className="border-r-2"></span>
              <p
                className={`underline hover:cursor-pointer ${
                  openItem === "third" ? "text-gray-400" : ""
                }`}
                onClick={() => setOpenItem(openItem !== "third" ? "third" : "")}
              >
                Multi-Domain
              </p>
            </div>

            {/* The first slide/option */}
            {openItem === "first" && (
              <>
                <div className="grid grid-cols-8">
                  <div className="col-start-1 col-end-5 relative h-80 md:h-96">
                    <video
                      className="absolute top-5 left-0 w-full h-full"
                      src="https://cdn.sanity.io/files/z5s3oquj/production/00e3e988f2083f2cdcb70ce28985e09fb2bea298.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ objectFit: "cover" }}
                    ></video>
                  </div>
                  <div className="col-start-5 col-end-9">
                    <div className="flex flex-col items-center mt-12">
                      <p className="font-semibold text-4xl mb-4 text-left">
                        Open Architecture
                      </p>
                      <p className="mb-4 max-w-lg mx-auto px-4 text-white text-lg font-light">
                        Riptide for Mission Autonomy makes it possible to
                        compose different platforms and payloads, made by
                        different vendors, into different mission solutions for
                        different mission requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* The second slide/option which shows the decision making process behind command and control */}
            {openItem === "second" && (
              <>
                <div className="grid grid-cols-8">
                  <div className="col-start-1 col-end-5 relative h-80 md:h-96">
                    <video
                      className="absolute top-5 left-0 w-full h-full"
                      src="https://cdn.sanity.io/files/z5s3oquj/production/08e5c5bfe73299477a465533b93cb474599b8ab9.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ objectFit: "cover" }}
                    ></video>
                  </div>
                  <div className="col-start-5 col-end-9">
                    <div className="flex flex-col items-center mt-12">
                      <p className="font-semibold text-4xl mb-4 text-left">
                        Integrated Systems
                      </p>
                      <p className="mb-4 max-w-lg mx-auto px-4 text-white text-lg font-light">
                        Mission Autonomy integrates and orchestrates the
                        platforms, piloting, sensors, and payloads to deliver
                        autonomous teams capable of accomplishing complex
                        missions.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* This below is the third slide/option */}
            {openItem === "third" && (
              <>
                <div className="grid grid-cols-8">
                  <div className="col-start-1 col-end-5 relative h-80 md:h-96">
                    <video
                      className="absolute top-5 left-0 w-full h-full"
                      src="https://cdn.sanity.io/files/z5s3oquj/production/4e42fd5a2a5aa75174def825fac5578a91f2ef53.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ objectFit: "cover" }}
                    ></video>
                  </div>
                  <div className="col-start-5 col-end-9">
                    <div className="flex flex-col items-center mt-12">
                      <p className="font-semibold text-4xl mb-4 text-left">
                        Multi-Domain
                      </p>
                      <p className="mb-4 max-w-lg mx-auto px-4 text-white text-lg font-light">
                        Riptide for Mission Autonomy defense and commercial
                        applications extend across air, land, and sea by
                        leveraging platforms such as collaborative combat
                        aircraft, robotic combat vehicles and autonomous
                        underwater vehicles to conduct missions like ISR,
                        defensive counter air, seafloor mapping, critical
                        infrastructure surveillance and more.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Section 3 will have the 4 cards similar to the command and control page */}
        <div className="max-w-[100%] mx-auto items-center bg-black text-white py-4">
          <div className="text-left mb-4 mt-20 mx-auto pb-20 max-w-[70%]">
            <p className="text-3xl pb-8 font-normal">
              Distributed Autonomy at the Edge
            </p>
            <div className="grid grid-cols-8 pt-20">
              <div className="col-start-1 col-end-2">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/3c1936ba423b3cce06040f0a2f1d88e410d8799e-2085x2084.png?w=3840&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Distributed C2
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Automatically breaks down operator intent into discrete tasks
                  that are distributed across unmanned systems to best
                  accomplish missions under human supervision​.
                </p>
              </div>
              <div className="col-start-3 col-end-4">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/de59bd41b35cce6793aa938d71d97254e7b9adee-2084x2084.png?w=2048&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Sensor Processing & Fusion
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Onboard AI/ML algorithms autonomously process and fuse raw
                  sensor data from distributed assets to detect, track, and
                  target in real-time​.
                </p>
              </div>
              <div className="col-start-5 col-end-6">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/6a1040d0c7fc7f10e9e421b08bcc7c559efae8ea-2084x2084.png?w=2048&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Sensor Resource Management
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Automated management of onboard sensors and weapon systems to
                  execute missions.​ ​ ​ ​
                </p>
              </div>
              <div className="col-start-7 col-end-8">
                <img
                  src="https://cdn.sanity.io/images/z5s3oquj/production/6fbbfab265752c426f9a70a5c0ffa20e412926d7-2084x2084.png?w=828&q=75&fit=max"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-semibold text-md border-b border-white">
                  Dynamic Planning
                </p>
                <p className="font-light text-sm pt-4 text-left">
                  Dynamically react to real-time inputs throughout mission
                  execution to effectively operate in highly contested
                  environments​ ​
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 4 will have the Mission Cycles Section which, shows a carousel of 4 items (wont fit as boxes) */}
        <div className="max-w-[100%] bg-black text-white">
          <div className="grid grid-cols-8">
            <div className="col-start-2 col-end-2 text-3xl font-semibold">
              <p>Mission Cycles</p>
            </div>
          </div>
          <MissonCycles />
        </div>
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4 pb-12">
            <video src="" />
          </div>
        </div>
      </div>
    </>
  );
}
