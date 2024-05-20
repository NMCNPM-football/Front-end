import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeagueTable from './Components/Ranking/LeagueTable';
import Header from './Components/HomePage/Header';
import Footer from './Components/HomePage/Footer';
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