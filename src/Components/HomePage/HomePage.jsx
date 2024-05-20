import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FootballSchedule from "./FootballSchedule";
// import LeagueTable from '../../Components/Ranking/LeagueTable.js';
// import { Route, Routes } from 'react-router-dom';

const HomePage = () => {
    return (
        <div> 
            <Header />
            <FootballSchedule />  
            <Footer />
        </div>
    );
};

export default HomePage;