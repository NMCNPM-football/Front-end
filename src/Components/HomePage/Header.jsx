// Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuItems = [
    { name: "Lịch thi đấu và Kết quả", path: "/lich-thi-dau-va-ket-qua" },
    { name: "Bảng xếp hạng", path: "/league-table" },
    { name: "Thông báo", path: "/thong-bao" },
    { name: "Các đội bóng", path: "/club-info" },
    { name: "Điều lệ", path: "/dieu-le" },
    { name: "Bình chọn", path: "/binh-chon" },
    { name: "Thư viện", path: "/thu-vien" },
    { name: "Download", path: "/match/0" }
  ];

  const firstDivisionMenuItems = [
    { name: "Lịch thi đấu và Kết quả", path: "/lich-thi-dau-va-ket-qua" },
    { name: "Bảng xếp hạng", path: "/league-table" },
    { name: "Thông báo", path: "/thong-bao" },
    { name: "Các đội bóng", path: "/club-info" },
    { name: "Điều lệ", path: "/dieu-le" },
    { name: "Thư viện", path: "/thu-vien" },
    { name: "Download", path: "/match/0" }
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="team-logos">
          <ul>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/binh-duong-2021.png" alt="Team 1" /></li>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/cong-an-ha-noi-fc-300x300.png" alt="Team 2" /></li>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/Logo-CLB-Dong-A-Thanh-Hoa_chuan-300x249.png" alt="Team 3" /></li>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/HNFC-6-sao-300x300.png" alt="Team 4" /></li>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/haiphongfc-300x291.jpg" alt="Team 5" /></li>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/Logo-HAGL-300x300.jpg" alt="Team 6" /></li>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/Logo-Ha-Tinh-update.png" alt="Team 7" /></li>
            <li><img src="https://vpf.vn/wp-content/uploads/2018/10/Binh-Dinh-300x300.png" alt="Team 8" /></li>
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
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  Trang chủ
                </Link>
              </li>
              <li className="menu-item">VPF</li>
              <li className="menu-item">Highlights</li>
              <li className="menu-item">Tin tức</li>
              <li
                onMouseEnter={() => handleMouseEnter('vô địch quốc gia')}
                onMouseLeave={handleMouseLeave}
                className="dropdown-trigger menu-item"
              >
                Vô địch quốc gia
                {hoveredMenu === 'vô địch quốc gia' && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => handleMouseEnter('vô địch quốc gia')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.map((item, index) => (
                      <li key={index} className="dropdown-item">
                        <Link to={item.path} className="dropdown-link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('hạng nhất quốc gia')}
                onMouseLeave={handleMouseLeave}
                className="dropdown-trigger menu-item"
              >
                Hạng nhất quốc gia
                {hoveredMenu === 'hạng nhất quốc gia' && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => handleMouseEnter('hạng nhất quốc gia')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {firstDivisionMenuItems.map((item, index) => (
                      <li key={index} className="dropdown-item">
                        <Link to={item.path} className="dropdown-link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="menu-item">Cúp quốc gia</li>
              <li className="menu-item">Thư viện</li>
              <li className="menu-item">Nhà tài trợ</li>
              <li className="menu-item">Đăng nhập</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;