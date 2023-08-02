import React, { useEffect, useState } from "react";
import "./Weare.css";
import weare1 from "../../asset/weare1.png";
import anh1 from "../../asset/1.png";
import anh2 from "../../asset/2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Weare = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-out",
      once: false, // Set once to false to repeat the animations on scroll up.
    });
  }, []);
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const handleSvgClick = () => {
    setShowAlternateContent(!showAlternateContent);
  };

  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const targetNumbers = [2, 20, 14, 20];

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumbers = numbers.map((num, index) =>
        num < targetNumbers[index] ? num + 1 : num
      );
      setNumbers(newNumbers);
    }, 100); // Tần suất cập nhật số, ở đây là 100ms

    return () => clearInterval(interval);
  }, [numbers]);

  return (
    <div className="contain-main">
      <div className="weare-left">
        <div data-aos="fade-right" className="text">
          <span className="text-we">WE ARE</span>
          <h1 className="h1-we">A Member Of</h1>
          <span className="span-we">
            {showAlternateContent
              ? "A different business development organization."
              : "A business development organisation helping to make valuable connections between businesses in the global energy sector."}
            A business development organisation helping to make valuable
            connections between businesses in the global energy sector.
          </span>
        </div>

        <div data-aos="fade-right" className="prev">
          <svg
            style={{ marginLeft: "20px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              d="M0.411366 9.99999L10.2184 0.192993L11.5886 1.33333L2.92196 9.99999L11.5886 18.6667L10.2184 19.807L0.411366 9.99999Z"
              fill="white"
            />
          </svg>
        </div>
        <div data-aos="fade-right" className="next">
          <svg
            style={{ marginLeft: "20px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              d="M11.5886 10L1.78163 19.807L0.411377 18.6667L9.07804 10L0.411377 1.33333L1.78163 0.193007L11.5886 10Z"
              fill="url(#paint0_linear_1_1283)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_1283"
                x1="0.411377"
                y1="10"
                x2="11.5886"
                y2="10"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA757" />
                <stop offset="1" stop-color="#16A571" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div data-aos="fade-right" className="weare-right">
        <div className="banner-img">
          <img className="banner-img1" src={weare1} />
          <div onClick={handleSvgClick} className="svg-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="173"
              height="172"
              viewBox="0 0 173 172"
              fill="none"
            >
              <circle
                opacity="0.93"
                cx="86.6842"
                cy="86.0001"
                r="85.7208"
                fill="url(#paint0_linear_1_1242)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1242"
                  x1="86.6842"
                  y1="0.279297"
                  x2="81.7465"
                  y2="205.051"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.5" />
                  <stop offset="1" stop-color="white" stop-opacity="0.34" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="172"
              height="172"
              viewBox="0 0 172 172"
              fill="none"
            >
              <circle
                cx="86.0089"
                cy="86.0001"
                r="85.6036"
                fill="url(#paint0_linear_1_1245)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1245"
                  x1="86.0089"
                  y1="0.396484"
                  x2="81.0779"
                  y2="204.889"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.5" />
                  <stop offset="1" stop-color="white" stop-opacity="0.34" />
                </linearGradient>
              </defs>
            </svg>
            <img className="anh1" src={anh1} />
            <img className="anh2" src={anh2} />
          </div>
        </div>
      </div>
      <div className="text-h1">
        <h1 data-aos="fade-up" className="h1-text">
          Company value reflects its ability to generate future profits,
          management, and market position.
        </h1>
        <div data-aos="fade-up" className="number-container">
          {numbers.map((num, index) => (
            <span
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "-2rem",
                color:
                  num >= targetNumbers[index]
                    ? "white"
                    : "var(--mu-trng, #FFF)",
              }}
              className="span-number"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>{num}</span>
                <sup
                  style={{
                    fontSize: "86px",
                    marginLeft: "0.2rem",
                    marginTop: "-3rem",
                  }}
                >
                  +
                </sup>
              </div>
              {index === 0 && (
                <div style={{ fontSize: "16px", marginLeft: "-2rem" }}>
                  four year
                </div>
              )}
              {index === 1 && (
                <div style={{ fontSize: "16px", marginLeft: "-4rem" }}>
                  Personnel
                </div>
              )}
              {index === 2 && (
                <div style={{ fontSize: "16px", marginLeft: "-2rem" }}>
                  Projects
                </div>
              )}
              {index === 3 && (
                <div style={{ fontSize: "16px", marginLeft: "-2rem" }}>
                  Clients & Partners
                </div>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weare;
