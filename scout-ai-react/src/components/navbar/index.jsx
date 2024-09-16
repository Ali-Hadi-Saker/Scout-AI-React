import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import React from "react";

const NavBar = ()=>{
    return(
        <div className='flex navbar-container'>
            <h2>Admin Panel</h2>
            <div className='search-container flex center gap rounded'>
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                <input type="text" placeholder="Search ... " />
            </div>
            <div className='navbar-profile flex center gap '>
                <FontAwesomeIcon icon={faUser}/>
                <p>Name</p>
                <div className='drop-down'>
                    <button>Logout</button>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar