import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
/* 
I have importing packages from react and referencing the html file in public directory to get that reference to that Document object 
then, I have used the function called ReactDOM.createRoot() function to control the innerworkings of that element.
with root.render() the root id element is over written with React components we make. 
*/ 