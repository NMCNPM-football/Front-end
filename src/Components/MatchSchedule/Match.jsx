import React from 'react';
import PropTypes from 'prop-types';
import './Match.css'; // Import the CSS file

const Match = ({ 
  logo1, 
  logo2, 
  datetime, 
  stadium, 
  homeTeam, 
  awayTeam, 
  scoreteam1, 
  scoreteam2, 
  attendance 
}) => (
  <div className="match-schedule">
    <div className="match-info">
      <div className="date-time">{datetime}</div>
      <div className="stadium">{stadium}</div>
    </div>
    <div className="teams-schedule">
      <div className="team-schedule1">
        <img src={logo1} alt={`${homeTeam} Logo`} className="team-logo-schedule1" />
        <span className="home-team">{homeTeam}</span>
      </div>
      <div className="score-schedule">{scoreteam1} - {scoreteam2}</div>
      <div className="team-schedule2">
        <img src={logo2} alt={`${awayTeam} Logo`} className="team-logo-schedule2" />
        <span className="away-team">{awayTeam}</span>
      </div>
    </div>
    <div className="attendance">{attendance}</div>
  </div>
);

Match.propTypes = {
  logo1: PropTypes.string.isRequired,
  logo2: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  stadium: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  scoreteam1: PropTypes.number.isRequired,
  scoreteam2: PropTypes.number.isRequired,
  channels: PropTypes.arrayOf(PropTypes.string).isRequired,
  attendance: PropTypes.number.isRequired,
};

export default Match;
