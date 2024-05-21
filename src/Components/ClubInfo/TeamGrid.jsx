// src/Components/ClubInfo/TeamGrid.js

import React, { useState, useEffect } from 'react';
import { Clubdata2022, Clubdata2023 } from './Clubdata';
import './TeamGrid.css';
import SeasonSelector from './SeasonSelect';

const TeamGrid = () => {
  const [selectedSeason, setSelectedSeason] = useState("2023-2024");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    switch (selectedSeason) {
      case "2022-2023":
        setTeams(Clubdata2022);
        break;
      case "2023-2024":
        setTeams(Clubdata2023);
        break;
      default:
        setTeams([]);
    }
  }, [selectedSeason]);

  return (
    <div>
      <h1 className='title-teaminfo'>Vô địch quốc gia</h1>
      <SeasonSelector selectedSeason={selectedSeason} onSeasonChange={setSelectedSeason} />
      <div className="team-grid">
        {teams.map((team, index) => (
          <div key={index} className="team-card">
            <img src={team.image} alt={team.nameClub} />
            <p>{team.nameClub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
