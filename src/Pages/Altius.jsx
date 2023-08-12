import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Altius() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <video
          src="https://cdn.sanity.io/files/z5s3oquj/production/41909975b9d0384c1594dc13cb9a8017cc145e60.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover z-50"
          allow="autoplay"
          alt="arcadius systems ghost UAV"
        ></video>
      </div>
    </>
  );
}
