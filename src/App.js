import './App.css';
<<<<<<< HEAD
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

=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FootballSchedule from './Components/FootballSchedule';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LeagueTable from './Components/Ranking/LeagueTable';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FootballSchedule />} />
        <Route path="/league-table" element={<LeagueTable />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
>>>>>>> 54e1c1e7ce3d52efbee0e4eba19d07353e9697bb
  );
}

export default App;
