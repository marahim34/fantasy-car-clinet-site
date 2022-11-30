export const setAuthToken = user => {

    const currentUser = {
        email: user?.email
    }

    fetch(`https://fantasy-car-server.vercel.app/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('accessToken', data.token);
        })
}

