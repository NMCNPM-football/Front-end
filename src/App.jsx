import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeagueTable from './Components/Ranking/LeagueTable.jsx';
import Header from './Components/HomePage/Header.jsx';
import Footer from './Components/HomePage/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed unused 'Navigate'
import MatchPage from './Components/Progess_Goal/MatchPage.jsx';
import TeamGrid from './Components/ClubInfo/TeamGrid.jsx';
import TableTeam from './Components/TeamInfo/TableTeam.jsx';
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;