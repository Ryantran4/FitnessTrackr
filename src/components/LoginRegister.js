import React, {useState, useContext, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import {register, login} from '../utils/CallApi'
import {TextField} from "@material-ui/core";

const LoginRegister = () =>{
    const history = useHistory()
    const params = useParams()
    const {isLoggedIn, setIsLoggedIn, setUserToken, setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(async ()=>{
        if (isLoggedIn===true){
            history.push("/homepage")
        }
    }, [isLoggedIn])

    return(
        <div>
    <form onSubmit={async event=>{
        event.preventDefault()
        if (params.method=='register') {
            const registerData = await register({username:username, password:password})
            if(registerData && !registerData.name) {
                localStorage.setItem("userToken", registerData.token);
                setUserToken(registerData.token)
                setIsLoggedIn(true)
                setUser(username)
            }else{
                alert('failed')
            }
        }
        if (params.method=='login') {
            const loginData = await login({username:username, password:password})
            console.log(loginData)
            if (loginData && !loginData.name) {
                localStorage.setItem("userToken", loginData.token);
                setUserToken(loginData.token)
                setIsLoggedIn(true)
                setUser(username)
            }
        }

    }}>
        <TextField variant="standard"  label='Username' type='text' id='username' name='username' onChange={(event)=>{
            setUsername(event.target.value)
            }}/>
        <br/>
        <TextField variant="standard" label='Password' type='password' id='password' name='password'  onChange={(event)=>{
            setPassword(event.target.value)
        }}/>
        <br/>
        <button type='submit'>Submit</button>
    </form>
    </div>
    )
}

export default LoginRegister;