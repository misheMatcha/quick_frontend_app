import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});