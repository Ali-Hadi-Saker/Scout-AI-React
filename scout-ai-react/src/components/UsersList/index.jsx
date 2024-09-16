import { useEffect, useState } from "react";
import { userRemote } from "../../data_source/remote/user_remote";
import UserCard from "../UserCard";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState(''); 

    const fetchUsers = async () => {
        try {
            const data = await userRemote.getAllUsers();
            setUsers(data.users);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDeleteUser = async (id) => {
        try {
            const response = await userRemote.deleteUser(id);
            setUsers(users.filter(user => user._id !== id));
            console.log("User deleted:", response);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredUsers = users.filter((user) => 
        user.fname.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.email.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
        <div className="flex column full-width user-list">
            <div className='search-container flex gap rounded'>
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                <input
                    type="text"
                    placeholder="Search for User"
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)} 
                />
            </div>

            {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                    <UserCard
                        key={user._id}
                        email={user.email}
                        name={user.fname}
                        onDeleteClick={() => handleDeleteUser(user._id)}
                    />
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default UsersList;
