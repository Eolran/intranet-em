import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { UserEdit, UserDetails } from '../services/api.service.js';
import '../assets/css/App.css'
import '../assets/css/login.css'
import ListUsers from './listUsers'



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
            urlID,
        );
        // window.location = "/user";
    }
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const urlID = window.location.href.split("=")[1];

    if (userInfo.isAdmin == false && userInfo.id != urlID) {
        return <ListUsers />
    }

    const [UserInfos, setUserInfos] = useState(null)
    useEffect(() => {
        const User = UserDetails(urlID)
        User.then((res) => {
            console.log(res);
            setUserInfos(res);

            setEmail(res.email);
            setPhone(res.phone);
            setGender(res.gender);
            setCity(res.city);
            setCountry(res.country);
            setPhoto(res.photo);
            setFirstname(res.firstname);
            setLastname(res.lastname);
            setDoB(res.birthdate);
            setService(res.service);


        })
    }, []);

    return (
        <div className='LoginApp'>
            <div className='d-flex flex-column flex-center'>
                <div className='title'>
                    <img src="../assets/em_logo.png" alt="em_logo" />
                    <span>Editer un profil de collaborateur à l'Intranet de l'École Multimédia</span>
                </div>
                <div className="EditAdd">
                    {UserInfos &&
                        <form onSubmit={handleSubmit}>
                            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} defaultValue={UserInfos.email} />
                            <input type="password" placeholder='Mot de passe' onChange={e => setPassword(e.target.value)} />
                            <input type="password" placeholder='Confirmation' />
                            <input type="text" placeholder='Nom' onChange={e => setLastname(e.target.value)} defaultValue={UserInfos.lastname} />
                            <input type="text" placeholder='Prénom' onChange={e => setFirstname(e.target.value)} defaultValue={UserInfos.firstname} />
                            <select name="service" id="service" placeholder='Service' onChange={e => setService(e.target.value)}>
                                <option value="Client">Client</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Technique">Technique</option>
                            </select>
                            <input type="text" placeholder='Téléphone' onChange={e => setPhone(e.target.value)} defaultValue={UserInfos.phone} />
                            <input type="text" placeholder='Ville' onChange={e => setCity(e.target.value)} defaultValue={UserInfos.city} />
                            <input type="text" placeholder='Pays' onChange={e => setCountry(e.target.value)} defaultValue={UserInfos.country} />
                            <select name="gender" id="gender" placeholder='Civilité' onChange={e => setGender(e.target.value)} defaultValue={UserInfos.gender}>
                                <option value="male">Homme</option> 
                                <option value="female">Femme</option>
                            </select>
                            <input type="date" placeholder='Date de naissance' onChange={e => setDoB(e.target.value)} defaultValue={UserInfos.birthdate} />
                            <input type="text" placeholder='Photo' onChange={e => setPhoto(e.target.value)} defaultValue={UserInfos.photo} />
                            <div>
                                <button type="submit">Editer un collaborateur</button>
                            </div>
                        </form>}
                </div>
            </div>
        </div>
    )
}

export default EditUser