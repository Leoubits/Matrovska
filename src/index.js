import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { ScrolltoTop } from './components/fx/ScrolltoTop'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrolltoTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

