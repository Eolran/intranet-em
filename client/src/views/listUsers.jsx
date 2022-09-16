import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import '../assets/css/App.css'
import '../assets/css/List.css'
import UserCard from '../components/UserCard'
import { ShowList } from '../services/api.service.js';
import { Search } from '../services/search.service.js';


const token = localStorage.getItem('token');
{token && ShowList()}


function ListUsers() {

    const SearchValue = useRef("");
    const [select1, setSelect1] = useState("name");
    const [select2, setSelect2] = useState(null);

    const user = useSelector((state) => 
    state.user
  )


    function OnSearch(e) {
        SearchValue.current = e.target.value;
        Search(SearchValue, user, select1, select2)
        // console.log(SearchValue);
        console.log(select1, select2);
    }

    return (
        <div className="App">
            <div className='List'>
                <div className='Search'>
                    <input onChange={(e) => OnSearch(e)} type="text" id='inputSearch' placeholder='Recherche' />
                    Rechercher par : 
                    <select onChange={(e) => setSelect1(e.target.value)} name="select1" id="select1Search">
                        <option value="name">Noms</option>
                        <option value="place">Localisation</option>
                    </select>
                    <select onChange={(e) => setSelect2(e.target.value)} name="select2" id="select2Search">
                        <option value="all">Tous</option>
                        <option value="Client">Client</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Technique">Technique</option>
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