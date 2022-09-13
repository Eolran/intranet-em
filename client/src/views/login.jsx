import React, { useState } from 'react';
import '../assets/css/App.css'
import '../assets/css/login.css'

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
        <div>
            <div className='title'>
                <img src="../assets/em_logo.png" alt="em_logo"/>
                <span>Bienvenue dans l'Intranet de l'École Multimédia</span>
            </div>
            <div className="login">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' onChange={e => setUserName(e.target.value)} />
                    <input type="password" placeholder='Mot de passe' onChange={e => setPassword(e.target.value)} />
                    <div>
                        <button type="submit">Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login