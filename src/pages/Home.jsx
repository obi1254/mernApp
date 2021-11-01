import React from 'react';
import Navbar from '../components/Navbar';
import Ad from '../components/Ad';

import AnotherNav from '../components/AnotherNav';

const Home = () => {
  return (
    <div style={{ overflow: 'none' }} className='v'>
      <Ad />
      <Navbar />

      <AnotherNav></AnotherNav>
    </div>
  );
};

export default Home;
