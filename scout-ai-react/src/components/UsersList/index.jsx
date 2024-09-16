import { useState } from "react";
import { userRemote } from "../../data_source/remote/user_remote";

const UsersList = () => {
    const [users, setUsers] = useState([])
    const fetchUsers = async () =>{
        try {
            const data = await userRemote.getAllUsers()
            setUsers(data)
        } catch (error) {
            console.log(error);
            
        }
    }
    return(
        <div>

        </div>      
    )
}

export default UsersList