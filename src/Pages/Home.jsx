import React from "react";
import HomeHeader from "../components/HomeHeader";

function Home() {
  return (
    <>
      <HomeHeader />
      {/* Parent div of section 1 with a video and src that links to company visual overview */}
      <div className="relative w-full py-8 bg-white text-center">
        <h1 className="text-5xl mb-4">Our Mission</h1>
      </div>
    </>
  );
}

export default Home;
