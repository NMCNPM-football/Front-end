import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FootballEventPage = () => {
  const [selectedSeason, setSelectedSeason] = useState('2023-2024');
  const [clubOneName, setClubOneName] = useState('');
  const [clubTwoName, setClubTwoName] = useState('');
  const [intendTime, setIntendTime] = useState('');
  const [realTime, setRealTime] = useState('');
  const [matchRound, setMatchRound] = useState('');
  const [matchTurn, setMatchTurn] = useState('');
  const [stadium, setStadium] = useState('');
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  const accessToken = useSelector((state) => state.user.accessToken);

  const handleScheduleMatch = () => {
    if (!selectedSeason || !clubOneName || !clubTwoName || !intendTime || !realTime || !matchRound || !matchTurn || !stadium) {
      setError('Please fill in all required fields.');
      return;
    }

    const newMatch = {
      season: selectedSeason,
      clubOneName,
      clubTwoName,
      intendTime,
      realTime,
      matchRound,
      matchTurn,
      stadium,
    };

    axios.post('http://localhost:8888/match/calendar', newMatch, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      console.log('Match scheduled successfully:', response.data);
      setSchedule([...schedule, newMatch]);
      setClubOneName('');
      setClubTwoName('');
      setIntendTime('');
      setRealTime('');
      setMatchRound('');
      setMatchTurn('');
      setStadium('');
      setError(null);
    })
    .catch(error => {
      console.error('Error scheduling match:', error);
      setError('Error scheduling match. Please try again later.');
    });
  };

  const handleIntendTimeChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace('T', ' ');
    setIntendTime(formattedValue);
    setRealTime(formattedValue);  // Automatically update real time with the same value
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div className="container-IP">
      <h1 className="header-IP">Lập Lịch Thi Đấu</h1>

      <label className="label-IP">
        Chọn Mùa:
        <select className="select-IP" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
          <option value="">Chọn Mùa</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
          <option value="2023-2024">2023-2024</option>
        </select>
      </label>

      <h2 className="header-IP">Lịch Thi Đấu</h2>
      <label className="label-IP">
        Đội 1:
        <input
          className="input-IP"
          type="text"
          value={clubOneName}
          onChange={(e) => setClubOneName(e.target.value)} />
      </label>
      <label className="label-IP">
        Đội 2:
        <input
          className="input-IP"
          type="text"
          value={clubTwoName}
          onChange={(e) => setClubTwoName(e.target.value)} />
      </label>
      <label className="label-IP">
        Thời Gian Dự Kiến:
        <input
          className="input-IP"
          type="datetime-local"
          value={intendTime.replace(' ', 'T')}
          onChange={handleIntendTimeChange} />
      </label>
      <label className="label-IP">
        Thời Gian Thực:
        <input
          className="input-IP"
          type="datetime-local"
          value={realTime.replace(' ', 'T')}
          readOnly />
      </label>
      <label className="label-IP">
        Vòng Đấu:
        <input
          className="input-IP"
          type="text"
          value={matchRound}
          onChange={(e) => setMatchRound(e.target.value)} />
      </label>
      <label className="label-IP">
        Lượt Đấu:
        <input
          className="input-IP"
          type="text"
          value={matchTurn}
          onChange={(e) => setMatchTurn(e.target.value)} />
      </label>
      <label className="label-IP">
        Sân Vận Động:
        <input
          className="input-IP"
          type="text"
          value={stadium}
          onChange={(e) => setStadium(e.target.value)} />
      </label>
      <button className="button-IP" onClick={handleScheduleMatch}>Lập Lịch</button>
      {error && <p className="error-IP">{error}</p>}

      <h2 className="header-IP">Lịch Thi Đấu</h2>
      <ul className="schedule-list-IP">
        {schedule.map((match, index) => (
          <li className="schedule-item-IP" key={index}>
            Mùa giải: {match.season} - Vòng: {match.matchRound} - Thời gian dự kiến: {formatDateTime(match.intendTime)} - Thời gian thực: {formatDateTime(match.realTime)} - {match.clubOneName} vs {match.clubTwoName} - Vòng đấu: {match.matchRound} - Lượt đấu: {match.matchTurn} - Sân vận động: {match.stadium}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootballEventPage;
