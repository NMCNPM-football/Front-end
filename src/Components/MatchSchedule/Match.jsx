import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  attendance, 
  id 
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
      <div className="score-schedule">
        <Link to={`/match/${id}`}>{scoreteam1} - {scoreteam2}</Link>
      </div>
      <div className="team-schedule2">
        <img src={logo2} alt={`${awayTeam} Logo`} className="team-logo-schedule2" />
        <span className="away-team">{awayTeam}</span>
      </div>
    </div>
    <div className="attendance">Attendance: {attendance}</div>
  </div>
);

Match.propTypes = {
  logo1: PropTypes.string.isRequired,
  logo2: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  stadium: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  scoreteam1: PropTypes.string.isRequired, 
  scoreteam2: PropTypes.string.isRequired, 
  channels: PropTypes.arrayOf(PropTypes.string), // Not required, default value will handle it
  attendance: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired 
};

export default Match;
