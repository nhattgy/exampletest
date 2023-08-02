import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import banner1 from "../../../asset/banner1.jpg";
import banner2 from "../../../asset/banner2.png";
import banner3 from "../../../asset/banner3.png";
import logo from "../../../asset/logo.png";
import introduceImage from "../../../asset/introduce.png";
import ourpeople from "../../../asset/Ourpeople.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  const [showBlueTable, setShowBlueTable] = useState(false);
  const [hideTextHeader, setHideTextHeader] = useState(false);
  const [showIntroduceImage, setShowIntroduceImage] = useState(false); // State to track "Introduce" image visibility
  const isHoveringBlueTable = useRef(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [currentOurPeopleImageIndex, setCurrentOurPeopleImageIndex] =
    useState(0);

  // Array of "Our People" images
  const ourPeopleImages = [ourpeople];
  const handleCircleBottom1Click = () => {
    setCurrentBannerIndex(0); // Show banner1
  };

  // Click event handler for circle-bottom3
  const handleCircleBottom3Click = () => {
    setCurrentBannerIndex(1); // Show banner2
  };

  // Click event handler for circle-bottom4
  const handleCircleBottom4Click = () => {
    setCurrentBannerIndex(2); // Show banner3
  };

  // Array of banner images
  const bannerImages = [banner1, banner2, banner3];

  // Function to update the currentBannerIndex
  const updateBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  // useEffect to set up the timer to switch banners every 4 seconds
  useEffect(() => {
    const bannerTimer = setInterval(updateBanner, 4000);
    return () => {
      clearInterval(bannerTimer);
    };
  }, []);
  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleAboutUsHover = (isHovering) => {
    if (isHovering) {
      setShowBlueTable(true);
      setHideTextHeader(true);
      setShowIntroduceImage(false); // Hide the "Introduce" image when hovering over "About us"
    } else {
      setTimeout(() => {
        if (!isHoveringBlueTable.current) {
          setShowBlueTable(false);
          setHideTextHeader(false);
          setShowIntroduceImage(false); // Show the "Introduce" image when the mouse leaves "About us" if it is already hovering over "Introduce"
        }
      }, 500);
    }
  };
  const handleOurPeopleHover = (isHovering) => {
    setShowIntroduceImage(isHovering); // Show the "Introduce" image when hovering over "Our People"
    // Reset the image index when hovering over "Our People"
  };
  const handleIntroduceHover = (isHovering) => {
    setShowIntroduceImage(isHovering); // Show the "Introduce" image when hovering over "Introduce"
  };

  return (
    <div className="header-container">
      <div className="container">
        <div className="banner">
          <div
            className={`header-hover ${
              showBlueTable ? "about-us-hovered" : ""
            }`}
          >
            <a href="#" className="logo">
              <img className="logoheader" src={logo} alt="Logo" />
            </a>

            <div className="nav-bar">
              <nav className="navbar">
                <div>
                  <span className="separator"></span>
                  <a href="#" className="nav-item">
                    Home
                  </a>
                </div>

                <div>
                  <span className="separator"></span>
                  <a
                    href="#"
                    className="nav-item"
                    onMouseEnter={() => handleAboutUsHover(true)}
                    onMouseLeave={() => handleAboutUsHover(false)}
                  >
                    About us
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1.5L5 4.5L9 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <span className="separator"></span>
                  <a href="#" className="nav-item">
                    Project
                  </a>
                </div>

                <div>
                  <span className="separator"></span>
                  <a href="#" className="nav-item">
                    Service
                  </a>
                </div>

                <div>
                  <span className="separator"></span>
                  <a href="#" className="nav-item">
                    News & Event
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1.5L5 4.5L9 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <span className="separator"></span>
                  <a href="#" className="nav-item">
                    Careers
                  </a>
                </div>

                <div>
                  <span className="separator"></span>
                  <a href="#" className="nav-item">
                    Contact
                  </a>
                </div>
              </nav>
            </div>
          </div>

          {showIntroduceImage && (
            <div className="introduce-container">
              <div className="introduce-text">
                <h1 data-aos="fade-left" className="h1-introduce">
                  Introduce
                </h1>
                <span>
                  The Company comprises dynamic qualified personnel, experienced
                  in the field of offshore transportation and installation
                </span>
                <h5 style={{ fontWeight: "600" }}>SEE MORE +</h5>
              </div>

              <img
                data-aos="fade-up"
                className="introduce-image"
                src={introduceImage}
                alt="Introduce"
              />
            </div>
          )}

          {showBlueTable && (
            <div
              className={`blue-table ${
                showBlueTable ? "about-us-hovered" : ""
              }`}
              onMouseEnter={() => {
                isHoveringBlueTable.current = true;
              }}
              onMouseLeave={() => {
                isHoveringBlueTable.current = false;
                handleAboutUsHover(false);
              }}
            >
              {/* Add the content for the blue table here */}
              <div style={{ marginLeft: "9rem" }}>
                <div style={{ marginTop: "54px" }}>
                  <span
                    className="text-menu"
                    onMouseEnter={() => handleIntroduceHover(true)} // Use handleIntroduceHover instead of handleAboutUsHover
                    onMouseLeave={() => handleIntroduceHover(false)} // Use handleIntroduceHover instead of handleAboutUsHover
                  >
                    Introduce
                  </span>
                  <span className="separator2"></span>
                </div>
                <div style={{ marginTop: "54px" }}>
                  <span
                    onMouseEnter={() => handleOurPeopleHover(true)}
                    onMouseLeave={() => handleOurPeopleHover(false)}
                    className="text-menu"
                  >
                    Our People
                  </span>
                  <span className="separator2"></span>
                </div>
                <div style={{ marginTop: "54px" }}>
                  <span className="text-menu">QHSE</span>
                  <span className="separator2"></span>
                </div>
                <div style={{ marginTop: "54px" }}>
                  <span className="text-menu">Asset And facility</span>
                  <span className="separator2"></span>
                </div>
              </div>
            </div>
          )}

          {!hideTextHeader && (
            <div data-aos="fade-up" class="text-header">
              <h1 class="h1-header" data-text="Building For">
                Building For
              </h1>
              <h1 class="h1-header2" data-text="Green">
                Green
              </h1>
              <h1 class="h1-header3" data-text="Energy">
                Energy
              </h1>
            </div>
          )}
          {!hideTextHeader && (
            <span
              data-aos="fade-in"
              data-aos-id="super-duper"
              className="introduce-text"
            >
              We provide types of services for Wind Farm projects in
              Vietnam.With
              <h3 className="ok"> 153+ MW</h3> of Wind turbines installed since
              established, we are confident to provide the best services to our
              customer.
            </span>
          )}
          <div className="circle-bottom1" onClick={handleCircleBottom1Click}>
            <svg
              className="circle-bottom2"
              xmlns="http://www.w3.org/2000/svg"
              width="159"
              height="159"
              cursor="pointer"
              viewBox="0 0 159 159"
              fill="none"
            >
              <circle cx="79.5" cy="79.5" r="79.5" fill="#4CA757" />
              <text
                className="text-number"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="24"
                fontFamily="Arial"
              >
                15
              </text>
              <text
                className="text"
                x="50%"
                y="70%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontFamily="Arial"
              >
                Experience
              </text>
            </svg>

            <div onClick={handleCircleBottom3Click} style={{ width: "159px" }}>
              <img className="circle-bottom3" src={banner3} />
            </div>
            <div>
              <img className="circle-bottom4" src={banner2} />
            </div>
          </div>
          {/* Display the current banner image based on currentBannerIndex */}
          <img
            className="imgbanner"
            src={bannerImages[currentBannerIndex]}
            alt="Banner"
          />
        </div>
        <div className="phone-number">
          <h4 className="phone-text">+00 9875466</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
