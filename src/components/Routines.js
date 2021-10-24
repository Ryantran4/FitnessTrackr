import React, { useState, useContext, useEffect } from 'react'
import { getAllRoutines } from '../utils/CallApi'
import Routine from './Routine'

function Routines() {
    const [ routines, setRoutines ] = useState([])

    useEffect(async () => {
        const _routines= await getAllRoutines()
        if (_routines) {
            setRoutines(_routines)
        }
    }, [])

    return (
        <div>
            <div>Routines</div>
            {routines.map((routine, idx)=>{
                return <Routine routine={routine} key={idx}/>
            })}
        </div>
    )
}

export default Routines