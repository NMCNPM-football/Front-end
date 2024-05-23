// MatchInfo.jsx
import React from 'react';
import PropTypes from 'prop-types';

const MatchInfo = ({ match }) => {
  if (!match) return null;

  return (
    <div className="match-info">
      <h1 className="titlematch">{match.homeTeam.name} vs {match.awayTeam.name}</h1>
      <div className="timewhere">
        <div>{match.time}</div>
        <div>{match.stadium}</div>
        <div>{match.capacity}</div>
      </div>
      <div className="scoreboard">
        <div className="team-info">
          <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="team-logo" />
          <div className="team-name">{match.homeTeam.name}</div>
        </div>
        <div className="scoreteam">
          <span>{match.homeTeam.goals}</span>
          <span>-</span>
          <span>{match.awayTeam.goals}</span>
        </div>
        <div className="team-info">
          <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="team-logo" />
          <div className="team-name">{match.awayTeam.name}</div>
        </div>
      </div>
    </div>
  );
};

MatchInfo.propTypes = {
  match: PropTypes.shape({
    homeTeam: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired
    }).isRequired,
    awayTeam: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired
    }).isRequired,
    time: PropTypes.string.isRequired,
    stadium: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired
  }).isRequired
};

export default MatchInfo;