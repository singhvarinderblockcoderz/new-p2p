import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SemiCircleProgress from "react-progressbar-semicircle";

const FirstBar = (props) => {
  console.log(props);
  return (
    <>
      <div class="progress-container">
        <SemiCircleProgress
          percentage={80}
          //  showPercentValue
          diameter={82}
          stroke={"#1F74F2"}
          strokeWidth={5}
          background={"white"}
          className="double-border"
        ></SemiCircleProgress>
        <div className="circleText">{props?.text?.name?.slice(0, 7)}</div>
        <div className="circleText" id="arrow-circleText">
          <i class="bi bi-chevron-up"></i>
        </div>

        <SemiCircleProgress
          percentage={85}
          //  showPercentValue
          diameter={82}
          stroke={"#1F74F2"}
          strokeWidth={5}
          // text={"Rishi"}
        />
      </div>

      <div class="progress-container" id="second-progreess">
        <SemiCircleProgress
          percentage={100}
          //  showPercentValue
          diameter={62}
          stroke={"#1F74F2"}
          strokeWidth={4}
        />
        <SemiCircleProgress
          percentage={70}
          //  showPercentValue
          diameter={62}
          stroke={"#1F74F2"}
          strokeWidth={4}
        />
      </div>
    </>
  );
};

export default FirstBar;
