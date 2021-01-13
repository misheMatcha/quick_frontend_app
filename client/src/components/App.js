import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Nav from './navigation/nav';
import Footer from './navigation/footer';
import Splash from './main/splash';
import Test from './main/test';

const App = () => {
  return <div>
    <Nav />
    <Switch>
      <Route path="/test">
        <Test />
      </Route>
      <Route path="/">
        <Splash />
      </Route>
    </Switch>
    <Footer />
  </div>
};

export default App;