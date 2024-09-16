import axios from 'axios'

export const auth = {
    login : async (email, pass) => {
        const {data} = await axios.post("http://localhost:8080/users/login", {
            email,
            pass
        })
        return data
    }
}