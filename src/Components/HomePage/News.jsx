import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="news-container">
      <h1>TIN TỨC MỚI NHẤT</h1>
      <div className="highlight-news">
        <img src="https://vpf.vn/wp-content/uploads/2023/10/Flag-HNQG-2324.jpg" alt="Highlight News" />
        <div className="highlight-description">
          <h2>Số liệu chuyên môn sau vòng 18 Giải HNQG Bia Sao Vàng 2023/24:</h2>
          <p style={{ color: 'red' }}>Số liệu chuyên môn</p>
        </div>
      </div>
      <div className="news-grid">
        <div className="news-item">
          <div className="news-description">
            <img src="https://vpf.vn/wp-content/uploads/2024/05/kquav18HNQG-324x160.jpg" alt="News 1" />
            <div className="text-content">
              <h3>Vòng 18 Gold Star V.League 2-2023/24: CLB Đồng Tháp bước vào nhóm an toàn</h3>
              <p>Tin hạng nhất</p>
            </div>
          </div>
        </div>
        <div className="news-item">
          <div className="news-description">
            <img src="https://vpf.vn/wp-content/uploads/2024/05/BinhPhuoc-DongNai2023-24-14-100x70.jpg" alt="News 2" />
            <div className="text-content">
              <h3>Vòng 18 Gold Star V.League 2-2023/24: Đeo bám quyết liệt</h3>
              <p>Tin hạng nhất</p>
            </div>
          </div>
        </div>
        <div className="news-item">
          <div className="news-description">
            <img src="https://vpf.vn/wp-content/uploads/2024/05/pre-vong-20-nw-vl-2023-24-100x70.jpg" alt="News 3" />
            <div className="text-content">
              <h3>Trước vòng 20 Night Wolf V.League 1 – 2023/24: Đầy kịch tính!</h3>
              <p>Tin tức</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
