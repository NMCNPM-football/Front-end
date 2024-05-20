import './App.css';
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
  );
}

export default App;
