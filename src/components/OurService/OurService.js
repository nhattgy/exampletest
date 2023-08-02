import React, { useEffect } from "react";
import "./OurService.css";
import sv1 from "../../asset/sv1.jpg";
import sv2 from "../../asset/sv2.png";
import sv3 from "../../asset/sv3.jpg";
import sv4 from "../../asset/sv4.jpg";
import sv5 from "../../asset/sv5.jpg";
import sv6 from "../../asset/sv6.jpg";
import sv7 from "../../asset/sv7.png";
import sv8 from "../../asset/sv8.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const OurService = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 600,
      easing: "ease-out",
      once: false, // Set once to false to repeat the animations on scroll up.
    });
  }, []);
  return (
    <div className="container-ourservice">
      <div className="container-our">
        <div className="text">
          <span className="span-text">Our Comprehensive Service</span>
          <h1 data-aos="fade-left" className="h1-textt">
            Empowering Sustainability
          </h1>
          <img data-aos="fade-left" className="sv2" src={sv2} />
          <img data-aos="fade-left" className="sv5" src={sv5} />
          <img data-aos="fade-left" className="sv6" src={sv6} />
          <div className="image-container">
            <img className="img1" src={sv1} alt="Service 1" />
            <div className="overlay-text">
              <span className="plus-icon">+</span>
            </div>
          </div>

          <img className="sv3" src={sv3} />
          <img className="sv4" src={sv4} />
          <img data-aos="fade-up" className="sv7" src={sv7} />
          <div className="rectango">
            <span className="spanrec">10</span>
            <span className="spanrec2">+</span>
            <h5  className="h5-rec">
              Engineers work in OEI
            </h5>
            <img data-aos="fade-up" className="sv8" src={sv8} />
            <div  className="add">
              <svg
                style={{ marginTop: "-3rem" }}
                xmlns="http://www.w3.org/2000/svg"
                width="143"
                height="143"
                viewBox="0 0 143 143"
                fill="none"
              >
                <circle
                  cx="71.5"
                  cy="71.5"
                  r="71.5"
                  fill="url(#paint0_linear_603_265)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_603_265"
                    x1="71.5"
                    y1="0"
                    x2="71.5"
                    y2="143"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4CA757" />
                    <stop offset="1" stop-color="#16A571" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="see-more">SEE MORE</span>
            </div>
            <div className="deg"></div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {" "}
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
    </div>
  );
};

export default OurService;
