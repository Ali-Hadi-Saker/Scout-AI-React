import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCaretDown  } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import React, {useState} from "react";

const NavBar = ()=>{
    const [isDropDownOpen, SetIsDropDownOpen] = useState(false)
    const toggleDropDown = () => {
        SetIsDropDownOpen(!isDropDownOpen)
    }
    return(
        <div className='flex navbar-container'>
            <h2>Admin Panel</h2>
            <div className='search-container flex center gap rounded'>
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                <input type="text" placeholder="Search ... " />
            </div>
            <div className='navbar-profile flex center gap '>
                <FontAwesomeIcon icon={faUser} />
                <p>Name</p>
                {/* <div className='drop-down'>
                    <button>Logout</button>
                </div> */}
                <FontAwesomeIcon icon={faCaretDown } onClick={toggleDropDown}/>
                {isDropDownOpen && (
                    <div className='drop-down-menu flex rounded column'>
                        <ul >
                            <li>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default NavBar