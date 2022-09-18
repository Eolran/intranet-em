import { Link } from "react-router-dom";
import '../assets/css/App.css'
import '../assets/css/Nav.css'
import emLogo from '../assets/em_logo.png'

function Logout() {
    localStorage.clear()
    window.location = "/";
}

function Nav() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo);

    return (
        <div className="Nav">
            <nav>
                <Link to={"/list"}>
                    <img src={emLogo} alt="emLogo" />
                </Link>
                <div className="navBtn">
                    {userInfo.isAdmin &&
                        <Link to={"/admin/Add"}>
                            <button>
                                Ajouter un collaborateur
                            </button>
                        </Link>}
                    <Link to={"/user/" + userInfo.id}>
                        <button className='profilePic'>
                            <img src={userInfo.photo} alt="" />
                            <span>
                                {userInfo.firstname + " " + userInfo.lastname}
                            </span>
                        </button>
                    </Link>
                    <button onClick={Logout}>Logout</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav