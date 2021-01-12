import React from 'react';
import Nav from './navigation/nav';
import Footer from './navigation/footer';
import Splash from './main/splash';
import Test from './main/test';

const App = () => {
  return <div>
    <Nav />
    <Splash />
    <Test />
    <Footer />
  </div>
};

export default App;