import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login/Login';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Pages/AdminDashBoard/adminDashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import AddVoters from './components/pages/AddVoters';
import SignUp from './components/pages/SignUp';
import QueryingPage from './Pages/QueryingPage/QueryingPage';
import AddVoter from './Pages/AddVoter/AddVoter';
import ContactUs from './Pages/ContactUs/contactUs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/dashboard' element={<AdminDashboard/>}/>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/addvoters' element={<AddVoter/>} />
        <Route exact path='/contact-us' element={<ContactUs/>} />
        <Route exact path='/sign-up' element={<SignUp/>} />
        <Route exact path='/queryingPage' element={<QueryingPage/>} />
      </Routes>
    </Router>
    </>
);

reportWebVitals();
