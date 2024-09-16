import React, { useState } from "react";
import Button from "../../base/button";
import Input from "../../base/input";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { auth } from "../../data_source/remote/auth_remote";
import './style.css';
import { token } from "../../data_source/local/token";

const Login = () => {
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

    const handleLogin = async ()=>{
        const data = await auth.login(email, password)
        console.log(data)
        if(data.message === 'success'){
            token.saveToken(data.token)
        }
    }
    return (
        <div className="flex column center page primary-bg">
            <div className="form-container flex column">
                <h3>Hello,<br/> Welcome Back</h3>
                <Input 
                onTextChange={handleEmailChange}
                icon={faEnvelope}
                placeholder={'Email'}/>

                <Input 
                onTextChange={handlePasswordChange}
                icon={faLock}
                placeholder={'password'}/>

                <Button onMousseClick={handleLogin}/>
            </div>
            
        </div>
    )
}
export default Login;