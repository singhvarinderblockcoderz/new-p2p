import React from "react";
import Genealogy from "../pages/genealogy";

const MainGenealogy = () => {
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
                  <img src="img/back.png" alt="" />
                </a>
              </div>
              <div class="ghead-right input-group">
                <input type="text" class="form-control ghead-input" />
                <span class="input-group-text ghead-search">
                  <img src="img/magnifying-glass.png" alt="" />
                </span>
              </div>
            </div>
            <div class="glower-lower">
              <div className="treeDivs">
                <ul>
                  {" "}
                  <li>
                    <div className="headHide"></div>
                    {/* <div class="card" id="progressCard"> */}
                    {/* <div class="percent"></div> */}
                    <Genealogy />
                    {/* </div> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainGenealogy;
