import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

// allows us to route the components
// cannot use switch outside of the router in react-router-dom
const Root = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default Root;