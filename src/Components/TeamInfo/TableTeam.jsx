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
            <TitleTable />
            <table className="team-table">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('name')} className={getClassName('name')}>
                            Họ và Tên {getArrowIcon('name')}
                        </th>
                        <th style={{width : '60px' }} onClick={() => handleSort('position')} className={getClassName('position')}>
                            Vị trí {getArrowIcon('position') }
                        </th>
                        <th onClick={() => handleSort('height')} className={getClassName('height')}>
                            Cao (cm) {getArrowIcon('height')}
                        </th>
                        <th onClick={() => handleSort('weight')} className={getClassName('weight')}>
                            Nặng (kg) {getArrowIcon('weight')}
                        </th>
                        <th onClick={() => handleSort('birthDay')} className={getClassName('birthDay')}>
                            Năm sinh {getArrowIcon('birthDay')}
                        </th>
                        <th>Bản Thắng</th>
                        <th>Penalty</th>
                        <th style={{width : '50px' }}>OG</th>
                        <th>Thẻ Vàng</th>
                        <th>Thẻ Đỏ</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>{player.height}</td>
                            <td>{player.weight}</td>
                            <td>{new Date(player.birthDay).toLocaleDateString()}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamTable;
