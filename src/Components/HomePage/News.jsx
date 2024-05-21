import React from 'react';
import './News.css';

const New = () => {
  return (
    <div className="news-container">
      <header className="header">
        <h1>TIN TỨC MỚI NHẤT</h1>
      </header>
      <div className="main-content">
        <div className="highlight-news">
          <img src="path-to-highlight-image.png" alt="Highlight News" />
          <div className="highlight-description">
            <h2>Danh sách đăng ký thi đấu CLB LPBank Hoàng Anh Gia Lai vs...</h2>
            <p>Danh sách thi đấu</p>
          </div>
        </div>
        <div className="news-grid">
          <div className="news-item">
            <img src="path-to-image1.png" alt="News 1" />
            <div className="news-description">
              <h3>Danh sách đăng ký thi đấu CLB Quảng Nam vs CLB Becamex Bình...</h3>
              <p>Danh sách thi đấu</p>
            </div>
          </div>
          <div className="news-item">
            <img src="path-to-image2.png" alt="News 2" />
            <div className="news-description">
              <h3>Số liệu chuyên môn sau vòng 18 Giải HNQG Bia Sao Vàng 2023/24:</h3>
              <p>Số liệu chuyên môn</p>
            </div>
          </div>
          <div className="news-item">
            <img src="path-to-image3.png" alt="News 3" />
            <div className="news-description">
              <h3>Vòng 18 Gold Star V.League 2-2023/24: CLB Đồng Tháp bước vào nhóm an...</h3>
              <p>Tin Hạng Nhất</p>
            </div>
          </div>
        </div>
        <aside className="ranking">
          <h2>VPF Bảng xếp hạng</h2>
          <div className="ranking-table">
            <div className="ranking-header">
              <span>#</span>
              <span>Đội bóng</span>
              <span>Trận</span>
              <span>HS</span>
              <span>Điểm</span>
            </div>
            {/* Add the team ranking details here */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default New;
