import { Link } from 'react-router-dom'
import { DeleteUser } from '../services/api.service.js';
import '../assets/css/App.css'
import '../assets/css/Nav.css'

const userInfo = JSON.parse(localStorage.getItem('userInfo'));

function UserCard({ user }) {

    function handleDelete() {
        DeleteUser(user.id);
        window.location = "/list";
    }

    return (
        <div className="Card">
            <Link to={"/user/" + user.id}>
                <div className='CardInfo'>
                    <div>
                        <img src={user.photo} alt="avatar" />
                    </div>
                    <div className='UserInfo'>
                        <span>
                            <b>{user.firstname} {user.lastname}</b>
                        </span>
                        <span>
                            {user.city}, {user.country}
                        </span>
                        <span>
                            {user.email}
                        </span>
                        <span>
                            {user.phone}
                        </span>
                    </div>
                    <span className='tag'>
                        {user.service}
                    </span>
                </div>
            </Link>

            {(userInfo.isAdmin || userInfo.id == user.id) &&
                <div className='btnsAdmin'>
                    <Link to={"/admin/Edit?id="+user.id}>
                        <button>Éditer</button>
                    </Link>
                    {userInfo.isAdmin && <button onClick={handleDelete}>Supprimer</button>}
                </div>}
        </div>
    )
}

export default UserCard