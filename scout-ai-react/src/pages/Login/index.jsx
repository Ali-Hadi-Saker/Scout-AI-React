import React, { useState } from "react";
import Button from "../../base/button";
import Input from "../../base/input";
import { faEnvelope, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { auth } from "../../data_source/remote/auth_remote";
import './style.css';
import { authLocal } from "../../data_source/local/auth_local";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        console.log(newEmail);
    }
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        console.log(newPassword)
    }

    const validEmail = (email) => {
        // Regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async ()=>{
        const verifyEmail = validEmail(email)
        if(!verifyEmail){
            console.log('invalid mail');
            
        }else{
            const data = await auth.login(email, password)
            console.log(data)
            if(data.message === 'success'){
                authLocal.saveToken(data.token)
                navigate('/home', {state: {username: data.user.fname}})
            }
        }
        
    }
    return (
        <div className="flex column center page primary-bg">
            <div className="form-container flex column">
                <h3 className="white-text">Hello,<br/> Welcome Back</h3>
                <Input 
                onTextChange={handleEmailChange}
                icon={faEnvelope}
                placeholder={'Email'}/>               
                <Input 
                onTextChange={handlePasswordChange}
                icon={faLock}
                placeholder={'password'}
                suffixIcon={faEyeSlash}/>
                
                <Button onMousseClick={handleLogin}/>
            </div>
            
        </div>
    )
}
export default Login;