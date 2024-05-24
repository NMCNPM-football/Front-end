import React, { useState } from 'react';

const MatchScheduler = () => {
  const [matches, setMatches] = useState([]);
  const [newMatch, setNewMatch] = useState({
    team1: '',
    team2: '',
    venue: '',
    round: '',
    time: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMatch({ ...newMatch, [name]: value });
  };

  const addMatch = () => {
    setMatches([...matches, newMatch]);
    setNewMatch({
      team1: '',
      team2: '',
      venue: '',
      round: '',
      time: '',
    });
  };

  return (
    <div>
      <h2>Match Scheduler</h2>
      <div>
        <input
          type="text"
          name="team1"
          placeholder="Team 1"
          value={newMatch.team1}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="team2"
          placeholder="Team 2"
          value={newMatch.team2}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={newMatch.venue}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="round"
          placeholder="Round"
          value={newMatch.round}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="time"
          placeholder="Time"
          value={newMatch.time}
          onChange={handleInputChange}
        />
        <button onClick={addMatch}>Add Match</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Venue</th>
            <th>Round</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.team1}</td>
              <td>{match.team2}</td>
              <td>{match.venue}</td>
              <td>{match.round}</td>
              <td>{match.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchScheduler;
