// PlayerStats.jsx
import React from 'react';
import PropTypes from 'prop-types';

const goalTypes = {
  LBT01: 'Ghi bàn trực tiếp',
  LBT02: 'Đá phạt',
  LBT03: 'Phản lưới'
};

const cardTypes = {
    LBT01: 'Thẻ vàng',
    LBT02: 'Thẻ đỏ'
};


const PlayerStats = ({ match }) => {
  if (!match) return null;

  return (
    <div className="player-stats">
      <div className="team-stats">
        <div className="team-name1">{match.homeTeam.name}</div>
        <ul>
          {match.homeTeam.players.map((player, index) => (
            <li key={index}>
              <div className="goal-time1">{player.timeInMatchGoal}&apos;</div>
              <div className="goal-type1">{goalTypes[player.goalType]}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="team-stats">
        <div className="team-name2">{match.awayTeam.name}</div>
        <ul>
          {match.awayTeam.players.map((player, index) => (
            <li key={index}>
              <div className="goal-time2">{player.timeInMatchGoal}&apos;</div>
              <div className="goal-type2">{goalTypes[player.goalType]}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PlayerStats.propTypes = {
  match: PropTypes.shape({
    homeTeam: PropTypes.shape({
      name: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(
        PropTypes.shape({
          timeInMatchGoal: PropTypes.string,
          goalType: PropTypes.oneOf(Object.keys(goalTypes))
        })
      ).isRequired
    }).isRequired,
    awayTeam: PropTypes.shape({
      name: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(
        PropTypes.shape({
          timeInMatchGoal: PropTypes.string,
          goalType: PropTypes.oneOf(Object.keys(goalTypes))
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export default PlayerStats;