import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { UserEdit } from '../services/api.service.js';
import '../assets/css/App.css'
import '../assets/css/login.css'



function EditUser() {
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
        const data = UserEdit(
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
            //Ajouter ID
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
                    <img src="../assets/em_logo.png" alt="em_logo" />
                    <span>Editer un profil de collaborateur à l'Intranet de l'École Multimédia</span>
                </div>
                <div className="EditAdd">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder='Mot de passe' onChange={e => setPassword(e.target.value)} />
                        <input type="password" placeholder='Confirmation' onChange={e => e.target.value? password:"Pas Le même mot de passe"} />
                        <input type="text" placeholder='Nom' onChange={e => setLastname(e.target.value)} />
                        <input type="text" placeholder='Prénom' onChange={e => setFirstname(e.target.value)} />
                        <input type="text" placeholder='Service' onChange={e => setService(e.target.value)} />
                        <input type="text" placeholder='Téléphone' onChange={e => setPhone(e.target.value)} />
                        <input type="text" placeholder='Ville' onChange={e => setCity(e.target.value)} />
                        <input type="text" placeholder='Pays' onChange={e => setCountry(e.target.value)} />
                        <input type="text" placeholder='Civilité' onChange={e => setGender(e.target.value)} />
                        <input type="text" placeholder='Date de naissance' onChange={e => setDoB(e.target.value)} />
                        <input type="text" placeholder='Photo' onChange={e => setPhoto(e.target.value)} />
                        <div>
                            <button type="submit">Editer un collaborateur</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser