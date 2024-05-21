import React, { useState } from 'react';
import './Header.css';
// import LeagueTable from '../../Components/Ranking/LeagueTable';
import { Link } from 'react-router-dom';
const Header = () => {
  const [setCurrentPage] = useState('home'); // State to manage the current page
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuItems = [
    { name: "Lịch thi đấu và Kết quả", path: "lich-thi-dau-va-ket-qua" },
    { name: "Bảng xếp hạng", path: "bang-xep-hang" },
    { name: "Thông báo", path: "thong-bao" },
    { name: "Các đội bóng", path: "cac-doi-bong" },
    { name: "Điều lệ", path: "dieu-le" },
    { name: "Bình chọn", path: "binh-chon" },
    { name: "Thư viện", path: "thu-vien" },
    { name: "Download", path: "download" }
  ];

  const firstDivisionMenuItems = [
    { name: "Lịch thi đấu và Kết quả", path: "lich-thi-dau-va-ket-qua" },
    { name: "Bảng xếp hạng", path: "bang-xep-hang" },
    { name: "Thông báo", path: "thong-bao" },
    { name: "Các đội bóng", path: "cac-doi-bong" },
    { name: "Điều lệ", path: "dieu-le" },
    { name: "Thư viện", path: "thu-vien" },
    { name: "Download", path: "download" }
  ];

  // if (currentPage === 'bang-xep-hang') {
  //   return <LeagueTable />;
  // }

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
                <li className="menu-item"><Link to="/home" className="menu-link" onClick={() => setCurrentPage('/home')}>Trang chủ</Link></li>
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
                              <Link to={item.path} className="dropdown-link" onClick={() => setCurrentPage(item.path)}>{item.name}</Link>
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
                              <Link to={item.path} className="dropdown-link" onClick={() => setCurrentPage(item.path)}>{item.name}</Link>
                            </li>
                        ))}
                      </ul>
                  )}
                </li>
                <li className="menu-item">Cúp quốc gia</li>
                <li className="menu-item">Play-off</li>
                <li className="menu-item">Thư viện</li>
                <li className="menu-item">Nhà tài trợ</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Header;