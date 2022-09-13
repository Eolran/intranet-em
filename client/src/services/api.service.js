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
        console.log(data);

        localStorage.setItem('usersList', JSON.stringify(data));
    }
}