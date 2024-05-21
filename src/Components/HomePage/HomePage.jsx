// HomePage.jsx
import React from 'react';
import FootballSchedule from './FootballSchedule.jsx';
import Banner from './Banner.jsx';
import News from './News.jsx';
const HomePage = () => {
  return (
    <div>
      <FootballSchedule />
      <Banner />
      <News />
    </div>
  );
};

export default HomePage;