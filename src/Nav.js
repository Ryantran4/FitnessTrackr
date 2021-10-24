import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from './context/UserContext';


const Title = () => {
    const { setUser, isLoggedIn, setIsLoggedIn, setUserToken} = useContext(UserContext)
    const signOut = () => {
        setIsLoggedIn(false)
        setUserToken('')
        setUser('')
        localStorage.setItem('userToken', '')
    }

    return (
        <div id='container'>
        <header id="header">
            <h1>Fitness Tracker</h1>
        </header>

            <div id='navbar'>
                <Link to="/Homepage" style={{ color: '#FFFFFF'}}>Home</Link>
                <Link to="/activities" style={{ color: '#FFFFFF'}}>Activities</Link>
                <Link to="/routines" style={{ color: '#FFFFFF'}}>Routines</Link>
                    {
                        isLoggedIn ? (<>
                        <Link to="/myRoutines" style={{ color: '#FFFFFF'}}>My Routines</Link>
                        <Link to="/" onClick ={signOut} style={{ color: '#FFFFFF'}}>Sign Off</Link>
                        <Link to="/profile" style={{ color: '#FFFFFF'}}>Profile</Link>
                        
                        </>): (<>
                        <Link to="/user/login" style={{ color: '#FFFFFF'}}>Login</Link>
                        <Link to="/user/register" style={{ color: '#FFFFFF'}}>Register</Link>
                        </>)
                    }
            </div>
        </div>
    )
}


export default Title;