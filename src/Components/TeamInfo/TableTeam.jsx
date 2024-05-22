import { teams } from './DataTeam'; // update with the actual path to your data file
import './Team.css'
import React, { useState } from 'react';
const DataTeam = () => {
  const team = teams.HoangAnhGiaLai;

  const [players, setPlayers] = useState(team.players);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const onSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sortedPlayers = [...players].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setPlayers(sortedPlayers);
    setSortConfig({ key, direction });
  };

  const getArrow = (key) => {
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'ascending') {
        return '↑';
      }
      if (sortConfig.direction === 'descending') {
        return '↓';
      }
    }
    return '';
  };

  return (
    <div>
      <div className="team-header-tab">
        <img src={team.logo} alt={team.clubName} className="team-logo" />
        <h1 className='clubnametab'>{team.clubName}</h1>
      </div>
      <div className='stacoach'>
        <p className='stadiumtab'>Sân Nhà: {team.stadium}</p>
        <p className='coachtab'>Huấn luyện viên: {team.coach}</p>
      </div>
      
      <table>
        <thead>
          <tr>
            <th onClick={() => onSort('name')}>Họ và Tên {getArrow('name')}</th>
            <th onClick={() => onSort('kit')}>Số áo {getArrow('kit')}</th>
            <th onClick={() => onSort('position')}>Vị trí {getArrow('position')}</th>
            <th onClick={() => onSort('height')}>Cao (cm) {getArrow('height')}</th>
            <th onClick={() => onSort('weight')}>Nặng (kg) {getArrow('weight')}</th>
            <th onClick={() => onSort('birthDay')}>Năm sinh {getArrow('birthDay')}</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.kit}</td>
              <td>{player.position}</td>
              <td>{player.height}</td>
              <td>{player.weight}</td>
              <td>{formatDate(player.birthDay)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('vi-VN', options);
};

export default DataTeam;
