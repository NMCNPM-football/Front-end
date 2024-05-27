import React, { useState, useEffect } from 'react';

const positions = ['GK', 'LB', 'CB', 'CB', 'RB', 'LM', 'CM', 'CM', 'RM', 'ST', 'ST'];

const Lineup = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [players, setPlayers] = useState([]);
  const [lineup, setLineup] = useState(Array(11).fill(null));

  useEffect(() => {
    fetch('http://localhost:8888/teams')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeams(data);
        } else {
          console.error('Teams response is not an array:', data);
          setTeams([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching teams:', error);
        setTeams([]); // Ensure teams is an array even if the fetch fails
      });
  }, []);

  useEffect(() => {
    if (selectedTeam) {
      fetch(`http://localhost:8888/teams/${selectedTeam}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setPlayers(data);
          } else {
            console.error('Players response is not an array:', data);
            setPlayers([]);
          }
        })
        .catch((error) => {
          console.error('Error fetching players:', error);
          setPlayers([]); // Ensure players is an array even if the fetch fails
        });
    } else {
      setPlayers([]);
    }
  }, [selectedTeam]);

  const handleDrop = (index, player) => {
    const newLineup = [...lineup];
    newLineup[index] = player;
    setLineup(newLineup);
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8888/lineup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teamName: selectedTeam, lineup }),
    });
    if (response.ok) {
      alert('Lineup saved successfully!');
    } else {
      alert('Error saving lineup');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="p-2 border"
        >
          <option value="">Select a team</option>
          {Array.isArray(teams) && teams.length > 0 ? (
            teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))
          ) : (
            <option disabled>No teams available</option>
          )}
        </select>
      </div>

      <div className="flex">
        <div className="w-1/4 p-4 border">
          {Array.isArray(players) && players.length > 0 ? (
            players.map((player, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text', player)}
                className="border p-2 m-2 bg-gray-200 cursor-pointer"
              >
                {player}
              </div>
            ))
          ) : (
            <div>No players available</div>
          )}
        </div>

        <div className="w-3/4 p-4">
          <div className="grid grid-cols-4 gap-4">
            {positions.map((pos, index) => (
              <div
                key={index}
                onDrop={(e) => {
                  e.preventDefault();
                  handleDrop(index, e.dataTransfer.getData('text'));
                }}
                onDragOver={(e) => e.preventDefault()}
                className="border p-4 text-center"
              >
                {lineup[index] || pos}
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 mt-4"
          >
            Save Lineup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lineup;
