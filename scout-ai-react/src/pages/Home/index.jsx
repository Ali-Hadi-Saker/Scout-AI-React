import { useLocation } from "react-router-dom";
import './style.css'
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/Navbar";
import UsersList from "../../components/UsersList";
const Home = () => {
    const location = useLocation()
    const username = location.state.username
    console.log(username)
    return(
        <div className="page flex column home-page">
            <NavBar username={username}/>
            <div className="body-container full-height flex ">
                <Sidebar/>
                <UsersList/>           
            </div>
        </div>
    )
}
export default Home;