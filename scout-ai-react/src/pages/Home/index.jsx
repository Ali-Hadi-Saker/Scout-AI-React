import NavBar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import UserCard from "../../components/UserCard"
import './style.css'
const Home = () => {
    const location = useLocation()
    const username = location.state.username
    console.log(username)
    return(
        <div className="page flex column home-page">
            <NavBar username={username}/>
            <div className="body-container full-height flex ">
                <Sidebar/>
                <UserCard/>           
            </div>
        </div>
    )
}
export default Home;