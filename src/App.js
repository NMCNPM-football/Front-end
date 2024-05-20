import './App.css';
import TeamGrid from './Components/ClubInfo/TeamGrid';
import Footer from './Components/Footer';
import Header from './Components/Header';
//import LeagueTable from './Components/Ranking/LeagueTable';
//import FootballSchedule from './Components/FootballSchedule';
function App() {
  return (
    <div>
      <Header/>
      {/* <FootballSchedule/> */}
      {/* <LeagueTable /> */}
      <TeamGrid />
      <Footer />
    </div>
    
  );
}

export default App;
