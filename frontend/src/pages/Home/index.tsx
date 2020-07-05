import React from 'react';
import { Link } from 'react-router-dom'
import { logout } from '../../services/auth'


const Home: React.FC = () => {

    const handleLogout = () => {
        logout();
    }

    return (
        <div>
            <h1>Home</h1>
            <br />
            <Link to="#" onClick={handleLogout}>Logout</Link>
        </div>
    )
}

export default Home;