import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRemove  } from '@fortawesome/free-solid-svg-icons';
const UserCard = () => {
    return(
        <div className="card-container flex">
            <FontAwesomeIcon icon={faUser}/>
            <p>username</p>
            <p>email@gmail.com</p>
            <p>status</p>
            <FontAwesomeIcon icon={faRemove}/>
        </div>
    )
}

export default UserCard