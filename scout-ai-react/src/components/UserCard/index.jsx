import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash  } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
const UserCard = () => {
    return(
        <div className="card-container flex ">
            <div className="username flex center">
                <FontAwesomeIcon icon={faUser}/>
                <p>username</p>
            </div>
            <p>email@gmail.com</p>
            <p>status</p>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    )
}

export default UserCard