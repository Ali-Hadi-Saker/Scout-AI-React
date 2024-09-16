import axios from 'axios'
import {token, token} from '../local/token'

export const userRemote = {
    getAllUsers: async() => {
        const token = token.getToken()
        const {data} = await axios.get("http://localhost:8080/users/",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
}