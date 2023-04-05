import { fontSize } from "@mui/system";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SemiCircleProgress from "react-progressbar-semicircle";

const Genealogy = () => {

  const[treeData , setTreeData] = useState("")

  const [treeTrue, setTreeTrue] = useState(false)

   const data = `<div className="circularHeader">
   <div class="glower-lower" id="glower-lower">
     <div className="add-circular">
       <div className="firstBar">
         <CircularProgressbar
           value="50"
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
 
         {/* <SemiCircleProgress percentage={33} showPercentValue /> */}
       </div>
       <div className="secondBar">
         <CircularProgressbar
           value="100"
           id="secondCircularBar"
           circleRatio={5}
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
           text={"Rishi"}
         />
       </div>
     </div>
 
     <div className="add-circular" id="secondCircularDiv">
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
       <div className="secondBar">
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
           }}
         />
       </div>
     </div>
   </div>
 
   <div className="allSides">
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
               text={"Rishi"}
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
               }}
             />
           </div>
         </div>
       </div>
     </div>
 
     <div className="rightSide">
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
               text={"Rishi"}
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
               }}
             />
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>`

 const textData = "lorem ipsum data"

useEffect(()=>{
  setTreeData(data)
},[])


async function treeHandler(){
  setTreeTrue(true)
}

console.log(treeData,"tree data here")

  return (
    <div>
      <section class="genealogy">
        <div class="container">
          <h2>GENEALOGY TREE</h2>
          <h6>8965****rejc</h6>
          <div class="genealogy-head">
            <div class="genealogy-left">
              <h6>Users</h6>
              <div class="emergency-ul">
                <ul>
                  <li class="genealogy-gt">T</li>
                  <li class="genealogy-gt">M</li>
                  <li class="genealogy-gt">O</li>
                </ul>
                <ul>
                  <li>5</li>
                  <li>500</li>
                  <li>400</li>
                </ul>
                <ul>
                  <li>4</li>
                  <li>500</li>
                  <li>400</li>
                </ul>
              </div>
            </div>
            <div class="genealogy-right">
              <h6>Stacking</h6>
              <div class="emergency-ul">
                <ul>
                  <li class="genealogy-gt">T</li>
                  <li class="genealogy-gt">M</li>
                  <li class="genealogy-gt">O</li>
                </ul>
                <ul>
                  <li>5</li>
                  <li>500</li>
                  <li>400</li>
                </ul>
                <ul>
                  <li>4</li>
                  <li>500</li>
                  <li>400</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="genealogy-lower">
            <div class="glower-head">
              <div class="ghead-left">
                <a href="">
                  {" "}
                  <img src="/img/back.png" alt="" />
                </a>
              </div>
              <div class="ghead-right input-group">
                <input type="text" class="form-control ghead-input" />
                <span class="input-group-text ghead-search">
                  <img src="/img/magnifying-glass.png" alt="" />
                </span>
              </div>
            </div>

            <div className="circularHeader">
              <div class="glower-lower" id="glower-lower">
                <div className="add-circular" onClick={treeHandler}>
                  <div className="firstBar">
                    <CircularProgressbar
                      value="50"
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

                    {/* <SemiCircleProgress percentage={33} showPercentValue /> */}
                  </div>
                  <div className="secondBar">
                    <CircularProgressbar
                      value="100"
                      id="secondCircularBar"
                      circleRatio={5}
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
                      text={"Rishi"}
                    />
                  </div>
                </div>

                <div className="add-circular" id="secondCircularDiv">
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
                  <div className="secondBar">
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
                      }}
                    />
                  </div>
                </div>
              </div>

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
                          text={"Rishi"}
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
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              {/* <div className="allSides"> */}
            

                <div className="rightSide">
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
                          text={"Rishi"}
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
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}


     {/* {treeData} */}


            {/* <div  dangerouslySetInnerHTML={{ __html: data }} >
            </div> */}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Genealogy;
