import React, { useState } from 'react';
import './Players.css';
import { DataPlayers } from './DataPlayers';
import { useParams } from 'react-router-dom';

const Player = () => {
  const { playerId } = useParams();
  const [activeTab, setActiveTab] = useState('player');
  
  const player = DataPlayers.data.find(p => p.PlayerId === parseInt(playerId, 10));

  if (!player) {
    return <div>Player not found</div>;
  }

  const playerInfo = (
    <div className="player-info">
      <img src="https://vpf.vn/wp-content/uploads/2018/12/BDFC_3_QueNgocHai_VN001612-310x386.jpg" alt="Player" />
      <div>
        <p>Họ và tên: {player.name}</p>
        <p>Tên cuối: {player.name.split(' ').pop()}</p>
        <p>Cao (cm): {player.height}</p>
        <p>Nặng (kg): {player.weight}</p>
        <p>Vị trí: {player.position}</p>
        <p>Năm sinh: {new Date(player.birthDay).toLocaleDateString()}</p>
        <p>Số áo: {player.kit}</p>
        <p>Quốc tịch: {player.nationality}</p>
        <p>Đội: {player.clubName}</p>
      </div>
    </div>
  );

  const statistics = (
    <div className="statistics">
      <table className="statistics-table">
        <thead>
          <tr>
            <th></th>
            <th><img src="https://vpf.vn/wp-content/plugins/joomsport-sports-league-results-management/sportleague/assets/images/matches_played.png" alt="Số trận đã chơi" title="Số trận đã chơi" /></th>
            <th><img src="https://vpf.vn/wp-content/plugins/joomsport-sports-league-results-management/sportleague/assets/images/squad.png" alt="Đội hình trận đấu" title="Đội hình trận đấu" /></th>
            <th><img src="https://vpf.vn/wp-content/plugins/joomsport-sports-league-results-management/sportleague/assets/images/stopwatch.png" alt="Số phút đã thi đấu" title="Số phút đã thi đấu" /></th>
            <th><img src="https://vpf.vn/wp-content/plugins/joomsport-sports-league-results-management/sportleague/assets/images/in-new.png" alt="Thay cầu thủ vào" title="Thay cầu thủ vào" /></th>
            <th><img src="https://vpf.vn/wp-content/plugins/joomsport-sports-league-results-management/sportleague/assets/images/out-new.png" alt="Thay cầu thủ ra" title="Thay cầu thủ ra" /></th>
            <th><img src="https://vpf.vn/wp-content/uploads/2018/12/goal.png" alt="Bàn thắng" title="Bàn thắng" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img style={{ height: '40px', width: '40px' }} src="https://vpf.vn/wp-content/uploads/2018/10/binh-duong-2021-150x150.png" alt="Becamex Bình Dương" title="Becamex Bình Dương" /></td>
            <td>10</td>
            <td>7</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <h3>Trận đấu</h3>
      <ul className="matches-list">
        <li><span>24-11-2023 18:00</span><div>Becamex Bình Dương <img src="path_to_logo.jpg" alt="Logo" /> 0 - 1 <img src="path_to_opponent_logo.jpg" alt="Opponent Logo" /> Hà Nội</div></li>
        <li><span>03-12-2023 17:00</span><div>LPBank Hoàng Anh Gia Lai <img src="path_to_logo.jpg" alt="Logo" /> 1 - 1 <img src="path_to_opponent_logo.jpg" alt="Opponent Logo" /> Becamex Bình Dương</div></li>
        <li><span>10-12-2023 18:00</span><div>Khánh Hòa <img src="path_to_logo.jpg" alt="Logo" /> 0 - 2 <img src="path_to_opponent_logo.jpg" alt="Opponent Logo" /> Becamex Bình Dương</div></li>
        <li><span>17-02-2024 18:00</span><div>Becamex Bình Dương <img src="path_to_logo.jpg" alt="Logo" /> 1 - 1 <img src="path_to_opponent_logo.jpg" alt="Opponent Logo" /> Quảng Nam</div></li>
        <li><span>31-03-2024 17:00</span><div>Hồng Lĩnh Hà Tĩnh <img src="path_to_logo.jpg" alt="Logo" /> 2 - 0 <img src="path_to_opponent_logo.jpg" alt="Opponent Logo" /> Becamex Bình Dương</div></li>
        <li><span>04-04-2024 18:00</span><div>Becamex Bình Dương <img src="path_to_logo.jpg" alt="Logo" /> 0 - 0 <img src="path_to_opponent_logo.jpg" alt="Opponent Logo" /> Thể Công – Viettel</div></li>
        {/* Add other matches similarly */}
      </ul>
    </div>
  );

  return (
    <div className="player-container">
      <h1>{player.name}</h1>
      <div className="tab-buttons">
        <button 
          onClick={() => setActiveTab('player')} 
          className={activeTab === 'player' ? 'active' : ''}
        >
          Cầu thủ
        </button>
        <button 
          onClick={() => setActiveTab('statistics')} 
          className={activeTab === 'statistics' ? 'active' : ''}
        >
          Thống kê
        </button>
      </div>
      {activeTab === 'player' ? playerInfo : statistics}
    </div>
  );
};

export default Player;
