import '../assets/css/App.css'
import '../assets/css/Nav.css'

function Logout() {
    localStorage.clear()
    window.location = "/";
}

function Nav() {

    return (
        <div className="Nav">
            <nav>
                <img src="test" alt="test" />
                <div>
                    {/* <div>
                        if admin
                    </div> */}
                    <button>List</button>
                    <button>Own</button>
                    <button onClick={Logout}>Logout</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav