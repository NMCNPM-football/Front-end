import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [fadeOut, setFadeOut] = useState(false); // Declare fadeOut state variable

  const banners = [
    "https://vpf.vn/wp-content/uploads/2024/04/Intro-VLeague1-2324.png",
    "https://vpf.vn/wp-content/uploads/2023/10/Intro-VLeague2-2324.png",
    "https://vpf.vn/wp-content/uploads/2024/04/Intro-CupQG-2324.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 5000); // Chuyển đổi banner sau mỗi 5 giây

    return () => clearInterval(interval); // Clear interval khi component bị unmount
  }, [currentBanner]); // Thêm currentBanner vào dependency array để reset interval khi currentBanner thay đổi

  const nextBanner = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentBanner((currentBanner + 1) % banners.length);
      setFadeOut(false);
    }, 500); // Thời gian trễ để hiệu ứng fade out
  };

  const prevBanner = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentBanner((currentBanner - 1 + banners.length) % banners.length);
      setFadeOut(false);
    }, 500); // Thời gian trễ để hiệu ứng fade out
  };

  return (
    <div className="banner-container">
      <button onClick={prevBanner} className="banner-button banner-button-left">◀</button>
      <span>
        <img
          src={banners[currentBanner]}
          alt={`Banner ${currentBanner + 1}`}
          className={fadeOut ? 'fade-out' : ''}
        />
      </span>
      <button onClick={nextBanner} className="banner-button banner-button-right">▶</button>
    </div>
  );
};

export default Banner;
