import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useHistory } from 'react-router'
import { getMe } from '../utils/CallApi'
import { Card, Typography} from "@material-ui/core"

const ProfilePage = () => {
    const history = useHistory()
    const { userToken, isLoggedIn } = useContext(UserContext)
    const [ username, setUsername ] = useState('')
    const [ id, setId] = useState('')

    useEffect(async () => {
        if(!isLoggedIn) {
            history.push('/homepage')
        } else {
            const user = await getMe(userToken)
            if (user) {
                setId(user.id)
                setUsername(user.username)
            }
        }
    }, [isLoggedIn])

    return (
        <Card id = "profile">
            <div>{username? `Username:${username}`:null}</div>
            <div>{id? `User Id #:${id}`:null}</div>
            
        </Card>
    )
}
    
export default ProfilePage