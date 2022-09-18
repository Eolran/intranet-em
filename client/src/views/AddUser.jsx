import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addUser } from '../services/api.service.js';
import '../assets/css/App.css'
import '../assets/css/login.css'
import emLogo from '../assets/em_logo.png'



function AddUser() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [gender, setGender] = useState();
    const [city, setCity] = useState();
    const [photo, setPhoto] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [DoB, setDoB] = useState();
    const [country, setCountry] = useState();
    const [service, setService] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await addUser(
            {
                "gender": gender,
                "firstname": firstname,
                "lastname": lastname,
                "password": password,
                "email": email,
                "phone": phone,
                "birthdate": DoB,
                "city": city,
                "country": country,
                "photo": photo,
                "service": service
            },
        );
        // window.location = "/user";
    }

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo.isAdmin == false) {
        return <ListUsers />
    }

    return (
        <div className='LoginApp'>
            <div className='d-flex flex-column flex-center'>
                <div className='title'>
                    <img src={emLogo} alt="em_logo" />
                    <span>Ajouter un collaborateur à l'Intranet de l'École Multimédia</span>
                </div>
                <div className="EditAdd">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder='Mot de passe' onChange={e => setPassword(e.target.value)} />
                        <input type="text" placeholder='Nom' onChange={e => setLastname(e.target.value)} />
                        <input type="text" placeholder='Prénom' onChange={e => setFirstname(e.target.value)} />
                        <select name="service" id="service" placeholder='Service' onChange={e => setService(e.target.value)}>
                            <option value="Client">Client</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Technique">Technique</option>
                        </select>
                        <input type="text" placeholder='Téléphone' onChange={e => setPhone(e.target.value)} />
                        <input type="text" placeholder='Ville' onChange={e => setCity(e.target.value)} />
                        <input type="text" placeholder='Pays' onChange={e => setCountry(e.target.value)} />
                        <select name="gender" id="gender" placeholder='Civilité' onChange={e => setGender(e.target.value)}>
                            <option value="male">Homme</option> 
                            <option value="female">Femme</option>
                        </select>
                        <input type="date" placeholder='Date de naissance' onChange={e => setDoB(e.target.value)} />
                        <input type="text" placeholder='Photo' onChange={e => setPhoto(e.target.value)} />
                        <div>
                            <button type="submit">Ajouter un collaborateur</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser