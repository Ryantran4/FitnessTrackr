import React, { useContext , useState } from 'react'
import { UserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useHistory } from 'react-router'
import { deleteRoutine } from '../utils/CallApi';
import { Card, CardContent, CardHeader} from "@material-ui/core"


const Activity = ( activity ) => {
    const {creatorId, duration, name, goal, count} = activity.activity
    return (
        <div id ="routines">
            <div>{creatorId}</div>
            <div>{ name }</div>
            <div>{ goal }</div>
            <div>Count:{ count } </div>
            <div>Duration: { duration }s</div>
        </div>
    )
}

const Routine = (routine) => {
    const history = useHistory()
    const [ isOwner, setIsOwner ] = useState(true)
    const { user } = useContext(UserContext)
    const { id, name, goal, creatorName, activities } = routine.routine

    useEffect(() =>{
        if (creatorName == user) {
            setIsOwner(true)
        } else {
            setIsOwner(false)
        }
    })
    const _deleteRoutine = async()=> {
        const deletedRoutine = await deleteRoutine(localStorage.getItem('userToken'), id)
        if (deletedRoutine) {
            history.push('./MyRoutines.js')
        }
    }

    return (
        <Card id = "routine">
            <CardHeader>{ name }</CardHeader>
            <CardContent>{ creatorName }</CardContent>
            <CardContent>{ goal }</CardContent>
            <CardContent>{ isOwner }</CardContent>
            <button onClick={_deleteRoutine}>Delete Routine</button>
            {activities.map((activity, idx) => {
                return <Activity activity={activity} key={idx}/>
            })}
        </Card>
    )

}

export default Routine