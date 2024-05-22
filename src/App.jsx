// eslint-disable-next-line
import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeagueTable from './Components/Ranking/LeagueTable.jsx';
import Header from './Components/HomePage/Header.jsx';
import Footer from './Components/HomePage/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MatchPage from './Components/Progess_Goal/MatchPage.jsx';
import TeamGrid from './Components/ClubInfo/TeamGrid.jsx';
import TableTeam from './Components/TeamInfo/TableTeam.jsx';
import Player from './Components/Player/Players.jsx'; // Import Player component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/league-table" element={<LeagueTable />} />
          <Route path="/team" element={<TeamGrid />} />
          <Route path="/team/:id" element={<TableTeam />} />
          <Route path="/match/:id" element={<MatchPage />} />
          <Route path="/player/:playerId" element={<Player />} /> {/* New route for player details */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
