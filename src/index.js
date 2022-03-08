import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { DiscDiary } from './components/DiscDiary';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DiscDiary />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
