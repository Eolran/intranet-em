import React, { useState } from 'react';
import '../assets/css/App.css'

async function loginUser(credentials) {
    let response = await fetch('http://localhost:7000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      
    if (response.status == 200) {
        let data = await response.json();
        console.log(data.token);
        localStorage.setItem('token', data.token);
    }
}

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser({
            
            "email": username,
            "password": password
        });
      }

    return (
        <div className="App">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Connexion</button>
                </div>
            </form>
        </div>
    )
}

export default Login