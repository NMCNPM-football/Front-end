import React, { useState } from 'react';
import './Header.css'; // Ensure you have a CSS file for styling

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuItems = [
    "Lịch thi đấu và Kết quả",
    "Bảng xếp hạng",
    "Thông báo",
    "Các đội bóng",
    "Điều lệ",
    "Bình chọn",  // only for "VÔ ĐỊCH QUỐC GIA"
    "Thư viện",
    "Download"
  ];

  const firstDivisionMenuItems = [
    "Lịch thi đấu và Kết quả",
    "Bảng xếp hạng",
    "Thông báo",
    "Các đội bóng",
    "Điều lệ",
    "Thư viện",
    "Download"
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="team-logos">
          <ul>
            <li><img src="./assets/becamexbinhduong.png" alt="Team 1" /></li>
            <li><img src="./assets/conganhanoi.png" alt="Team 2" /></li>
            <li><img src="./assets/Dongathanhhoa.png" alt="Team 3" /></li>
            <li><img src="./assets/hanoi.png" alt="Team 4" /></li>
            <li><img src="./assets/haiphong.png" alt="Team 5" /></li>
            <li><img src="./assets/hoanganhgialai.png" alt="Team 6" /></li>
            <li><img src="./assets/honglinhhatinh.png" alt="Team 7" /></li>
            <li><img src="./assets/khanhhoa.png" alt="Team 8" /></li>
            <li><img src="./assets/quangnam.png" alt="Team 9" /></li>
            <li><img src="./assets/merryland.png" alt="Team 10" /></li>
          </ul>
        </div>
      </header>
      <nav className="nav">
        <div className="left-section">
          <div className="logo">
            <img src="./assets/logo_vpf.png" alt="VPF Logo" />
          </div>
          <div className="title-menu">
            <div className="title-header">
              <h1>OFFICIAL WEBSITE OF</h1>
              <h2>Vietnam Professional Football</h2>
            </div>
            <ul className="menu">
              <li>Trang chủ</li>
              <li>VPF</li>
              <li>Highlights</li>
              <li>Tin tức</li>
              <li
                onMouseEnter={() => handleMouseEnter('vô địch quốc gia')}
                onMouseLeave={handleMouseLeave}
                className="dropdown-trigger"
              >
                Vô địch quốc gia
                {hoveredMenu === 'vô địch quốc gia' && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => handleMouseEnter('vô địch quốc gia')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.map((item, index) => (
                      <li key={index} className="dropdown-item">{item}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('hạng nhất quốc gia')}
                onMouseLeave={handleMouseLeave}
                className="dropdown-trigger"
              >
                Hạng nhất quốc gia
                {hoveredMenu === 'hạng nhất quốc gia' && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => handleMouseEnter('hạng nhất quốc gia')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {firstDivisionMenuItems.map((item, index) => (
                      <li key={index} className="dropdown-item">{item}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li>Cúp quốc gia</li>
              <li>Play-off</li>
              <li>Thư viện</li>
              <li>Nhà tài trợ</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;