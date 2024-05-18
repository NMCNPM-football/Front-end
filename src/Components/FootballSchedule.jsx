import React, { useState } from 'react';
import './FootballSchedule.css';

const FootballSchedule = () => {
  const [activeLeague, setActiveLeague] = useState('night-wolf');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const handleLeagueClick = (league) => {
    setActiveLeague(league);
    setCurrentMatchIndex(0); // Reset to the first match when league changes
  };

  const matches = {
    'night-wolf': [
      {
        round: 'Vòng 19',
        dateTime: '17/05 18:00',
        venue: 'SVĐ Bình Dương',
        teams: [
          { name: 'BDFC', logo: 'BDFC.png' },
          { name: 'CAHN', logo: 'CAHN.png' },
        ],
        score: '4 - 1',
        broadcast: 'VTV5, FPT Play, TV360',
      },
      {
        round: 'Vòng 19',
        dateTime: '17/05 18:00',
        venue: 'SVĐ Thanh Hóa',
        teams: [
          { name: 'THFC', logo: 'THFC.png' },
          { name: 'QNFC', logo: 'QNFC.png' },
        ],
        score: '3 - 1',
        broadcast: 'FPT Play, TV360',
      },
      {
        round: 'Vòng 19',
        dateTime: '17/05 18:00',
        venue: 'SVĐ Hà Tĩnh',
        teams: [
          { name: 'HLHT', logo: 'HLHT.png' },
          { name: 'HCMC', logo: 'HCMC.png' },
        ],
        score: '2 - 1',
        broadcast: 'HTV Thể thao, FPT Play, TV360',
      },
      {
        round: 'Vòng 19',
        dateTime: '17/05 19:15',
        venue: 'SVĐ Hàng Đẫy',
        teams: [
          { name: 'HNFC', logo: 'HNFC.png' },
          { name: 'LPBHA', logo: 'LPBHA.png' },
        ],
        score: '1 - 0',
        broadcast: 'HTV1, FPT Play, TV360',
      },
      {
        round: 'Vòng 19',
        dateTime: '18/05 17:00',
        venue: 'SVĐ Vinh',
        teams: [
          { name: 'SLNA', logo: 'SLNA.png' },
          { name: 'LPBHA', logo: 'LPBHA.png' },
        ],
        score: '1 - 0',
        broadcast: 'HTV1, FPT Play, TV360',
      },
    ],
    'sao-vang': [
      {
        round: 'Vòng 19',
        dateTime: '17/05 18:00',
        venue: 'SVĐ Thanh Hóa',
        teams: [
          { name: 'THFC', logo: 'THFC.png' },
          { name: 'QNFC', logo: 'QNFC.png' },
        ],
        score: '3 - 1',
        broadcast: 'FPT Play, TV360',
      },
      // Add more matches for 'sao-vang' here
    ],
    'casper': [
      {
        round: 'Vòng 19',
        dateTime: '18/05 17:00',
        venue: 'SVĐ Vinh',
        teams: [
          { name: 'SLNA', logo: 'SLNA.png' },
          { name: 'LPBHA', logo: 'LPBHA.png' },
        ],
        score: '1 - 0',
        broadcast: 'HTV1, FPT Play, TV360',
      },
      // Add more matches for 'casper' here
    ],
  };

  const handlePrevClick = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex === 0 ? matches[activeLeague].length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex === matches[activeLeague].length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="schedule-container">
      <div className="headers">
        <div
          className={`header night-wolf ${activeLeague === 'night-wolf' ? 'active' : ''}`}
          onClick={() => handleLeagueClick('night-wolf')}
        >
          <img src="./assets/Logo_Vleague1_2023.svg.png" alt="icon" />
          <div className="title">VÔ ĐỊCH QUỐC GIA NIGHT WOLF 2023/24</div>
          {activeLeague === 'night-wolf' && <div className="triangle"></div>}
        </div>
        <div
          className={`header sao-vang ${activeLeague === 'sao-vang' ? 'active' : ''}`}
          onClick={() => handleLeagueClick('sao-vang')}
        >
          <img src="./assets/Logo_V.League_2_2023.svg.png" alt="icon" />
          <div className="title">HẠNG NHẤT QUỐC GIA BIA SAO VÀNG 2023/24</div>
          {activeLeague === 'sao-vang' && <div className="triangle"></div>}
        </div>
        <div
          className={`header casper ${activeLeague === 'casper' ? 'active' : ''}`}
          onClick={() => handleLeagueClick('casper')}
        >
          <img src="./assets/cup-quoc-gia-casper.png" alt="icon" />
          <div className="title">CÚP QUỐC GIA CASPER 2023/24</div>
          {activeLeague === 'casper' && <div className="triangle"></div>}
        </div>
      </div>

      <div className="matches">
        <button className="arrow left-arrow" onClick={handlePrevClick}>‹</button>
        <div className="match">
          <div className="round">{matches[activeLeague][currentMatchIndex].round}</div>
          <div className="date-time">{matches[activeLeague][currentMatchIndex].dateTime}</div>
          <div className="venue">{matches[activeLeague][currentMatchIndex].venue}</div>
          <div className="teams">
            <div className="team">
              <div className="team-name">{matches[activeLeague][currentMatchIndex].teams[0].name}</div>
              <img src={matches[activeLeague][currentMatchIndex].teams[0].logo} alt={matches[activeLeague][currentMatchIndex].teams[0].name} className="team-logo" />
            </div>
            <div className="score">{matches[activeLeague][currentMatchIndex].score}</div>
            <div className="team">
              <div className="team-name">{matches[activeLeague][currentMatchIndex].teams[1].name}</div>
              <img src={matches[activeLeague][currentMatchIndex].teams[1].logo} alt={matches[activeLeague][currentMatchIndex].teams[1].name} className="team-logo" />
            </div>
          </div>
          <div className="broadcast">{matches[activeLeague][currentMatchIndex].broadcast}</div>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>›</button>
      </div>
    </div>
  );
}

export default FootballSchedule;
