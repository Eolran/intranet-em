import { useEffect, useState } from 'react';
import '../assets/css/App.css'
import '../assets/css/UserDetails.css'
import { UserRandom } from '../services/api.service.js';

function Random() {
    const [UserInfos, setUserInfos] = useState(null)

    useEffect(() => {
        const RandomUser = UserRandom();
        RandomUser.then((res) => {
        console.log(res);
        setUserInfos(res);
    })
    }, []);
    

    return (
        <div className='d-flex flex-column'>
            <h1>Découvrez un collaborateur au hasard !</h1>
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

            <button className='btnCollab' onClick={() => window.location.href = "/list"}>
                Voir la liste complète des collaborateurs
            </button>
        </div>
    )
}

export default Random