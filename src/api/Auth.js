// export const setAuthToken = user => {

//     const signedUser = {
//         email: user?.email
//     }

//         .fetch(`http://localhost:5000/users/${user?.email}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(signedUser)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             localStorage.setItem('fantasyCar-token', data.token)
//         })
// }

