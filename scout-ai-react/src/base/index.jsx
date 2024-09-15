import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './style.css'


const Input = () => {
    return (
        <div className='input-container flex '>
            <FontAwesomeIcon icon={faEnvelope} className='input-icon'/>
            <input type="text"
            placeholder="Email" />
        </div>
    )
}
export default Input;