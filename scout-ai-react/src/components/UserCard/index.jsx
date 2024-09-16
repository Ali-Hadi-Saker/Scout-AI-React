import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash  } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
const UserCard = ({name, email}) => {
    return(
        <div className="card-container flex ">
            <div className="username flex center">
                <FontAwesomeIcon icon={faUser}/>
                <p>{name}</p>
            </div>
            <p>{email}</p>
            <p>status</p>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    )
}

export default UserCard