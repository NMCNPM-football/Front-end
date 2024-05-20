import React from 'react';

const MatchInfo = ({ match }) => {
  if (!match) return null;

  return (
    <div className="match-info">
    <h1 className='titlematch'>{match.teamOne.name} vs {match.teamTwo.name}</h1>
      <div className="header">
        <div>{match.date}</div>
        <div>{match.venue}</div>
      </div>
      <div className="scoreboard">
        <div className="team-info">
          <img src={match.teamOne.logo} alt={match.teamOne.name} className="team-logo" />
          <div className="team-name">{match.teamOne.name}</div>
        </div>
        <div className="score">
          <span>{match.teamOne.goals}</span>
          <span>-</span>
          <span>{match.teamTwo.goals}</span>
        </div>
        <div className="team-info">
          <img src={match.teamTwo.logo} alt={match.teamTwo.name} className="team-logo" />
          <div className="team-name">{match.teamTwo.name}</div>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
