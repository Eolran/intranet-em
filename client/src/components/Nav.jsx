import '../assets/css/App.css'
import '../assets/css/Nav.css'

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
                <img src="test" alt="test" />
                <div>
                    {userInfo.isAdmin && 
                    <button>
                        Ajouter un collaborateur
                    </button>}
                    <button className='profilePic'>
                        <img src={userInfo.photo} alt="" />
                        <span>
                            {userInfo.firstname + " " + userInfo.lastname}
                        </span>
                    </button>
                    <button onClick={Logout}>Logout</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav