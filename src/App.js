import React,{useContext} from 'react';

import {UserContext} from './UserContext';
import { Route, useParams } from 'react-router';
import Homepage from './Homepage';
import Register from './components/Register';

const App = () => {
    const params = useParams();
    return (
        <>
        <Route exact path='/Home'>
            <Homepage />
        </Route>
        <Route exact path='/account/:method'>
            {
            params.method==='login' ? 
            <Login  /> :
            <Register /> 
            }   
   
        </Route>
        {/* <Route exact path='/Profile'>
            <Messages token={token}/>
        </Route> */}
        </>
    )
}

export default App;