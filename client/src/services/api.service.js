export async function loginUser(credentials) {
    let response = await fetch('http://localhost:7000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    if (response.status == 200) {
        let data = await response.json();
        console.log(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.user));
    }
}

export async function ShowList() {
    const token = localStorage.getItem('token');

    let response = await fetch('http://localhost:7000/api/collaborateurs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
    })

    if (response.status == 200) {
        let data = await response.json();

        localStorage.setItem('usersList', JSON.stringify(data));
    }
}

export async function UserDetails(id) {
    const token = localStorage.getItem('token');

    let response = await fetch('http://localhost:7000/api/collaborateurs/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
    })

    if (response.status == 200) {
        let data = await response.json();
        console.log(data);

        return data;
    }
}

export async function UserRandom() {
    const token = localStorage.getItem('token');

    let response = await fetch('http://localhost:7000/api/collaborateurs/random', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
    })

    if (response.status == 200) {
        let data = await response.json();
        console.log(data);

        return data;
    }
}

export async function addUser(credentials) {
    const token = localStorage.getItem('token');

    let response = await fetch('http://localhost:7000/api/collaborateurs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(credentials),
    })

    if (response.status == 201) {
        let data = await response.json();
        console.log(data);
    } else {
        console.log(response);
    }
}

export async function DeleteUser(id) {
    const token = localStorage.getItem('token');

    let response = await fetch('http://localhost:7000/api/collaborateurs/'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
    })

    if (response.status == 200) {
        let data = await response.json();
        console.log(data);
    } else {
        console.log(response);
    }
}

export async function UserEdit(credentials, id) {
    const token = localStorage.getItem('token');

    let response = await fetch('http://localhost:7000/api/collaborateurs/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(credentials),
    })

    if (response.status == 201) {
        let data = await response.json();
        console.log(data);
    } else {
        console.log(response);
    }
}