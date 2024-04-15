
import React from 'react';
import TopMenu from './TopMenu';
import Banner from './banner';
import RunningText from './RunningText';
import MostSoldProducts from './MostSoldProducts';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <TopMenu />
      <Banner />
      <RunningText />
      <MostSoldProducts />
      <Footer />
    </div>
  );
};

export default App;
