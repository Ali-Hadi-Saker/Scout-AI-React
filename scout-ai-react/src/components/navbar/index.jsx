import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css'
const NavBar = ()=>{
    return(
        <div className='flex navbar-container'>
            <h2>Admin Panel</h2>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Search ... " />
            </div>
            <div className='navbar-profile flex'>
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