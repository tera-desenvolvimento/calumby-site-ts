import React from 'react';

import Header from './components/header';
import MainBanner from './components/mainBanner';
import Services from './components/services';
import Sliders from './components/sliders';
import Experience from './components/experience';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainBanner />
      <Services />
      <Sliders />
      <Experience />
      <Footer />
    </React.Fragment>
  );
}

export default App;