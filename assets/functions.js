// login operation
function login(email, password) {
    return new Promise((resolve, reject) => {
        (async () => {
            // get the users info
            let res = await fetch("./assets/users.json");
            let data = await res.json();

            // check the users info

            let user = data.find(user => user.email == email);

            if (user && user.password == password) {
                delete user.password;
                sessionStorage.setItem("user", JSON.stringify(user));
                resolve("logged in successfuly");

            } else {
                reject("email/password is incorrect")
            }

        })();
    });
}

// check if the user is logged in and return the user info
function userLogin() {
    let user = sessionStorage.getItem("user");
    let logoutBtns = document.querySelectorAll(".logout");
    let loginBtns = document.querySelectorAll(".login");
    if (user) {
        // logout
        logoutBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // delete user info from storage
                sessionStorage.removeItem("user");

                Notiflix.Report.success(
                    'Logged out successfully',
                    'You will be redirected to the login page',
                    'okay',
                    function () {
                        window.open("./login.html", "_self")
                    }
                );
            })
        });

        // disable login button
        loginBtns.forEach(btn=>{
            btn.style.display = "none";
        });

        return JSON.parse(user);
    }
    else { 
        // disable logout button
        logoutBtns.forEach(btn=>{
            btn.style.display = "none";
        });

        return false
    }
}



