import React, {userContext} from 'react';
import {BrowserRouter, Link } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import { Typography, AppBar,makeStyles } from '@material-ui/core';

const Title = (props) => {
    return (
        <div id='container'>
        <header id="header">
            <h1>Fitness Tracker</h1>
        </header>

            <div id='navbar'>
                <Link to="/Homepage" style={{ color: '#FFFFFF'}}>Home</Link>
                <Link to="/activities" style={{ color: '#FFFFFF'}}>Activities</Link>
                <Link to="/routines" style={{ color: '#FFFFFF'}}>Routines</Link>
                <Link to="/users/login" style={{color: '#FFFFFF'}}>Login</Link>
                <Link to="/users/register" style={{color: '#FFFFFF'}}>Register</Link>

            </div>
        </div>
    )
}


export default Title;