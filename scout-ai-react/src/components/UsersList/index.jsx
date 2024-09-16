import { useEffect, useState } from "react";
import { userRemote } from "../../data_source/remote/user_remote";
import UserCard from "../UserCard";

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
    return(
        <div className="flex column fill-width">
            {users.map((user)=>{
                return (
                    <UserCard
                        email={user.email}
                        name={user.fname}/>
                )
            })}
        </div>      
    )
}

export default UsersList