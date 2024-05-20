import React, { useState } from 'react';
import './FootballSchedule.css';

const FootballSchedule = () => {
  const [activeLeague, setActiveLeague] = useState('night-wolf');
  const [startIndex, setStartIndex] = useState(0);

  const handleLeagueClick = (league) => {
    setActiveLeague(league);
    setStartIndex(0); // Reset to the first group of matches when league changes
  };

  const matches = {
    'night-wolf': [
      {
        round: 'Vòng 19',
        dateTime: '17/05 18:00',
        venue: 'SVĐ Bình Dương',
        teams: [
          { name: 'BDFC', logo: './assets/becamexbinhduong.png' },
          { name: 'CAHN', logo: './assets/hanoi.png' },
        ],
        score: '4 - 1',
        broadcast: 'VTV5, FPT Play, TV360',
      },
      {
        round: 'Vòng 19',
        dateTime: '17/05 18:00',
        venue: 'SVĐ Thanh Hóa',
        teams: [
          { name: 'THFC', logo: './assets/Dongathanhhoa.png' },
          { name: 'QNFC', logo: './assets/quangnam.png' },
        ],
        score: '3 - 1',
        broadcast: 'FPT Play, TV360',
      },
      {
        round: 'Vòng 19',
        dateTime: '17/05 18:00',
        venue: 'SVĐ Hà Tĩnh',
        teams: [
          { name: 'HLHT', logo: './assets/honglinhhatinh.png' },
          { name: 'HCMC', logo: './assets/tphcm.png' },
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
    setStartIndex((prevIndex) => (prevIndex === 0 ? matches[activeLeague].length - 3 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 3 >= matches[activeLeague].length ? 0 : prevIndex + 1));
  };

  const displayedMatches = matches[activeLeague].slice(startIndex, startIndex + 3);

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
        {displayedMatches.map((match, index) => (
          <div key={index} className="match">
            <div className="round">{match.round}</div>
            <div className="date-time">{match.dateTime}</div>
            <div className="venue">{match.venue}</div>
            <div className="teams">
              <div className="team">
                <div className="team-name">{match.teams[0].name}</div>
                <img src={match.teams[0].logo} alt={match.teams[0].name} className="team-logo" />
              </div>
              <div className="score">{match.score}</div>
              <div className="team">
                <div className="team-name">{match.teams[1].name}</div>
                <img src={match.teams[1].logo} alt={match.teams[1].name} className="team-logo" />
              </div>
            </div>
            <div className="broadcast">{match.broadcast}</div>
          </div>
        ))}
        <button className="arrow right-arrow" onClick={handleNextClick}>›</button>
      </div>
    </div>
  );
}

export default FootballSchedule;