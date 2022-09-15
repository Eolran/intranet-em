import { useSelector } from 'react-redux'
import '../assets/css/App.css'
import '../assets/css/List.css'
import UserCard from '../components/UserCard'
import { ShowList } from '../services/api.service.js';


const token = localStorage.getItem('token');
{token && ShowList()}

function ListUsers() {

    const user = useSelector((state) => 
    state.user
  )
  console.log(user);

    return (
        <div className="App">
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