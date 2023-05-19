import React,{useState} from 'react'; 
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from "../../Images/login.svg"
import "./Login.css";
import { useNavigate, useLocation } from "react-router-dom";

const Login=()=>{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState(""); 
    const navigate = useNavigate(); 

    const validate=async(e)=>{
        e.preventDefault();
        try{
            if(email==""){
                toast.warn("Please enter user email",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
                console.log("Email "+email);
            }
            else if(password==""){
                toast.warn("Please enter user password",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
                console.log("Password "+password);
            }
            else{
                console.log(email+" "+password);
            const res = await axios.post('http://localhost:8080/admin/login', {
                    email: email,
                    password: password
                });
                console.log(res);
                if(res.data.loginSuccess){
                    toast.success(` ${email} and password verified successfully!`, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 1000,})
                    localStorage.setItem("userEmail", email);
                    setemail("");
                    setpassword("");
                    setTimeout(() => {
                        navigate("/");
                    }, 2500);
                }else{
                    toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
                }

                
            }
        }
        catch(error){
            console.log(email+" "+password);
            console.log(e.response.data);
            if(e.response.data.message == "Login Failed"){
                toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            }
            // else if(e.response.data == "Invalid password"){
            //     toast.error("Wrong Credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 1500})
            // }

        }
    }
    return(
        <div className="outer-container">
            <div className="inner-container">
            <form className="login-form" action="#">
                <input className='newinput' type="email" placeholder="Email" value={email} onChange={e=>setemail(e.target.value)}/>
                <input  className='newinput' type="password" placeholder="Password" value={password} onChange={e=>setpassword(e.target.value)}/>
                <button type="submit" className="btn-submit" onClick={validate}>Sign in</button>
            </form>
            <div className='login-image'>
                <img src={login} width="300" height="300"></img>
            </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Login;