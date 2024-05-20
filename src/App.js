import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import TeamGrid from './Components/ClubInfo/TeamGrid';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MatchPage from './Components/Progess_Goal/MatchPage';
//import LeagueTable from './Components/Ranking/LeagueTable';
//import FootballSchedule from './Components/FootballSchedule';
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
          <Route path="/match/:id" element={<MatchPage />} />
      </Routes>
      <Footer />
    </div>
    </Router>

  );
}

export default App;
