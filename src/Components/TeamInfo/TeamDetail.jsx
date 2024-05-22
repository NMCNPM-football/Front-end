import React from 'react';
import TeamTable from './TableTeam';
import { useParams } from 'react-router-dom';

const TeamDetail = () => {
  let { clubName } = useParams();
  return <TeamTable clubName={clubName} />;
}

export default TeamDetail;
