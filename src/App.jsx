    import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeagueTable from './Components/Ranking/LeagueTable';
import Header from './Components/HomePage/Header';
import Footer from './Components/HomePage/Footer';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import MatchPage from './Components/Progess_Goal/MatchPage';
import FootballSchedule from './Components/HomePage/FootballSchedule';

function App() {
    return (
        <Router>
            <div>
                <Header/>
                {/* <FootballSchedule/> */}
                {/* <LeagueTable /> */}
                {/* <TeamGrid /> */}
                <Routes>
                    <Route path="/" element={<Navigate to="/match/0" />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/match/:id" element={<MatchPage />} />
                    <Route path="/schedule" element={<FootballSchedule />} />
                    <Route path="/league-table" element={<LeagueTable />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;