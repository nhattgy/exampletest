import React, { useEffect, useState } from "react";
import "./News.css";
import image1 from "../../asset/sv1.jpg";
import image2 from "../../asset/sv2.png";
import image3 from "../../asset/sv3.jpg";
import image4 from "../../asset/sv4.jpg";
import image5 from "../../asset/sv5.jpg";
import image6 from "../../asset/sv6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const News = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 600,
      easing: "ease-out",
      once: false, // Set once to false to repeat the animations on scroll up.
    });
  }, []);
  const images = [
    {
      id: 1,
      src: image1,
      date: "2/8/2023",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 2,
      src: image2,
      date: "2/8/2023",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 3,
      src: image3,
      date: "2/8/2023",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 4,
      src: image4,
      date: "2/8/2023",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 5,
      src: image5,
      date: "2/8/2023",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 6,
      src: image6,
      date: "2/8/2023",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 2;
  const startIndex = currentIndex;
  const endIndex = (currentIndex + imagesPerPage) % images.length;
  const initialImagesToShow = images.slice(startIndex, startIndex + 4);
  const translateX = currentIndex * -50; // Di chuyển ảnh với mỗi bước là 50%

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + imagesPerPage) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - imagesPerPage + images.length) % images.length
    );
  };
  return (
    <div>
      <div data-aos="fade-up" className="news-container">
        <div className="news">NEW</div>
        <div className="last-news">Last News</div>
        <button className="see-moree">SEE MORE</button>
      </div>
      <div data-aos="fade-up" className="image-containerrr">
        {initialImagesToShow.map((image, index) => (
          <div
            key={image.id}
            className={`image-item ${index === 0 ? "active" : ""}`}
            style={{ transform: `translateX(${(index - currentIndex) * 5}%)` }}
          >
            <img src={image.src} alt={image.title} />
            <div className="title-bottom">
              <div className="date">{image.date}</div>
              <div className="image-title">{image.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle
              cx="32"
              cy="32"
              r="31.5"
              stroke="url(#paint0_linear_1_1397)"
            />
            <path
              d="M26.5091 31.8284L35.2265 23.1111L36.4445 24.1247L28.7408 31.8284L36.4445 39.5321L35.2265 40.5458L26.5091 31.8284Z"
              fill="url(#paint1_linear_1_1397)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_1397"
                x1="32"
                y1="0"
                x2="32"
                y2="64"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA757" />
                <stop offset="1" stop-color="#16A571" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_1397"
                x1="36.4445"
                y1="31.8284"
                x2="26.5091"
                y2="31.8284"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA757" />
                <stop offset="1" stop-color="#16A571" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle cx="32" cy="32" r="32" fill="url(#paint0_linear_1_1400)" />
            <path
              d="M36.602 32.1716L27.8847 40.8889L26.6667 39.8753L34.3704 32.1716L26.6667 24.4679L27.8847 23.4542L36.602 32.1716Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_1400"
                x1="32"
                y1="0"
                x2="32"
                y2="64"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA757" />
                <stop offset="1" stop-color="#16A571" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default News;
