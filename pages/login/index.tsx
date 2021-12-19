import { NextApiRequest, NextApiResponse } from "next"
import { FormEvent, useState } from "react"
import Cookie from "js-cookie"



export default function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const [status, setstatus] = useState("");
    const loginHandler = async (ev: FormEvent) => {
        ev.preventDefault()
    
    }

    return (
        <div>
            <h1>Login</h1>
            <form method="post" onSubmit={loginHandler}>
                <label>
                    Username: 
                    <input type="text" name="username" value={username} onChange={(ev)=>{setusername(ev.target.value)}} />
                </label> <br /><hr />
                <label>
                    Password:
                    <input type="password" value={password} onChange={ (ev) => {
                        setpassword(ev.target.value)
                    } } name="password" />
                </label> <br /><hr />
                <input type="submit" value="Submit" />
                <p>{status}</p>
            </form>
        </div>
    )
}


