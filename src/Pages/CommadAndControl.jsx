import React, { useState } from "react";

export default function CommadAndControl() {
  const [openItem, setOpenItem] = useState("");
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
      </div>
    </>
  );
}
