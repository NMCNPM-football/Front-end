import React, { useState, useMemo } from 'react';
import DataTable from './DataTable';
import { Rankdata2023, Rankdata2022 } from './RankData';
// import Header from '../HomePage/Header';
// import Footer from '../HomePage/Footer';
const LeagueTable = () => {
  const [selectedSeason, setSelectedSeason] = useState('2023');

  const seasonTitles = {
    '2023': 'Vô địch Quốc gia Night Wolf 2023/24',
    '2022': 'Vô địch Quốc gia Night Wolf 2022/23',
    // Add more seasons and titles as needed
  };

  const getRankData = (season) => {
    switch (season) {
      case '2022':
        return Rankdata2022;
      case '2023':
      default:
        return Rankdata2023;
    }
  };

  const sortedData = useMemo(() => {
    const data = getRankData(selectedSeason);
    return data
      .slice()
      .map((team) => ({
        ...team,
        PTS: team.win * 3 + team.draw,
        GD: team.GF - team.GA,
      }))
      .sort((a, b) => {
        if (b.PTS === a.PTS) {
          return b.GD - a.GD;
        }
        return b.PTS - a.PTS;
      })
      .map((team, index) => ({ ...team, stt: index + 1 }));
  }, [selectedSeason]);

  const columns = useMemo(
    () => [
      {
        Header: 'Pos',
        accessor: 'stt',
      },
      {
        Header: 'Team',
        accessor: 'teamname',
        Cell: ({ cell: { value }, row: { original } }) => (
          <div>
            <img src={original.image} alt={value} style={{ height: '30px', marginRight: '10px' }} />
            {value}
          </div>
        ),
      },
      {
        Header: 'Played',
        accessor: 'play',
      },
      {
        Header: 'Won',
        accessor: 'win',
      },
      {
        Header: 'Drawn',
        accessor: 'draw',
      },
      {
        Header: 'Lost',
        accessor: 'lost',
      },
      {
        Header: 'GF',
        accessor: 'GF',
      },
      {
        Header: 'GA',
        accessor: 'GA',
      },
      {
        Header: 'GD',
        accessor: 'GD',
      },
      {
        Header: 'Points',
        accessor: 'PTS',
      },
    ],
    []
  );

  return (
    <div>
      {/*<Header/> */}
      <div className="league-table">
        <h1 className='TitleRank'>{seasonTitles[selectedSeason]}</h1>
        <div className="season-selector">
          <label htmlFor="season">Mùa giải: </label>
          <select id="season" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
            <option value="2023">2023-2024</option>
            <option value="2022">2022-2023</option>
            {/* Add more seasons as needed */}
          </select>
        </div>
        <DataTable columns={columns} data={sortedData} />
      </div>
      {/*<Footer/>*/}
    </div>
  );
};

export default LeagueTable;