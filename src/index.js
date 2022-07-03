import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Components/style.css';
import items from './Components/Data.js';

ReactDOM.render(<App items={items} />,
 document.getElementById('root'));
