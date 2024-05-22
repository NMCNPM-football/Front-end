import { teams } from './DataTeam'; // update with the actual path to your data file
import './Team.css'
import React, { useState } from 'react';
import {dataHAGL, subdataHAGL} from './DataTeam';
import './Team.css'; // Đảm bảo bạn tạo file CSS tương ứng

const TitleTable = () => {
    const teamInfo = subdataHAGL[0]; // Accessing the first (and only) element of the subdataHAGL array

    return (
        <header className="Title-TI">
            <div className="InfoAround">
                <img src={teamInfo.logo} alt="" className="team-logo-TI" />
                <h1>{teamInfo.clubName}</h1>
            </div>
            <div className="InfoHLV">
                <p>Sân Nhà: {teamInfo.Stadium}</p>
                <p>Huấn luyện viên: {teamInfo.HLV}</p>
            </div>
        </header>
    );
};

const TeamTable = () => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (key) => {
        if (key === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(key);
            setSortOrder('asc');
        }
    };

    const sortedData = [...dataHAGL].sort((a, b) => {
        if (sortBy === null) return 0;
        if (sortOrder === 'asc') {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
    });

    const getClassName = (key) => {
        if (key === sortBy) {
            return sortOrder === 'asc' ? 'sorted-asc' : 'sorted-desc';
        }
        return '';
    };

    const getArrowIcon = (key) => {
        if (key === sortBy) {
            return sortOrder === 'asc' ? '🔼' : '🔽';
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
