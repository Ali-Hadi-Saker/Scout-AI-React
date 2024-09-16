import NavBar from "../../components/navbar";
import { useLocation } from "react-router-dom";
const Home = () => {
    const location = useLocation()
    const username = location.state.username
    console.log(username)
    return(
        <div>
            <NavBar username={username}/>            
        </div>
    )
}
export default Home;