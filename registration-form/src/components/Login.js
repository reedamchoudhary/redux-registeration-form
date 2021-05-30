import React, {useEffect, useState} from 'react'

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <h1>Register Yourself!</h1>
            <input type="text" placeholder="Enter your username" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="phone" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
    )
}

export default Login
