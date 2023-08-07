import React, { useState } from "react";
import Carousel from "../components/CmdCtrlCarousel";
import Carousel2 from "../components/CmdCtrlCarousel2";

export default function CommadAndControl() {
  const [openItem, setOpenItem] = useState("first");
  {
    /* Will useState hook for the carousel U, D, A */
  }
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
        <div className="flex flex-col items-center bg-black text-white py-4">
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

        {/* Section two will have 3 options and a drop down similar to homepage selection carousel */}
        <div className="flex flex-col items-center bg-black text-white">
          <div className="container text-left mb-4 max-w-lg mx-auto px-4 pt-4 pb-4 border-b">
            <div className="flex text-center justify-around text-gray-400 border border-white">
              {/* Will add text-white if certain state is open */}
              <p
                className="underline"
                onClick={() => setOpenItem(openItem !== "first" ? "first" : "")}
              >
                Understand
              </p>
              <p
                className="underline"
                onClick={() =>
                  setOpenItem(openItem !== "second" ? "second" : "")
                }
              >
                Decide
              </p>
              <p
                className="underline"
                onClick={() => setOpenItem(openItem !== "third" ? "third" : "")}
              >
                Act
              </p>
            </div>

            {/* The first slide/option */}
            {openItem === "first" && (
              <>
                <div className="relative h-80 md:h-96">
                  <video
                    className="absolute top-5 left-0 w-full h-full"
                    src="https://cdn.sanity.io/files/z5s3oquj/production/c641a16a59486b3a61c1d897ff06ac680ebd55de.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: "cover" }}
                  ></video>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <p className="font-semibold text-lg mb-4 text-left">
                    Real Time Understanding
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide cuts through the noise and creates a shared
                    real-time understanding of the battlespace. It autonomously
                    parses data from thousands of sensors & data sources into an
                    intelligent common operating picture in a single pane of
                    glass.
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide uses technologies like sensor fusion, computer
                    vision, edge computing, and machine learning and artificial
                    intelligence to detect, track, and classify every object of
                    interest in an operator's vicinity.
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
                    src="https://cdn.sanity.io/files/z5s3oquj/production/34663f34d18a61b9ae0aa531e95667e353e83531.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: "cover" }}
                  ></video>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <p className="font-semibold text-lg mb-4 text-left">
                    Automated Decision Advantage
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide is made for high-stakes and dynamic environments
                    where decisions must be made quickly.
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide streamlines the complexity of the decision-making
                    process by presenting decision points -- not noise-- and
                    using deep learning models to present recommended decision
                    support to operators.
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
                    src="https://cdn.sanity.io/files/z5s3oquj/production/51363f974468b9c2688eb6635707d814272a135c.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: "cover" }}
                  ></video>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <p className="font-semibold text-lg mb-4 text-left">
                    Integrated Command & Control
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide turns decisions into action in seconds, not minutes
                    or hours.
                  </p>
                  <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                    Riptide enables real-time command and control over manned
                    and unmanned assets across multiple domains, distributed
                    geographies, and in contested communications environments.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Section3 will have Riptide OS for JADC2 and Features cards */}
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <p className="text-lg pb-8 font-medium">Riptide OS for JADC2</p>
            <p className="text-sm font-light">
              Joint All-Domain Command and Control (JADC2) is one of the most
              important modernization priorities to confront challenges posed by
              strategic competition.
            </p>
            <p className="text-sm font-light mt-8">
              Leveraging Riptide, we've approached JADC2 by building an open
              operating system for defense that is simple, scalable, extensible,
              and ultimately leverages machine intelligence to accelerate the
              closing of complex kill chains.
            </p>
          </div>
        </div>

        {/* Section 4 Features Cards */}
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <p className="text-lg pb-8 font-light">Features</p>
            <div className="grid grid-cols-3 grid-rows-1 pb-12">
              <div className="col-start-1 col-end-2">
                <img src="https://cdn.sanity.io/images/z5s3oquj/production/72804cc160d39ecef0558d95bce1cc07c716a1de-500x501.png?w=3840&q=75&fit=max" />
                <p className="font-semibold text-lg border-b border-white">
                  Built for Strategic Scale
                </p>
              </div>
              <div className="col-start-3 col-end-4">
                <img src="https://cdn.sanity.io/images/z5s3oquj/production/3ce23a389e0a10cf884c7438767cb2572a28c8fe-501x501.png?w=3840&q=75&fit=max" />
                <p className="font-semibold text-lg border-b border-white">
                  All-Domain
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-1">
              <div className="col-start-1 col-end-2">
                <img src="https://cdn.sanity.io/images/z5s3oquj/production/68e9e50eacb8d6122d763e046728ee2fdfe89fa8-2084x2084.png?w=3840&q=75&fit=max" />
                <p className="font-semibold text-lg border-b border-white">
                  Open Ecosystem
                </p>
              </div>
              <div className="col-start-3 col-end-4">
                <img src="https://cdn.sanity.io/images/z5s3oquj/production/f64eb42b83f52ee34d3e2a99b1ae98eb2a8f3d1c-501x501.png?w=3840&q=75&fit=max" />
                <p className="font-semibold text-lg border-b border-white">
                  Real-World Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Below is the carousel component */}
        <div className="flex flex-col items-center bg-black text-white py-4">
          <Carousel />
        </div>
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <Carousel2 />
          </div>
        </div>
      </div>

      {/* Below is the desktop and big screen version */}
      <div className="hidden lg:block">
        <div className="max-w-[100%] mx-auto py-32 bg-black">
          <div className="grid grid-cols-8 text-white">
            <div className="col-start-2 col-end-4">
              <p className="font-normal text-lg">
                Lattice for Command & Control
              </p>
              <p className="font-semibold text-2xl pt-8">
                Lattice accelerates complex kill chains by orchestrating
                machine-to-machine tasks at scales and speeds beyond human
                capacity
              </p>
            </div>
            <div className="col-start-5 col-end-8">
              <p>
                It enables men and women in uniform to move with machine speed,
                unparalleled confidence, and military-grade security by turning
                data into information, information into decisions, and decisions
                into actions across tactical and strategic operations.
              </p>
            </div>
          </div>
        </div>
        {/* Below is the three option modal */}
        <div className="max-w-[100%] mx-auto py-32 bg-black">
          <div className="flex items-center bg-black text-white">
            <div className="container text-left mb-4  mx-auto px-4 pt-4 pb-4 border-b">
              <div className="flex text-center justify-around text-white border border-white py-10">
                {/* Will add text-white if certain state is open */}
                <p
                  className={`underline text-lg hover:cursor-pointer ${
                    openItem === "first" ? "underline text-gray-500" : ""
                  }`}
                  onClick={() =>
                    setOpenItem(openItem !== "first" ? "first" : "")
                  }
                >
                  Understand
                </p>
                <p
                  className={`underline text-lg hover:cursor-pointer ${
                    openItem === "second" ? "underline text-gray-500" : ""
                  }`}
                  onClick={() =>
                    setOpenItem(openItem !== "second" ? "second" : "")
                  }
                >
                  Decide
                </p>
                <p
                  className={`underline text-lg hover:cursor-pointer ${
                    openItem === "third" ? "underline text-gray-500" : ""
                  }`}
                  onClick={() =>
                    setOpenItem(openItem !== "third" ? "third" : "")
                  }
                >
                  Act
                </p>
              </div>

              {/* The first slide/option */}
              {openItem === "first" && (
                <>
                  <div className="flex pt-10">
                    <div className="flex-grow">
                      <video
                        className="w-full"
                        src="https://cdn.sanity.io/files/z5s3oquj/production/704753f75198730ea699c4474482ddaec1ffe783.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ objectFit: "cover" }}
                      ></video>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                      <p className="font-semibold text-3xl mb-4 text-left">
                        Real Time Understanding
                      </p>
                      <p className="mb-4 mx-auto px-4 text-white text-sm font-light">
                        Riptide cuts through the noise and creates a shared
                        real-time understanding of the battlespace. It
                        autonomously parses data from thousands of sensors &
                        data sources into an intelligent common operating
                        picture in a single pane of glass.
                      </p>
                      <p className="mx-auto px-4 text-white text-sm font-light">
                        Riptide uses technologies like sensor fusion, computer
                        vision, edge computing, and machine learning and
                        artificial intelligence to detect, track, and classify
                        every object of interest in an operator's vicinity.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* The second slide/option which shows the decision making process behind command and control */}
              {openItem === "second" && (
                <>
                  <div className="flex pt-10">
                    <div className="flex-grow">
                      <video
                        className="w-full h-[500px]"
                        src="https://cdn.sanity.io/files/z5s3oquj/production/34663f34d18a61b9ae0aa531e95667e353e83531.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ objectFit: "cover" }}
                      ></video>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                      <p className="font-semibold text-3xl mb-4 text-left">
                        Automated Decision Advantage
                      </p>
                      <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                        Riptide is made for high-stakes and dynamic environments
                        where decisions must be made quickly.
                      </p>
                      <p className=" max-w-lg mx-auto px-4 text-white text-sm font-light">
                        Riptide streamlines the complexity of the
                        decision-making process by presenting decision points --
                        not noise-- and using deep learning models to present
                        recommended decision support to operators.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* This below is the third slide/option */}
              {openItem === "third" && (
                <>
                  <div className="flex pt-10">
                    <div className="flex-grow">
                      <video
                        className="w-full h-[500px]"
                        src="https://cdn.sanity.io/files/z5s3oquj/production/51363f974468b9c2688eb6635707d814272a135c.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ objectFit: "cover" }}
                      ></video>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                      <p className="font-semibold text-2xl mb-4 text-left">
                        Automated Decision Advantage
                      </p>
                      <p className="mb-4 max-w-lg mx-auto px-4 text-white text-sm font-light">
                        Riptide turns decisions into action in seconds, not
                        minutes or hours.
                      </p>
                      <p className="max-w-lg mx-auto px-4 text-white text-sm font-light">
                        Riptide enables real-time command and control over
                        manned and unmanned assets across multiple domains,
                        distributed geographies, and in contested communications
                        environments.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Below will be the Riptide OS benefits */}
        <div className="max-w-[100%] mx-auto py-26 bg-black">
          <div className="grid grid-cols-8 text-white">
            <div className="col-start-2 col-end-4">
              <p className="font-semibold text-2xl pt-8">
                Riptide OS for JADC2
              </p>
            </div>
            <div className="col-start-5 col-end-8">
              <p>
                Joint All-Domain Command and Control (JADC2) is one of the most
                important modernization priorities to confront challenges posed
                by strategic competition.
              </p>
              <p className="pt-8">
                Leveraging Riptide, we've approached JADC2 by building an open
                operating system for defense that is simple, scalable,
                extensible, and ultimately leverages machine intelligence to
                accelerate the closing of complex kill chains.
              </p>
            </div>
          </div>
        </div>
        {/* Section 4 Features Cards */}
        <div className="max-w-[100%] mx-auto py-40 bg-black">
          <div className="grid grid-cols-8">
            <p className="text-white mb-12 col-start-2 col-end-4 text-3xl">
              Features
            </p>
          </div>
          <div className="grid grid-cols-9 pb-32 text-white align-baseline border-b border-white">
            <div className="col-start-2 col-end-3 self-start">
              <img src="https://cdn.sanity.io/images/z5s3oquj/production/72804cc160d39ecef0558d95bce1cc07c716a1de-500x501.png?w=3840&q=75&fit=max" />
              <p className="border-b font-semibold text-xl">
                Built for Strategic Scale
              </p>
              <p className="pt-4">
                Riptide can scale to integrate thousands of sensors and
                effectors globally across multi-domains.
              </p>
            </div>
            <div className="col-start-4 col-end-5 self-start">
              <img src="https://cdn.sanity.io/images/z5s3oquj/production/3ce23a389e0a10cf884c7438767cb2572a28c8fe-501x501.png?w=3840&q=75&fit=max" />
              <p className="border-b font-semibold text-xl">All-Domain</p>
              <p className="pt-4">
                Riptide integrates and operates across land, sea, air, and space
                to provide a comprehensive all-domain mission engine
              </p>
            </div>
            <div className="col-start-6 col-end-7 self-start">
              <img src="https://cdn.sanity.io/images/z5s3oquj/production/68e9e50eacb8d6122d763e046728ee2fdfe89fa8-2084x2084.png?w=3840&q=75&fit=max" />
              <p className="border-b font-semibold text-xl">Open Ecosystem</p>
              <p className="pt-4">
                Riptide is an open ecosystem that enables system integration of
                existing systems and services to enable transmission of key data
                and improve workflow.
              </p>
            </div>
            <div className="col-start-8 col-end-9 self-start">
              <img src="https://cdn.sanity.io/images/z5s3oquj/production/f64eb42b83f52ee34d3e2a99b1ae98eb2a8f3d1c-501x501.png?w=3840&q=75&fit=max" />
              <p className="border-b font-semibold text-xl">
                Real-World Experiences
              </p>
              <p className="pt-4">
                Riptide for JADC2 has been built through real-world experiences
                and exercises
              </p>
            </div>
          </div>
        </div>
        {/* Section 5 Multi-Slider Reviews */}
        <div className="max-w-[100%] mx-auto bg-black">
          <Carousel />
        </div>
      </div>
      <div className="max-w-[100%] mx-auto bg-black">
        <img
          src="https://cdn.sanity.io/images/z5s3oquj/production/d16e206b7a49820dbeda2c93490a3c18783c73fa-3397x1961.png?w=3840&q=75&fit=max"
          alt="arcadius systems inc"
        />
      </div>
    </>
  );
}
