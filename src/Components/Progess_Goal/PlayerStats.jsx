import React from 'react';
import PropTypes from 'prop-types';

const goalTypes = {
  LBT01: 'Ghi bàn trực tiếp',
  LBT02: 'Đá phạt',
  LBT03: 'Phản lưới'
};

const PlayerStats = ({ match }) => {
  if (!match) return null;

  return (
    <div className="player-stats">
      <div className="team-stats">
        <div className="team-name1">{match.teamOne.name}</div>
        <ul>
          {match.teamOne.players.map((player, index) => (
            <li key={index}>
              <div className="player-info1">
                [{player.number}] {player.name}
              </div>
              <div className="goal-time1">{player.goalTime}&apos;</div>
              <div className="goal-type1">{goalTypes[player.goalType]}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="team-stats">
        <div className="team-name2">{match.teamTwo.name}</div>
        <ul>
          {match.teamTwo.players.map((player, index) => (
            <li key={index}>
              <div className="player-info2">
                [{player.number}] {player.name}
              </div>
              <div className="goal-time2">{player.goalTime}&apos;</div>
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
    teamOne: PropTypes.shape({
      name: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(
        PropTypes.shape({
          number: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          goalTime: PropTypes.number.isRequired,
          goalType: PropTypes.oneOf(Object.keys(goalTypes)).isRequired
        })
      ).isRequired
    }).isRequired,
    teamTwo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(
        PropTypes.shape({
          number: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          goalTime: PropTypes.number.isRequired,
          goalType: PropTypes.oneOf(Object.keys(goalTypes)).isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export default PlayerStats