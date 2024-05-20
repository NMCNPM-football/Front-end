// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    { name: "Lịch thi đấu và Kết quả", path: "/schedule" },
    { name: "Bảng xếp hạng", path: "/league-table" },
    { name: "Thông báo", path: "/announcements" },
    { name: "Các đội bóng", path: "/teams" },
    { name: "Điều lệ", path: "/rules" },
    { name: "Bình chọn", path: "/voting" },  // only for "VÔ ĐỊCH QUỐC GIA"
    { name: "Thư viện", path: "/library" },
    { name: "Download", path: "/download" }
  ];

  const firstDivisionMenuItems = [
    { name: "Lịch thi đấu và Kết quả", path: "/first-division/schedule" },
    { name: "Bảng xếp hạng", path: "/first-division/league-table" },
    { name: "Thông báo", path: "/first-division/announcements" },
    { name: "Các đội bóng", path: "/first-division/teams" },
    { name: "Điều lệ", path: "/first-division/rules" },
    { name: "Thư viện", path: "/first-division/library" },
    { name: "Download", path: "/first-division/download" }
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
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/vpf">VPF</Link></li>
              <li><Link to="/highlights">Highlights</Link></li>
              <li ><Link to="/news">Tin tức</Link></li>
              <li
                onMouseEnter={() => handleMouseEnter('vô địch quốc gia')}
                onMouseLeave={handleMouseLeave}
                className="dropdown-trigger"
              >
                <a href="#">Vô địch quốc gia</a>
                {hoveredMenu === 'vô địch quốc gia' && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => handleMouseEnter('vô địch quốc gia')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.map((item, index) => (
                      <li key={index} className="dropdown-item">
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('hạng nhất quốc gia')}
                onMouseLeave={handleMouseLeave}
                className="dropdown-trigger"
              >
                <a href='#'>Hạng nhất quốc gia</a>
                {hoveredMenu === 'hạng nhất quốc gia' && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => handleMouseEnter('hạng nhất quốc gia')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {firstDivisionMenuItems.map((item, index) => (
                      <li key={index} className="dropdown-item">
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link to="/cup">Cúp quốc gia</Link></li>
              <li><Link to="/playoff">Play-off</Link></li>
              <li><Link to="/library">Thư viện</Link></li>
              <li><Link to="/sponsors">Nhà tài trợ</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
