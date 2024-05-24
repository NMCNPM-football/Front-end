import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeagueTable from './Components/Ranking/LeagueTable.jsx';
import Header from './Components/HomePage/Header.jsx';
import Footer from './Components/HomePage/Footer.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MatchPage from './Components/Progess_Goal/MatchPage.jsx';
import TeamGrid from './Components/ClubInfo/TeamGrid.jsx';
import TableTeam from './Components/TeamInfo/TableTeam.jsx';
import Player from './Components/Player/Players.jsx';
import Paper from './Components/Paper/Paper.jsx';
import MainNews from './Components/Paper/MainNews.jsx';
import FirstNews from './Components/Paper/FirstNews.jsx';
import SecondNews from './Components/Paper/SecondNews.jsx';
import ThirdNews from './Components/Paper/ThirdNews.jsx';
import Sumarize from './Components/Paper/Sumarize.jsx';
import Schedule from './Components/MatchSchedule/Schedule.jsx';
import LoginPage from './Components/Auth/Sign-in/LoginPage';
import AdminDashboard from './Components/Auth/AdminDashboard';
import UserDashboard from './Components/Auth/UserDashBoard';
import {Provider} from "react-redux";
import { store } from './store/index';
import SignUp from "./Components/Auth/Sign-up/SignupPage"; // import your Redux store

const PrivateRoute = ({ children, role, requiredRole }) => {
  return role === requiredRole ? children : <Navigate to="/login" />;
};

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const role = user ? user.role : null;

  return (
    <Router>
      <div>
        <Provider store={store}> {/* Wrap your Router with the Provider */}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/league-table" element={<LeagueTable />} />
            <Route path="/team" element={<TeamGrid />} />
            <Route path="/team/:id" element={<TableTeam />} />
            <Route path="/match/:id" element={<MatchPage />} />
            <Route path="/player/:playerId" element={<Player />} />
            <Route path="/match" element={<Schedule />} />
            <Route path="/tin-tuc" element={<Paper />} />
            <Route path="/main-news" element={<MainNews />} />
            <Route path="/first-news" element={<FirstNews />} />
            <Route path="/second-news" element={<SecondNews />} />
            <Route path="/third-news" element={<ThirdNews />} />
            <Route path="/sumarize" element={<Sumarize />} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin-dashboard"
              element={
                <PrivateRoute role={role} requiredRole="admin">
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <PrivateRoute role={role} requiredRole="user">
                  <UserDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Provider>
      </div>
    </Router>
  );
};

export default App;