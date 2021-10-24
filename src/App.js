import React,{useContext, useEffect} from 'react';
import { Route } from 'react-router';
import {UserContext} from './context/UserContext';
import {useParams} from 'react-router';
import Homepage from './components/Homepage';
// import Register from './components/Register';
import Profile from './components/Profile';
import Activities from './components/Activities';
import Routines from './components/Routines';
import MyRoutines from './components/MyRoutines';
import LoginRegister from './components/LoginRegister';
import ProfilePage from './components/Profile';

const App = () => {
    const params = useParams();
    const {setUserToken, setIsLoggedIn } = useContext(UserContext)
    return (
        <>
        <Route exact path='/'>
            <Homepage />
        </Route>
        <Route exact path='/Homepage'>
            <Homepage />
        </Route>
        <Route exact path='/profile'>
            <ProfilePage/>
        </Route>
        <Route path='/user/:method'>
                <LoginRegister/>
            </Route>
        <Route exact path='/activities'>
            <Activities/>
        </Route>
        <Route path='/routines'>
            <Routines/>
        </Route>
        <Route path='/myroutines'>
            <MyRoutines/>
        </Route>
        </>
    )
}

export default App;