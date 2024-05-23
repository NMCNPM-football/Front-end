import React, { useState } from 'react';
import Match from './Match';
import { matchesData } from './matchesData'; // Import the data from matchesData.js
import TurnSelection from './TurnSelect'; // Import TurnSelection component
import SeasonSelection from './SeasonSelection'; // Import SeasonSelection component
import './Match.css'; // Import the CSS file

const Schedule = () => {
  const [selectedSeason, setSelectedSeason] = useState(matchesData[0].season);
  const [selectedTurn, setSelectedTurn] = useState('all');

  // Extract unique seasons and turns from matchesData
  const seasons = [...new Set(matchesData.map(match => match.season))];
  const turns = [...new Set(matchesData.filter(match => match.season === selectedSeason).map(match => match.turn))];

  // Filter matches based on selected season and turn
  const filteredMatches = matchesData.filter(match => 
    match.season === selectedSeason && (selectedTurn === 'all' || match.turn === selectedTurn)
  );

  return (
    <div className="schedule">
      <h1 className='titlesche'>Vô địch Quốc gia Night Wolf {selectedSeason === '2023' ? '2023-2024' : '2022-2023'}</h1>
      <div className="selections-container">
        <TurnSelection
          turns={turns}
          selectedTurn={selectedTurn}
          onTurnChange={setSelectedTurn}
        />
        <SeasonSelection
          seasons={seasons}
          selectedSeason={selectedSeason}
          onSeasonChange={setSelectedSeason}
        />
      </div>
      {filteredMatches.map((match, index) => (
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
          id={match.id}
        />
      ))}
    </div>
  );
};

export default Schedule;
