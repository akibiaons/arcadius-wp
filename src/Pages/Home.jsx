import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <> 
    {/* Return container holder */}
      <div> {/* Parent div of section 1 with a video and src that links to company visual overview */}
        <div className='z-10 absolute w-screen h-screen overflow-hidden bg-black'>
          <video src="https://cdn.sanity.io/files/z5s3oquj/production/b7f8f4a89e564305b8c810113d7bf71d445b1419.mp4" autoPlay loop muted className="w-full h-full"></video>
        </div>
      </div>
    </>
  )
}

export default Home;