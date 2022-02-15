import React from 'react';

import Header from './../components/Header/script.js';
import Home from './../components/Home/script.js';
import Footer from './../components/Footer/script.js';

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
