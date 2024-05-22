import React from 'react';
import './Ranking.css';

const Ranking = () => {
  const rankings = [
    { position: 1, team: 'TXND', logo: 'https://vpf.vn/wp-content/uploads/2018/10/Nam-Dinh-150x150.jpg', matches: 19, hs: 14, points: 39 },
    { position: 2, team: 'BDFC', logo:'https://vpf.vn/wp-content/uploads/2018/10/binh-duong-2021-150x150.png', matches: 20, hs: 4, points: 33 },
    { position: 3, team: 'MQBD', logo:'https://vpf.vn/wp-content/uploads/2018/10/Binh-Dinh-150x150.png', matches: 19, hs: 10, points: 31 },
    { position: 4, team: 'CAHN', logo:'https://vpf.vn/wp-content/uploads/2018/10/cong-an-ha-noi-fc-150x150.png', matches: 20, hs: 6, points: 31 },
    { position: 5, team: 'THFC', logo:'https://vpf.vn/wp-content/uploads/2018/10/HNFC-6-sao-150x150.png', matches: 20, hs: 3, points: 30 },
    { position: 6, team: 'HNFC', logo:'https://vpf.vn/wp-content/uploads/2018/10/Logo-CLB-Dong-A-Thanh-Hoa_chuan-150x150.png', matches: 20, hs: 1, points: 28 },
    { position: 7, team: 'HPFC', logo:'https://vpf.vn/wp-content/uploads/2018/10/haiphongfc-150x150.jpg', matches: 19, hs: 5, points: 26 },
    { position: 8, team: 'QNFC', logo:'https://vpf.vn/wp-content/uploads/2018/10/Quang-Nam-150x150.jpg', matches: 20, hs: 0, points: 26 },
    { position: 9, team: 'HCMC', logo:'https://vpf.vn/wp-content/uploads/2018/10/HCM-FC-2023-150x150.png', matches: 20, hs: -2, points: 26 },
    { position: 10, team: 'LPBHA', logo:'https://vpf.vn/wp-content/uploads/2018/10/Logo-HAGL-150x150.jpg', matches: 20, hs: -5, points: 25 },
    { position: 11, team: 'TCVT', logo:'https://vpf.vn/wp-content/uploads/2018/10/Logo-The-Cong-Viettel-150x150.jpg', matches: 20, hs: -6, points: 24 },
    { position: 12, team: 'HLHT', logo:'https://vpf.vn/wp-content/uploads/2018/10/Logo-Ha-Tinh-update-150x150.png', matches: 20, hs: -6, points: 24 },
    { position: 13, team: 'SLNA', logo:'https://vpf.vn/wp-content/uploads/2018/10/slna-150x150.png', matches: 19, hs: -6, points: 19 },
    { position: 14, team: 'KHFC', logo:'https://vpf.vn/wp-content/uploads/2018/12/Khanh-Hoa-FC-150x150.png', matches: 19, hs: -18, points: 10 },
  ];

  return (
    <aside className="ranking">
      <h2>Bảng xếp hạng</h2>
      <div className="ranking-header">
        <button className="ranking-button">V.League</button>
        <button className="ranking-button">Hạng nhất</button>
      </div>
      <div className="ranking-table">
        <div className="ranking-header-row">
          <span>VT</span>
          <span>Đội bóng</span>
          <span>Trận</span>
          <span>HS</span>
          <span>Điểm</span>
        </div>
        {rankings.map((team) => (
          <div key={team.position} className="ranking-row">
            <span>{team.position}</span>
            <div className="team-info">
              <img src={team.logo} alt={team.team} className="team-logo" />
              <span>{team.team}</span>
            </div>
            <span>{team.matches}</span>
            <span>{team.hs}</span>
            <span>{team.points}</span>
          </div>
        ))}
      </div>
      <button className="view-more">Xem chi tiết ➔</button>
    </aside>
  );
};

export default Ranking;
