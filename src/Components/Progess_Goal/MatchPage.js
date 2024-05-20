import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { matchData } from './PGData'; // Đảm bảo rằng đường dẫn đến data.js đúng
import MatchInfo from './MatchInfo';
import PlayerStats from './PlayerStats';
import './PG.css'; // Đảm bảo rằng đường dẫn đến PG.css đúng

const MatchPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const matchId = parseInt(id, 10);

  const [currentMatch, setCurrentMatch] = useState(() =>
    matchData.find(match => match.id === matchId)
  );

  useEffect(() => {
    const match = matchData.find(match => match.id === matchId);
    if (match) {
      // Sắp xếp lại dữ liệu của đội 1 và đội 2 mỗi khi id thay đổi
      const sortedTeamOnePlayers = [...match.teamOne.players].sort((a, b) => parseInt(a.goalTime) - parseInt(b.goalTime));
      const sortedTeamTwoPlayers = [...match.teamTwo.players].sort((a, b) => parseInt(a.goalTime) - parseInt(b.goalTime));

      // Tính tỉ số và kiểm tra phản lưới
      let teamOneGoals = 0;
      let teamTwoGoals = 0;
      sortedTeamOnePlayers.forEach(player => {
        if (player.goalType === 'LBT03') {
          teamTwoGoals++; // Đội đối phương ghi bàn vào lưới nhà
        } else {
          teamOneGoals++; // Đội chủ nhà ghi bàn vào lưới đối phương
        }
      });
      sortedTeamTwoPlayers.forEach(player => {
        if (player.goalType === 'LBT03') {
          teamOneGoals++; // Đội chủ nhà ghi bàn vào lưới nhà
        } else {
          teamTwoGoals++; // Đội đối phương ghi bàn vào lưới chủ nhà
        }
      });

      // Cập nhật lại dữ liệu đã sắp xếp
      setCurrentMatch({
        ...match,
        teamOne: {
          ...match.teamOne,
          players: sortedTeamOnePlayers,
          goals: teamOneGoals
        },
        teamTwo: {
          ...match.teamTwo,
          players: sortedTeamTwoPlayers,
          goals: teamTwoGoals
        }
      });
    }
  }, [matchId]);

  const handleNext = () => {
    if (matchId < matchData.length - 1) {
      const nextId = matchId + 1;
      navigate(`/match/${nextId}`);
    }
  };

  const handlePrevious = () => {
    if (matchId > 0) {
      const previousId = matchId - 1;
      navigate(`/match/${previousId}`);
    }
  };

  if (!currentMatch) {
    return <div>Match not found</div>;
  }

  return (
    <div className="match-page">
      <MatchInfo match={currentMatch} />
      <PlayerStats match={currentMatch} />
      <div className="button-container">
        <button onClick={handlePrevious} disabled={matchId === 0}>Previous</button>
        <button onClick={handleNext} disabled={matchId === matchData.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default MatchPage;
