import React,{useState} from 'react'; 
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addVoter from "../../Images/addVoter.svg"
import "./AddVoter.css";

const AddVoter=()=>{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");  

    return(
        <div className="outer-container">
            <div className="inner-container">
            <form className="login-form" action="#">
                <input className='newinput' type="text" placeholder="District"/>
                <input className='newinput' type="text" placeholder="City"/>
                <input className='newinput' type="text" placeholder="Ward"/>
                <button type="submit" className="btn-submit" >Upload PDF</button>
                <button type="submit" className="btn-submit" >Submit</button>
            </form>
            <div className='login-image'>
                <img src={addVoter} width="300" height="300"></img>
            </div>
            </div>
        </div>
    );
}

export default AddVoter;