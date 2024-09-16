import axios from 'axios'
import {authLocal} from '../local/auth_local'

export const userRemote = {
    getAllUsers: async() => {
        const token = authLocal.getToken()
        const {data} = await axios.get("http://localhost:8080/users/",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    },
    deleteUser: async (id) => {
        const token = authLocal.getToken()
        const response = await axios.delete(`http://localhost:8080/users/deleteUser/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response

    },
    
}