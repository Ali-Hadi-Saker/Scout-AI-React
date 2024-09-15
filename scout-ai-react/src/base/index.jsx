import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'


const Input = ({icon, placeholder}) => {
    return (
        <div className='input-container flex '>
            <FontAwesomeIcon icon={icon} className='input-icon'/>
            <input type="text"
            placeholder={placeholder} />
        </div>
    )
}
export default Input;