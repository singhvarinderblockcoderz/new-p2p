import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Link from "next/link";

export default function PersonalInfo() {
  async function jQueryFunction() {
    $(document).on("click", "ul li", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }

  useEffect(() => {
    jQueryFunction();
  }, []);

  return (
    <>
      {" "}
      <section class="personal">
        <div class="container">
          <div class="personal-head">
            <div class="personalhead-left">
              <Link href="/settings">
                <img src="/personal-arrow.png" alt="" />
              </Link>
            </div>
            <div class="personalhead-mid">SETTINGS</div>
            <div class="personalhead-right">
              <img src="/personal-edit.png" alt="" />
            </div>
          </div>
          <div class="personal-box">
            <div class="personal-image">
              <div class="personal-camera">
                <span></span>
              </div>
              <div class="camera-icon">
                <img src="/personal-camera.png" alt="" />
              </div>
            </div>
            <p>
              You're part of our family since <span>25 February 2021!</span>
            </p>
            <div class="personal-form">
              <h4>Personal Information</h4>
              <form>
                <div class="mb-3 personal-row">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input type="text" class="form-control" placeholder="Rishi" />
                </div>
                <div class="mb-3 personal-row">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input type="text" class="form-control" placeholder="Sunaq" />
                </div>
                <div class="mb-3 personal-row">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="+91 7986623725"
                  />
                </div>
                <div class="mb-3 personal-row">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email Id
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="sunaqrishi_uk@gmail.com"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
