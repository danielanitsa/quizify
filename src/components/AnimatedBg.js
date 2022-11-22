import React from "react";
import Granim from "granim";
import { useEffect } from "react";

function AnimatedBg() {
  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "left-right",
      isPausedWhenNotInView: false,
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#ff9966", "#ff5e62"],
            ["#00F260", "#0575E6"],
            ["#e1eec3", "#f05053"],
          ],
          transitionSpeed: 10000,
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="logo-canvas" className="logo-canvas"></canvas>
    </div>
  );
}

export default AnimatedBg;
