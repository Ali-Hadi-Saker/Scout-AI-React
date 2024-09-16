import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


const Input = ({icon, placeholder,suffixIcon, onTextChange}) => {
    const [isPassVisible, setIsPassVisible] = useState(false)
    const togglePassVisibility = () => {
        setIsPassVisible(!isPassVisible)
    }
    return (
        <div className='input-container full-width flex '>
            <FontAwesomeIcon icon={icon} className='input-icon'/>
            <input 
            type={!suffixIcon? 'text': isPassVisible? 'text': 'password'}
            onChange={(e) => {onTextChange(e)}}
            placeholder={placeholder} />
            {suffixIcon && <FontAwesomeIcon icon={isPassVisible? faEye : faEyeSlash} className='input-icon suffix-icon ' onClick={togglePassVisibility}/>}
        </div>
    )
}
export default Input;