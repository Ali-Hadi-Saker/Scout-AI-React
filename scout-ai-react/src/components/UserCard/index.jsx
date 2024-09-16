import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash  } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
const UserCard = ({name, email, onDeleteClick, status}) => {
    const userStatus = status === 'online'? 'green' : 'red'
    return(
        <div className="card-container flex ">
            <div className="username flex center">
                <FontAwesomeIcon icon={faUser}/>
                <p>{name}</p>
            </div>
            <p>{email}</p>
            <div className="status-container flex center gap">
                <div className={`status-indicator ${userStatus}`}></div>
                <p>{status}</p>
            </div>
            <FontAwesomeIcon icon={faTrash} className='remove-icon clickable' onClick={onDeleteClick}/>
        </div>
    )
}

export default UserCard