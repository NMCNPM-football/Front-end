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
                    <Route path="/" element={<HomePage />} />
                    <Route path="/league-table" element={<LeagueTable />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
