import './style.css'
const Sidebar = () => {
    return(
        <div className="sidebar flex column full-height grey-bg">
            <h2>Dashbord</h2>
            <ul className='sidebar-list flex column full-height bold'>
                <li className='option-bg clickable'>
                    Users
                </li>
                <li className='option-bg clickable'>
                    Cars
                </li>
            </ul>
        </div>
    )
} 

export default Sidebar