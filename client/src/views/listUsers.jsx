import { useSelector } from 'react-redux'
import '../assets/css/App.css'
import '../assets/css/List.css'
import Nav from '../components/Nav'
import { ShowList } from '../services/api.service.js';
import UserCard from '../components/UserCard'


function ListUsers() {
    ShowList();

    const user = useSelector((state) => 
    state.user
  )

    return (
        <div className="App">
            <Nav />
            <button onClick={ShowList}>List</button>
            <div className='List'>
                <div className='Search'>
                    <input type="text" placeholder='Recherche' />
                    Rechercher par : 
                    <select name="noms" id="">
                        <option value="">Tous</option>
                    </select>
                    <select name="categorie" id="">
                        <option value="">Tous</option>
                    </select>
                </div>
                <div className='UsersList'>
                    { 
                        user.map((user, i) => <UserCard user = {user} key={Date.now + i} />)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ListUsers