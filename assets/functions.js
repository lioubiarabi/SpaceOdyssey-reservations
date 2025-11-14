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
                resolve(user);

            } else {
                reject("email/password is incorrect")
            }

        })();
    });
}

// check if the user is logged in and return the user info
function userLogin() {
    let user = sessionStorage.getItem("user");
    let logoutPart = document.querySelectorAll(".logout");
    let logoutBtn = document.querySelectorAll(".logout-btn");
    let loginBtn = document.querySelectorAll(".login");
    if (user) {
        // logout
        logoutBtn.forEach(btn => {
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
        loginBtn.forEach(btn => {
            btn.style.display = "none";
        });

        return JSON.parse(user);
    }
    else {
        // disable logout part
        logoutPart.forEach(btn => {
            btn.style.display = "none";
        });

        return false
    }
}

// bookings database
let newId = "ID" + (Math.floor(Math.random() * 90000) + 10000);
function bookingsDB(action, username, obj, id = newId ) {
    let storedData = localStorage.getItem("bookings");
    let bookings = storedData ? JSON.parse(storedData) : {};
    if (!bookings[username]) {
        bookings[username] = {};
    }

    return new Promise((resolve, reject) => {
        switch (action) {
            case "add":
                bookings[username][newId] = obj;
                localStorage.setItem("bookings", JSON.stringify(bookings));
                resolve(id);
                break;
            case "cancel":

                break;
            case "get":
                if (Object.keys(bookings).length > 0) {
                    resolve(bookings[username]);
                } else {
                    reject(`No bookings found for user: ${username}`);
                }
                break;
        }
    });
}



