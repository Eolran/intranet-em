import { useEffect, useState } from 'react';
import '../assets/css/App.css'
import '../assets/css/UserDetails.css'
import { UserDetails } from '../services/api.service.js';


function User() {
    const [UserInfos, setUserInfos] = useState(null)


    useEffect(() => {
        const url = window.location.href;
        const User = UserDetails(url.split("/")[4])
        User.then((res) => {
            console.log(res);
            setUserInfos(res);
        })
    }, []);

    return (
        <div>
            <div className="CardDetail">
                {UserInfos &&
                    <div className='CardInfo'>
                        <div>
                            <img src={UserInfos.photo} alt="avatar" />
                        </div>
                        <div className='UserInfo'>
                            <span>
                                <b>{UserInfos.firstname + " " + UserInfos.lastname}</b>
                            </span>
                            <span>
                                {UserInfos.city}
                            </span>
                            <span>
                                {UserInfos.email}
                            </span>
                            <span>
                                {UserInfos.phone}
                            </span>
                        </div>
                        <span className='tag'>
                            {UserInfos.service}
                        </span>
                    </div>}
            </div>

            <button onClick={() => window.location.href = "/list"}>
                Retourner à la liste complète des collaborateurs
            </button>
        </div>
    )
}

export default User