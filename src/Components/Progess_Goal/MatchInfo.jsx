import React from 'react';
import PropTypes from 'prop-types';

const MatchInfo = ({ match }) => {
  if (!match) return null;

  return (
    <div className="match-info">
      <h1 className="titlematch">{match.teamOne.name} vs {match.teamTwo.name}</h1>
      <div className="timewhere">
        <div>{match.date}</div>
        <div>{match.venue}</div>
      </div>
      <div className="scoreboard">
        <div className="team-info">
          <img src={match.teamOne.logo} alt={match.teamOne.name} className="team-logo" />
          <div className="team-name">{match.teamOne.name}</div>
        </div>
        <div className="scoreteam">
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

MatchInfo.propTypes = {
  match: PropTypes.shape({
    teamOne: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired
    }).isRequired,
    teamTwo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired
  }).isRequired
};

export default MatchInfo;
