import axios from 'axios'

export const auth = {
    login : async (email, password) => {
        const {data} = await axios.post("http://localhost:8080/users/login", {
            email,
            password
        })
        return data
    }
}