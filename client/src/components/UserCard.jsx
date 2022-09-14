import { Link } from 'react-router-dom'
import '../assets/css/App.css'
import '../assets/css/Nav.css'

function UserCard({ user }) {

    return (
        <div className="Card">
            <Link to={"/user/"+user.id}>
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
        </div>
    )
}

export default UserCard