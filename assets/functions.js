// login operation
function login(email, password) {
    return new Promise((resolve, reject)=> {
        (async () => {
            // get the users info
            let res = await fetch("./assets/users.json");
            let data = await res.json();

            // check the users info

            let user = data.find(user => user.email == email);
            

        })();
    });
}