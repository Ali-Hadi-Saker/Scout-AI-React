import React, { useState } from "react";
import Button from "../../base/button";
import Input from "../../base/input";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        console.log("Email:", newEmail);
    }
    return (
        <div className="flex column center page primary-bg">
            <div className="form-container flex column">
                <h3>Hello,<br/> Welcome Back</h3>
                <Input 
                onTextChange={
                    handleEmailChange
                }
                icon={faEnvelope}
                placeholder={'Email'}/>
                <Input 
                onTextChange={(e) => {
                    setPassword(e.target.value)
                }}
                icon={faLock}
                placeholder={'password'}/>
                <Button/>
            </div>
            
        </div>
    )
}
export default Login;