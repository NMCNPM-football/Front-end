import React, { useState, useEffect } from 'react';
import { teams } from './DataTeam'; // Cập nhật đường dẫn thực tế đến tệp dữ liệu của bạn
import './Team.css';
import { Link } from 'react-router-dom';

const DataTeam = () => {
  const [players, setPlayers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [team, setTeam] = useState(null);

  const getTeamById = (id) => {
    return Object.values(teams).find(team => team.idteam === parseInt(id));
  };

  useEffect(() => {
    const teamId = window.location.pathname.split('/').pop();
    const selectedTeam = getTeamById(teamId);
    if (selectedTeam) {
      setTeam(selectedTeam);
      setPlayers(selectedTeam.players);
    }
  }, []);

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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  if (!team) {
    return <div>Không tìm thấy thông tin đội</div>;
  }

  return (
    <div>
      <div className="team-header-tab">
        <img src={team.logo} alt={team.clubName} className="team-logo-tab" />
        <h1 className='clubnametab'>{team.clubName}</h1>
      </div>
      <div className='stacoach'>
        <p className='stadiumtab'>Sân Nhà: {team.stadium}</p>
        <p className='coachtab'>Huấn luyện viên: {team.coach}</p>
      </div>
      
      <table>
        <thead>
          <tr>
            <th className='titletab' onClick={() => onSort('name')}>Họ và Tên {getArrow('name')}
            </th>
            <th className='titletab' onClick={() => onSort('kit')}>Số áo {getArrow('kit')}</th>
            <th className='titletab' onClick={() => onSort('position')}>Vị trí {getArrow('position')}</th>
            <th className='titletab' onClick={() => onSort('height')}>Cao (cm) {getArrow('height')}</th>
            <th className='titletab' onClick={() => onSort('weight')}>Nặng (kg) {getArrow('weight')}</th>
            <th className='titletab' onClick={() => onSort('birthDay')}>Năm sinh {getArrow('birthDay')}</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td className='titletab'>
                <Link style={{textDecoration: 'none', color: 'black' }} to={`/player/${player.PlayerId}`}>{player.name}</Link>
              </td>
              <td className='titletab'>{player.kit}</td>
              <td className='titletab'>{player.position}</td>
              <td className='titletab'>{player.height}</td>
              <td className='titletab'>{player.weight}</td>
              <td className='titletab'>{formatDate(player.birthDay)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTeam;
