import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="#!">LIÊN HỆ</a>
          <a href="#!">HỎI ĐÁP</a>
          <a href="#!">CƠ HỘI NGHỀ NGHIỆP</a>
          <a href="#!">CHÍNH SÁCH BẢO MẬT</a>
          <a href="#!">ĐIỀU KHOẢN SỬ DỤNG</a>
          <a href="#!">ĐỐI TÁC</a>
        </nav>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-section">
            <img src="path/to/icon1.png" alt="Icon 1" />
            <p>
              <strong>Đơn vị chủ quản</strong>
              <br />
              <span style={{ fontSize: '15px' }}>Công ty cổ phần bóng đá chuyên nghiệp Việt Nam (VPF)</span>
            </p>
          </div>
          <div className="footer-section">
            <img src="path/to/icon2.png" alt="Icon 2" />
            <p><strong>Địa chỉ</strong><br />Số 18, Phố Lý Văn Phức, Cát Linh, Đống Đa, TP. Hà Nội.</p>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-section">
            <img src="path/to/icon3.png" alt="Icon 3" />
            <p><strong>Giấy phép</strong><br />Giấy phép số 4593/GP-TTĐT do sở TT&TT Hà Nội cấp ngày 31/10/2017</p>
          </div>
          <div className="footer-section">
            <img src="path/to/icon4.png" alt="Icon 4" />
            <p><strong>Người chịu trách nhiệm nội dung</strong><br />Nguyễn Thị Thu Huyền (Trưởng phòng Truyền Thông - 02437858457 (máy lẻ 126))</p>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-section">
            <img src="path/to/icon5.png" alt="Icon 5" />
            <p><strong>Liên lạc</strong><br />024.3785.8457/58 - FAX: 024.3785.8462</p>
          </div>
          <div className="footer-section">
            <p>
              <a href="http://www.vpf.vn">www.vpf.vn</a><br />
              <a href="http://www.vnleague.com">www.vnleague.com</a><br />
              <a href="mailto:info@vpf.vn">info@vpf.vn</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2018 Vietnam Professional Football All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
