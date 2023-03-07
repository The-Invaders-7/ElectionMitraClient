import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login/Login';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
);

reportWebVitals();
