// import React, {useState, useContext, useEffect} from "react";
// import {useParams,useHistory} from 'react-router-dom'
// import {UserContext} from '../context/UserContext'
// import {register} from './Register'
// import {login} from './Login'


// const Authentication = () => {
//     const history = useHistory()
//     const {isLoggedIn, setIsLoggedIn, setUserToken, setUser } = useContext(UserContext)
//     const [username, setUsername] = useState('')
//     const [password,setPassword] = useState('')

//     useEffect(async () =>{
//         if (isLoggedIn===true){
//             history.push("/home")
//         }
//     }, [isLoggedIn])

//     return(
//         <div>
//             <p>Authentication</p>
//             <form onSubmit={handleSubmit}>
//              <input type="text" placeholder="username" onChange={(ev)
//             => setUsername(ev.target.value)} value={username}></input>
//             <input type="password" placeholder="password" onChange={
//                 (ev) => setPassword(ev.target.value)} value={password}></input>
//                 <button type = "submit"/></form>
//         </div>
//     )
// }

// export default Authentication;