// import React from 'react'
// import HashLoader from 'react-spinners/HashLoader';

// const Loading = () => {
//   return<div className="flex items-center justify-center w-full h-full ">
//     <HashLoader color='#0067FF'/>
//   </div>

// }

// export default Loading

import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, 5000); // Display loading spinner for 2 seconds

    return () => clearTimeout(timer); // Cleanup function to clear the timer on unmount
  }, []);

  return (
    <div
      className={`flex items-center justify-center w-full h-full ${
        showSpinner ? "" : "hidden"
      }`}
    >
      {showSpinner && <HashLoader color="#0067FF" />}
    </div>
  );
};

export default Loading;
