import React from 'react';
import './ClubAdd.css';

const ClubAdd = () => {
  return (
    <div className="club-add">
      <div className="form-group">
        <label>Tên đội:</label>
        <input type="text" placeholder="Nhập tên đội" />
      </div>
      <div className="form-group">
        <label>Huấn luyện viên:</label>
        <input type="text" placeholder="Nhập tên huấn luyện viên" />
      </div>
      <div className="form-group">
        <label>Sân nhà:</label>
        <input type="text" placeholder="Nhập tên sân nhà" />
      </div>
      <div className="form-group">
        <label>Màu áo sân nhà:</label>
        <input type="text" placeholder="Nhập màu áo sân nhà" />
      </div>
      <div className="form-group">
        <label>Màu áo sân khách:</label>
        <input type="text" placeholder="Nhập màu áo sân khách" />
      </div>
      
      <div className="buttons">
        <button>Gửi</button>
      </div>
    </div>
  );
};

export default ClubAdd;
