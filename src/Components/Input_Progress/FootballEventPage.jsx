import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import './IP.css';

const FootballEventPage = () => {
  const [selectedSeason, setSelectedSeason] = useState('2023-2024');
  const [selectedRound, setSelectedRound] = useState('');
  const [selectedMatch, setSelectedMatch] = useState('');
  const [events, setEvents] = useState([]);
  const [matches, setMatches] = useState([]);
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [error, setError] = useState(null);
  const [eventType, setEventType] = useState('Trực tiếp');
  const [playerName, setPlayerName] = useState('');
  const [time, setTime] = useState('');
  const [maxTime, setMaxTime] = useState(90);
  const [updatedMaxTime, setUpdatedMaxTime] = useState(90);
  const [isGoal, setIsGoal] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingEventId, setEditingEventId] = useState(null);
  const [goalEvents, setGoalEvents] = useState([]);
  const [cardEvents, setCardEvents] = useState([]);

  const [goalTypeMappings, setGoalTypeMappings] = useState({
    'Trực tiếp': 'LBT01',
    'Đá Phạt': 'LBT02',
    'Phản Lưới': 'LBT03'
  });

  const [cardTypeMappings, setCardTypeMappings] = useState({
    'Thẻ Đỏ': 'LT02',
    'Thẻ Vàng': 'LT01'
  });

  const accessToken = useSelector((state) => state.user.accessToken); // Get access token from Redux

  useEffect(() => {
    if (selectedRound) {
      axios.get(`http://localhost:8888/match/result_score/${selectedRound}`, {
        headers: {
          Authorization: `Bearer ${accessToken}` // Add access token to headers
        }
      })
        .then(response => {
          setMatches(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching matches:', error);
          setError('Error fetching matches. Please try again later.');
        });
    }
  }, [selectedRound, selectedSeason, accessToken]);

  const fetchGoalEvents = useCallback(() => {
    axios.get(`http://localhost:8888/match/progress_score/${selectedMatch}`, {
      headers: {
        Authorization: `Bearer ${accessToken}` // Add access token to headers
      }
    })
      .then(response => {
        console.log('Goal Events:', response.data.data);
        setGoalEvents(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching goal events:', error);
        setError('Error fetching goal events. Please try again later.');
      });
  }, [selectedMatch, accessToken]);

  const fetchCardEvents = useCallback(() => {
    axios.get(`http://localhost:8888/match/progress_card/${selectedMatch}`, {
      headers: {
        Authorization: `Bearer ${accessToken}` // Add access token to headers
      }
    })
      .then(response => {
        console.log('Card Events:', response.data.data);
        setCardEvents(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching card events:', error);
        setError('Error fetching card events. Please try again later.');
      });
  }, [selectedMatch, accessToken]);

  const fetchEvents = useCallback(() => {
    if (isGoal) {
      fetchGoalEvents();
    } else {
      fetchCardEvents();
    }
  }, [isGoal, fetchGoalEvents, fetchCardEvents]);

  useEffect(() => {
    if (selectedMatch) {
      const match = matches.find(match => match.matchId === selectedMatch);
      if (match) {
        setHomeTeam(match.homeTeamFullName);
        setAwayTeam(match.awayTeamFullName);
        setSelectedTeam(match.homeTeamFullName);
        fetchEvents();
      }
    }
  }, [selectedMatch, matches, fetchEvents]);

  const handleUpdateMaxTime = () => {
    if (updatedMaxTime <= 0) {
      setError('Max time must be greater than 0.');
      return;
    }
    setMaxTime(parseInt(updatedMaxTime));
    setUpdatedMaxTime('');
  };

  const handleAddEvent = () => {
    if (!playerName || !selectedRound || !selectedMatch || !selectedTeam || !eventType || time <= 0 || time > maxTime) {
      setError('Please fill in all required fields.');
      return;
    }

    const newEvent = {
      timeInMatch: time,
      clubName: selectedTeam,
      playerName: playerName,
      matchId: selectedMatch,
    };

    if (isGoal && eventType !== 'Select Event Type') {
      newEvent.goalType = goalTypeMappings[eventType];
      axios.post('http://localhost:8888/match/progress_score', newEvent, {
        headers: {
          Authorization: `Bearer ${accessToken}` // Add access token to headers
        }
      })
        .then(response => {
          console.log('Goal event added successfully:', response.data);
          fetchGoalEvents();
        })
        .catch(error => {
          console.error('Error adding goal event:', error);
          setError('Error adding goal event. Please try again later.');
        });
    } else if (!isGoal && eventType !== 'Select Event Type') {
      newEvent.cardType = cardTypeMappings[eventType];
      axios.post('http://localhost:8888/match/progress_card', newEvent, {
        headers: {
          Authorization: `Bearer ${accessToken}` // Add access token to headers
        }
      })
        .then(response => {
          console.log('Card event added successfully:', response.data);
          fetchCardEvents();
        })
        .catch(error => {
          console.error('Error adding card event:', error);
          setError('Error adding card event. Please try again later.');
        });
    }

    if (editingIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editingIndex] = newEvent;
      setEvents(updatedEvents);
      updateEventInDatabase(editingEventId, newEvent);
      setEditingIndex(null);
      setEditingEventId(null);
    } else {
      setPlayerName('');
      setTime('');
      setError(null);
    }
  };

  const handleDeleteEvent = (index, eventId) => {
    axios.delete(`http://localhost:8888/api/events/${eventId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}` // Add access token to headers
      }
    })
      .then(response => {
        console.log('Event deleted successfully:', response.data);
        const updatedEvents = [...events];
        updatedEvents.splice(index, 1);
        setEvents(updatedEvents);
      })
      .catch(error => {
        console.error('Error deleting event:', error);
        setError('Error deleting event. Please try again later.');
      });
  };

  const updateEventInDatabase = (eventId, updatedEvent) => {
    const apiUrl = isGoal ? 'http://localhost:8888/match/progress_score' : 'http://localhost:8888/match/progress_card';
    axios.put(`${apiUrl}/${eventId}`, updatedEvent, {
      headers: {
        Authorization: `Bearer ${accessToken}` // Add access token to headers
      }
    })
      .then(response => {
        console.log('Event updated successfully:', response.data);
        fetchEvents();
      })
      .catch(error => {
        console.error('Error updating event:', error);
        setError('Error updating event. Please try again later.');
      });
  };

  const handleAddGoalType = () => {
    const newGoalType = prompt('Enter new goal type:');
    if (newGoalType) {
      const newKey = `LBT${Object.keys(goalTypeMappings).length + 1}`;
      setGoalTypeMappings(prevState => ({
        ...prevState,
        [newGoalType]: newKey
      }));
    }
  };

  const handleDeleteGoalType = (type) => {
    setGoalTypeMappings(prevState => {
      const updatedMappings = { ...prevState };
      delete updatedMappings[type];
      return updatedMappings;
    });
  };

  const handleAddCardType = () => {
    const newCardType = prompt('Enter new card type:');
    if (newCardType) {
      const newKey = `LT${Object.keys(cardTypeMappings).length + 1}`;
      setCardTypeMappings(prevState => ({
        ...prevState,
        [newCardType]: newKey
      }));
    }
  };

  const handleDeleteCardType = (type) => {
    setCardTypeMappings(prevState => {
      const updatedMappings = { ...prevState };
      delete updatedMappings[type];
      return updatedMappings;
    });
  };

  return (
    <div className="container-IP">
      <h1 className="header-IP">Football Event Page</h1>

      <label className="label-IP">
        Chọn Mùa:
        <select className="select-IP" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
          <option value="2023-2024">2023-2024</option>
        </select>
      </label>

      <label className="label-IP">
        Chọn vòng đấu:
        <input
          className="input-IP"
          type="number"
          value={selectedRound}
          onChange={(e) => setSelectedRound(e.target.value)} />
      </label>

      <label className="label-IP">
        Chọn trận đấu:
        <select className="select-IP" value={selectedMatch} onChange={(e) => setSelectedMatch(e.target.value)}>
          <option value="">Chọn trận đấu</option>
          {matches.map((match, index) => (
            <option key={index} value={match.matchId}>
              {match.homeTeamFullName} vs {match.awayTeamFullName}
            </option>
          ))}
        </select>
      </label>

      {selectedMatch && (
        <div>
          <h2 className="header-IP">Chọn đội</h2>
          <select className="select-IP" value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
            <option value={homeTeam}>{homeTeam}</option>
            <option value={awayTeam}>{awayTeam}</option>
          </select>
        </div>
      )}

      {selectedMatch && (
        <div>
          <h2 className="header-IP">Thêm Sự Kiện</h2>
          <label className="label-IP">
            Thời Gian:
            <input
              className="input-IP"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)} />
          </label>
          <label className="label-IP">
            Cầu Thủ:
            <input
              className="input-IP"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)} />
          </label>
          <div className="event-type-buttons-IP">
            <button className="button-IP" onClick={() => { setIsGoal(true); setEventType('Trực tiếp') }}>Bàn Thắng</button>
            <button className="button-IP" onClick={() => { setIsGoal(false); setEventType('Thẻ Vàng') }}>Thẻ</button>
          </div>
          {isGoal ? (
            <>
              <select className="select-IP" value={eventType} onChange={(e) => setEventType(e.target.value)}>
                {Object.keys(goalTypeMappings).map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <ul className="event-type-list-IP">
                {Object.keys(goalTypeMappings).map((type, index) => (
                  <li className="event-type-item-IP" key={index}>
                    {type}
                    <button className="button-IP" onClick={() => handleDeleteGoalType(type)}>Xóa</button>
                  </li>
                ))}
              </ul>
              <button className="button-IP" onClick={handleAddGoalType}>Thêm Loại Bàn Thắng</button>
            </>
          ) : (
            <>
              <select className="select-IP" value={eventType} onChange={(e) => setEventType(e.target.value)}>
                {Object.keys(cardTypeMappings).map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <ul className="event-type-list-IP">
                {Object.keys(cardTypeMappings).map((type, index) => (
                  <li className="event-type-item-IP" key={index}>
                    {type}
                    <button className="button-IP" onClick={() => handleDeleteCardType(type)}>Xóa</button>
                  </li>
                ))}
              </ul>
              <button className="button-IP" onClick={handleAddCardType}>Thêm Loại Thẻ</button>
            </>
          )}
          <label className="label-IP">
            Max Time:
            <input
              className="input-IP"
              type="text"
              value={updatedMaxTime}
              onChange={(e) => setUpdatedMaxTime(e.target.value)} />
          </label>
          <button className="button-IP" onClick={handleUpdateMaxTime}>Cập Nhật Max Time</button>
          <button className="button-IP" onClick={handleAddEvent}>{editingIndex !== null ? 'Lưu' : 'Thêm'}</button>
          {error && <p className="error-IP">{error}</p>}
        </div>
      )}

      <h2 className="header-IP">Sự Kiện</h2>
      <ul className="event-list-IP">
        {goalEvents.length > 0 && isGoal ? (
          goalEvents.map((event, index) => (
            <li className="event-item-IP" key={index}>
              {event.timeInMatch} - 
              {event.clubName} - 
              {event.playerName} - 
              {Object.keys(goalTypeMappings).find(key => goalTypeMappings[key] === event.goalType)}
              <button className="button-IP" onClick={() => handleDeleteEvent(index, event._id)}>Xóa</button>
            </li>
          ))
        ) : cardEvents.length > 0 && !isGoal ? (
          cardEvents.map((event, index) => (
            <li className="event-item-IP" key={index}>
              {event.timeInMatch} - 
              {event.clubName} - 
              {event.playerName} - 
              {Object.keys(cardTypeMappings).find(key => cardTypeMappings[key] === event.cardType)}
              <button className="button-IP" onClick={() => handleDeleteEvent(index, event._id)}>Xóa</button>
            </li>
          ))
        ) : (
          <li className="event-item-IP">Không có sự kiện</li>
        )}
      </ul>
    </div>
  );
};

export default FootballEventPage;
