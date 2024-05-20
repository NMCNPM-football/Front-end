import './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeagueTable from './Components/Ranking/LeagueTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <Router>
      <HomePage/>
      <Routes>
        <Route path="/bang-xep-hang" element={<LeagueTable />} />
      </Routes>
    </Router>
  );
}

export default App;
