import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'


const Input = ({icon, placeholder,suffixIcon, onTextChange}) => {
    return (
        <div className='input-container full-width flex '>
            <FontAwesomeIcon icon={icon} className='input-icon'/>
            <input 
            type="text"
            onChange={(e) => {onTextChange(e)}}
            placeholder={placeholder} />
            {suffixIcon && <FontAwesomeIcon icon={suffixIcon} className='input-icon suffix-icon '/>}
        </div>
    )
}
export default Input;