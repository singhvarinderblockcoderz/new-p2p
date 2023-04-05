import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Link from "next/link";

export default function Settings() {
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
      <section class="Settings">
        <div class="container">
          <h2>SETTINGS</h2>
          <Link href="/personalInfo">
            <div class="settings-box">
              <div class="setting-icon">
                <img src="/setting-user.png" alt="" />
              </div>
              <div class="setting-text">Personal Information</div>
              <div class="setting-arrow">
                <img src="/setting-next.png" alt="" />
              </div>
            </div>
          </Link>

          <a href="">
            <div class="settings-box">
              <div class="setting-icon">
                <img src="/setting-security.png" alt="" />
              </div>
              <div class="setting-text">Account Security</div>
              <div class="setting-arrow">
                <img src="/setting-next.png" alt="" />
              </div>
            </div>
          </a>

          <a href="">
            <div class="settings-box">
              <div class="setting-icon">
                <img src="/setting-user.png" alt="" />
              </div>
              <div class="setting-text">Support Service</div>
              <div class="setting-arrow">
                <img src="/setting-next.png" alt="" />
              </div>
            </div>
          </a>

          <a href="">
            <div class="settings-box">
              <div class="setting-icon">
                <img src="/setting-key.png" alt="" />
              </div>
              <div class="setting-text">Reset Password</div>
              <div class="setting-arrow">
                <img src="/setting-next.png" alt="" />
              </div>
            </div>
          </a>
        </div>
      </section>
      <section class="setting-logout">
        <div class="container">
          <a href="" class="s-logout">
            Log out
          </a>
        </div>
      </section>
      <section class="bottom-nav">
        <div class="container">
          <div class="bottomnav-head">
            <ul>
              <li class="active">
                <Link href="/dashboard">
                  <img src="/dashboard.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="/mainGenealogy">
                  <img src="/member_tree.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="/incentive">
                  <img src="/incentive.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="/ewallet">
                  <img src="/wallet.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="/settings">
                  <img src="/user.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
