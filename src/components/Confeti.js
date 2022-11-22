import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

function Confeti() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dimension]);
  return (
    <div>
      <ReactConfetti
        width={dimension.width}
        height={dimension.height}
        tweenDuration={500}
      />
    </div>
  );
}

export default Confeti;
