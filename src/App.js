import React from 'react';
import './App.css';
import LeagueTable from './Components/Ranking/LeagueTable';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import HomePage from './Components/HomePage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bang-xep-hang" element={<LeagueTable />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
