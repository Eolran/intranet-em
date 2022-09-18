import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/css/App.css'
import '../assets/css/List.css'
import UserCard from '../components/UserCard'
import { ShowList } from '../services/api.service.js';
import { Search } from '../services/search.service.js';
import { REPLACE } from '../store/reducer';


const token = localStorage.getItem('token');
{token && ShowList()}


function ListUsers() {

    const dispatch = useDispatch();

    const SearchValue = useRef("");
    const [select1, setSelect1] = useState("name");
    const [select2, setSelect2] = useState("all");

    let user = useSelector((state) => 
    state.user
  )
    const [usersList, setUsersList] = useState(user);


  useEffect(() => {
    console.log(usersList)
    },
    [usersList]);
    console.log(usersList)


    function OnSearch(e) {
        SearchValue.current = e.target.value;
        Search(SearchValue, user, select1, select2, dispatch, setUsersList)
        // console.log(SearchValue);
        console.log(select1, select2);
    }

    return (
        <div className="App">
            <div className='List'>
                <div className='SearchOutline'>
                    <div className='SearchInline'>
                        <input onInput={(e) => OnSearch(e)} type="text" id='inputSearch' placeholder='Recherche' />
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
                </div>
                <div className='UsersList'>
                    { 
                        usersList.map((user, i) => <UserCard userList= {usersList} setUsersList = {setUsersList} user = {user} key={Date.now + i} />)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ListUsers