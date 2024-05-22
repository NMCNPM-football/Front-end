import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';
import { Rankdata2023, Rankdata2022 } from './RankData';

class LeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeason: '2023',
    };
  }

  getRankData(season) {
    switch (season) {
    case '2022':
      return Rankdata2022;
    case '2023':
    default:
      return Rankdata2023;
    }
  }

  render() {
    const seasonTitles = {
      '2023': 'Vô địch Quốc gia Night Wolf 2023/24',
      '2022': 'Vô địch Quốc gia Night Wolf 2022/23',
    };

    const data = this.getRankData(this.state.selectedSeason);
    const sortedData = data
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

    const columns = [
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
    ];

    return (
      <div className="league-table">
        <h1 className="TitleRank">{seasonTitles[this.state.selectedSeason]}</h1>
        <div className="season-selector">
          <label htmlFor="season">Mùa giải: </label>
          <select
            id="season"
            value={this.state.selectedSeason}
            onChange={(e) => this.setState({ selectedSeason: e.target.value })}
          >
            <option value="2023">2023-2024</option>
            <option value="2022">2022-2023</option>
          </select>
        </div>
        <DataTable columns={columns} data={sortedData} />
      </div>
    );
  }
}

LeagueTable.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
  row: PropTypes.shape({
    original: PropTypes.shape({
      image: PropTypes.string,
    }),
  }),
};

export default LeagueTable;
