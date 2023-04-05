import { fontSize } from "@mui/system";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeftLeg = (props) => {
  console.log(props, "for left leg");
  return (
    <div className="leftSide">
      <div class="glower-lower" id="glower-lower">
        <div className="add-circular">
          <div className="firstBar">
            <CircularProgressbar
              value="100"
              circleRatio={0.5}
              styles={{
                root: {
                  transform: "rotate(0.5turn)",
                },
                path: { stroke: "#1B1D20" },
                trailColor: "grey",
                backgroundColor: "red",
                width: "10% !important",
              }}
            />
          </div>
          <div className="secondBar" id="secondBar">
            <CircularProgressbar
              value="100"
              id="secondCircularBar"
              circleRatio={0.5}
              strokeWidth={8}
              styles={{
                root: {
                  transform: "rotate(90turn)",
                },
                path: { stroke: "#2074F2" },
                text: { fontSize: "14px", fill: "#2074F2" },
                trailColor: "grey",
                backgroundColor: "red",
                width: "10% !important",
                fontSize: "10px !important",
              }}
              text={props.text}
            />
          </div>
        </div>

        <div className="add-circular" id="leftsecondCircularDiv">
          <div className="firstBar">
            <CircularProgressbar
              value="100"
              circleRatio={0.5}
              strokeWidth={11}
              styles={{
                root: {
                  transform: "rotate(0.5turn)",
                },
                path: { stroke: "#1B1D20" },
                trailColor: "grey",
                backgroundColor: "red",
                width: "10% !important",
              }}
            />
          </div>
          <div className="secondBar" id="secondBar">
            <CircularProgressbar
              value="100"
              id="secondCircularBar"
              circleRatio={0.5}
              strokeWidth={11}
              styles={{
                root: {
                  transform: "rotate(90turn)",
                },
                path: { stroke: "#2074F2" },
                trailColor: "grey",
                backgroundColor: "red",
                width: "10% !important",
                // text: { props },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftLeg;
