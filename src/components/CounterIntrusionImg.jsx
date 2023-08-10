import React, { useState, useEffect } from "react";

export default function CounterIntrusionImg() {
  const img = [
    "https://cdn.sanity.io/images/z5s3oquj/production/954be1706c4bf05ae4e62eef5540df317d5529e4-873x873.png?w=640&q=75&fit=max",
    "https://cdn.sanity.io/files/z5s3oquj/production/48dd154e1ad4366c3d5f9899210919fdcb167a32.mp4",
    "https://cdn.sanity.io/files/z5s3oquj/production/edb8775072e5903bdb4d8f6eb2e2087b757389b3.mp4",
  ];
  {
    /*Above is an array of images for counter intrusion*/
  }
  const [activeSlide, setActiveSlide] = useState(0);
  // Above is the state set to zero to initalize at an the first image [0]

  // Below I will make a function that changes the state based onClick of a 'dot'

  return (
    <>
      <div>
        <div>Something</div>
      </div>
    </>
  );
}
