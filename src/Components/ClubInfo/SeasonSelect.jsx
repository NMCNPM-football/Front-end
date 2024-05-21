import React from 'react';

const SeasonSelector = ({ selectedSeason, onSeasonChange }) => {
  const seasons = ["2023-2024","2022-2023",];
  return (
    <div className="season-selector-container">
      <select value={selectedSeason} onChange={(e) => onSeasonChange(e.target.value)}>
        {seasons.map((season, index) => (
          <option key={index} value={season}>
            {season}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SeasonSelector;
