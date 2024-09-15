import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'


const Input = ({icon, placeholder, onTextChange}) => {
    return (
        <div className='input-container full-width flex '>
            <FontAwesomeIcon icon={icon} className='input-icon'/>
            <input 
            type="text"
            onChange={(e) => {onTextChange(e)}}
            placeholder={placeholder} />
        </div>
    )
}
export default Input;