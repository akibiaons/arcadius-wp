import React from 'react';

function Home() {
  return (
    <> {/* Return container holder */}
      <div> {/* Parent div of section 1 with a video and src that links to company visual overview */}
        <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
          <video src="https://cdn.sanity.io/files/z5s3oquj/production/b7f8f4a89e564305b8c810113d7bf71d445b1419.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
        </div>
      </div>
    </>
  )
}

export default Home;