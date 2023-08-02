import React, { Fragment, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import imgmain1 from "../../asset/main1.jpg";
import ourpeople from "../../asset/Ourpeople.jpg";
import main2 from "../../asset/main2.jpg";
import main3 from "../../asset/main3.jpg";
import "./Main.css";

const Main = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-out",
      once: false, // Set once to false to repeat the animations on scroll up.
    });
  }, []);
  return (
    <div>
      {" "}
      <div className="main-container">
        <div data-aos="fade-left" className="left-side">
          <div className="text-left">
            <h3 className="h3-left" data-aos="fade-left">
              ABOUT US
            </h3>
            <span className="span-left">
              Offshore Energy Installation
              <h2 className="h2-left">
                OEI is your gateway to renewable energy and
                <span className="span-left"> Oil</span>
                <h2 className="h2-left">
                  &
                  <span
                    style={{ display: "inline-block", marginLeft: "0.5rem" }}
                    className="span-left"
                  >
                    Gas
                  </span>
                  <h2
                    style={{ display: "inline-block", marginLeft: "0.5rem" }}
                    className="h2-left"
                  >
                    solutions
                  </h2>
                </h2>
              </h2>
            </span>
          </div>
          <div></div>
          <div className="circle-bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="143"
              height="143"
              viewBox="0 0 143 143"
              fill="none"
            >
              <circle
                cx="71.5"
                cy="71.5005"
                r="71.5"
                fill="url(#paint0_linear_1_1223)"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontWeight="bold"
              >
                SEE MORE
              </text>
              <defs>
                <linearGradient
                  id="paint0_linear_1_1223"
                  x1="71.5"
                  y1="0.000488281"
                  x2="71.5"
                  y2="143"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA757" />
                  <stop offset="1" stop-color="#16A571" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="right-side">
          <div className="img-main">
            <div data-aos="fade-left" className="rectangle2"></div>

            <img className="img-main1" src={imgmain1} data-aos="fade-left" />
            <img className="img-main2" src={ourpeople} data-aos="fade-left" />
            <img className="img-main3" src={main2} data-aos="fade-left" />
            <img className="img-main4" src={main3} data-aos="fade-left" />

            <div
              style={{ backgroundColor: "#e7e9eb" }}
              className="rectangle"
              data-aos="fade-left"
            ></div>
          </div>
          <div className="rectangle5"></div>
        </div>
      </div>
      <div className="text-botoom">
        <h1 className="h1-bottom">
          OFFSHORE
          <span style={{ fontSize: "130px" }} className="span-bottom">
            {" "}
            ENERGY{" "}
          </span>
          <h3 style={{ fontSize: "130px" }} className="h3-bottom">
            INSTALLATION
          </h3>
        </h1>
      </div>
    </div>
  );
};

export default Main;
