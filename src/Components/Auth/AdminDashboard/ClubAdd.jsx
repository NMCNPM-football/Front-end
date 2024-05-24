import React, { useState } from 'react';
import './ClubAdd.css';

const ClubAdd = () => {
  const [players, setPlayers] = useState([{ name: '', number: '', position: '', birthdate: '', height: '', weight: '', nationality: '', playerType: '', notes: '' }]);

  const handleInputChange = (index, event) => {
    const values = [...players];
    values[index][event.target.name] = event.target.value;
    setPlayers(values);
  };

  const handleAddPlayer = () => {
    setPlayers([...players, { name: '', number: '', position: '', birthdate: '', height: '', weight: '', nationality: '', playerType: '', notes: '' }]);
  };

  const handleRemovePlayer = index => {
    const values = [...players];
    values.splice(index, 1);
    setPlayers(values);
  };

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
      
      <table className="player-table">
        <thead>
          <tr>
            <th>Tên cầu thủ</th>
            <th>Số áo</th>
            <th>Vị trí</th>
            <th>Ngày sinh</th>
            <th>Chiều cao (cm)</th>
            <th>Cân nặng (kg)</th>
            <th>Quốc tịch</th>
            <th>Loại cầu thủ</th>
            <th>Ghi chú</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td><input type="text" name="name" value={player.name} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="text" name="number" value={player.number} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="text" name="position" value={player.position} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="date" name="birthdate" value={player.birthdate} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="text" name="height" value={player.height} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="text" name="weight" value={player.weight} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="text" name="nationality" value={player.nationality} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="text" name="playerType" value={player.playerType} onChange={event => handleInputChange(index, event)} /></td>
              <td><input type="text" name="notes" value={player.notes} onChange={event => handleInputChange(index, event)} /></td>
              <td><button onClick={() => handleRemovePlayer(index)}>Xóa cầu thủ</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button onClick={handleAddPlayer}>Thêm cầu thủ</button>
        <button>Gửi</button>
      </div>
    </div>
  );
};

export default ClubAdd;
