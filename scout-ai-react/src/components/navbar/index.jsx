import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown  } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import React, {useState} from "react";

const NavBar = ({username})=>{
    const [isDropDownOpen, SetIsDropDownOpen] = useState(false)
    const toggleDropDown = () => {
        SetIsDropDownOpen(!isDropDownOpen)
    }
    return(
        <div className='flex navbar-container'>
            <h2>Admin Panel</h2>
            
            <div className='navbar-profile flex center gap '>
                <FontAwesomeIcon icon={faUser} />
                <p>{username}</p>
                <FontAwesomeIcon icon={faCaretDown } onClick={toggleDropDown} className='clickable'/>
                {isDropDownOpen && (
                    <div className='drop-down-menu flex rounded column'>
                        <ul >
                            <li className='logout bold clickable full-width'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default NavBar