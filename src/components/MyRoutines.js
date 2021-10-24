import React, { useContext, useEffect, useState } from 'react'
import { getMyRoutines } from '../utils/CallApi'
import Routine from './Routine'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const MyRoutines = () => {
    const { userToken, isLoggedIn } = useContext(UserContext)
    const [routines, setRoutines] = useState([])
    const history = useHistory()

    useEffect(async () => {
        if(!isLoggedIn) {
            history.push('./Homepage.js')
        } else {
            const personalRoutine = await getMyRoutines(userToken)
            if (personalRoutine){
                setRoutines(personalRoutine)              
            }
        }
    }, [isLoggedIn])
    return (
        <div>
            <div>Personal Routine</div>
            {routines.map((routine,idx)=> {
                return <Routine routine={routine} key={idx}/>
            })}
        </div>
    )
}



export default MyRoutines