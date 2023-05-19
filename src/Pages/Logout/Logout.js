import React,{useState} from 'react'; 
import { useNavigate, useLocation } from "react-router-dom";

const Logout=()=>{
    
    const navigate = useNavigate(); 
    localStorage.removeItem('userEmail');
    alert(`Logged Out successfully!`)
    setTimeout(() => {
        navigate("/");
    }, 2500);

    return(
        <>
        </>  
    );
}

export default Logout;