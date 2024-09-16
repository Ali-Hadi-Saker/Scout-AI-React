import { useEffect, useState } from "react";
import { userRemote } from "../../data_source/remote/user_remote";
import UserCard from "../UserCard";
import './style.css'

const UsersList = () => {
    const [users, setUsers] = useState([])
    const fetchUsers = async () =>{
        try {
            const data = await userRemote.getAllUsers()
            setUsers(data.users)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    const handleDeleteUser = async (id) =>{
        try {
            const {response} = await userRemote.deleteUser(id)
            console.log(response)
            console.log("delete user");

        } catch (error) {
            console.log(error);
            
        }
        
    }
    return(
        <div className="flex column full-width user-list">
            {users.map((user)=>{
                return (
                    <UserCard
                        email={user.email}
                        name={user.fname}
                        onDeleteClick={() => handleDeleteUser(user._id)}/>
                )
            })}
        </div>      
    )
}

export default UsersList