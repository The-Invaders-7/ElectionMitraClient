import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Pages/AdminDashBoard/adminDashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import AddVoters from './components/pages/AddVoters';
import SignUp from './components/pages/SignUp';
import QueryingPage from './Pages/QueryingPage/QueryingPage';
import AddVoter from './Pages/AddVoter/AddVoter';
import ContactUs from './Pages/ContactUs/contactUs';
import Home from './Pages/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/dashboard' element={<AdminDashboard/>}/>
        <Route exact path='/addvoters' element={<AddVoter/>} />
        <Route exact path='/contact-us' element={<ContactUs/>} />
        <Route exact path='/sign-up' element={<SignUp/>} />
        <Route exact path='/queryingPage' element={<QueryingPage/>} />
      </Routes>
    </Router>
    </>
);

reportWebVitals();
