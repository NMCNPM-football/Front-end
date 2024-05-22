import React from 'react';
import Match from './Match';
import { matchesData } from './matchesData'; // Import the data from matchesData.js
import './Match.css'; // Import the CSS file

const Schedule = () => (
  <div className="schedule">
  <h1 className='titlesche'>Vô địch Quốc gia Night Wolf 2023/24</h1>
    {matchesData.map((match, index) => (
      <Match
        key={index}
        logo1={match.logo1}
        logo2={match.logo2}
        datetime={match.datetime}
        stadium={match.stadium}
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
        scoreteam1={match.scoreteam1}
        scoreteam2={match.scoreteam2}
        attendance={match.attendance}
      />
    ))}
  </div>
);

export default Schedule;
