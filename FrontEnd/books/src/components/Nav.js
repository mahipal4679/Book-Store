import React from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img
            alt='logo'
            className='logo'
             src='data:image/jpeg;base64,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' />
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update"> Update Products</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li> <Link onClick={logout} to="/signup">Logout ({ JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }


        </div>
    )
}

export default Nav;