import './style.css'
const Sidebar = () => {
    return(
        <div className="sidebar flex column full-height white-bg">
            <h2 className='primary-text'>Dashbord</h2>
            <ul className='sidebar-list flex column full-height bold'>
                <li className='option-bg clickable rounded'>
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