import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { loginUser } from '../services/api.service.js';
import '../assets/css/App.css'
import '../assets/css/login.css'
import ListUsers from './listUsers'

const token = localStorage.getItem('token');

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser({

            "email": username,
            "password": password
        });
        //ShowList();
        window.location = "/random";
    }

    if(token) {
        return <ListUsers />
      }

    return (
        <div className='LoginApp'>
            <div className='d-flex flex-column flex-center'>
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
        </div>
    )
}

export default Login