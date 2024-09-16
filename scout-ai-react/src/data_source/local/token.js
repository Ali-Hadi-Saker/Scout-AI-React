export const token = {
    saveToken: (token) => {
        localStorage.setItem('token', token)
    },
    getToken : () => {
        return localStorage.getItem('token')
    }
}