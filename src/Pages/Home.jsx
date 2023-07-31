import React from "react";
import HomeHeader from "../components/HomeHeader";

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="block lg:hidden">
        <div className="flex flex-col items-center">
          <div className="container text-left mb-4 max-w-lg mx-auto px-4">
            <h1 className="text-lg mb-4 font-medium">Our Mission</h1>
            <p className="font-semibold text-xl">
              Transforming defense capabilities with advanced technology.
            </p>
          </div>
          <div className="mb-4 max-w-lg mx-auto px-4">
            <p>
              The battlefield has changed. How we deter & defend needs to change
              too.
            </p>
            <p>
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
      </div>
    </>
  );
}

export default Home;
