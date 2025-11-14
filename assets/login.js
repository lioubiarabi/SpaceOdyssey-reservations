
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let email = document.getElementById("email").value,
        password = document.getElementById("password").value;

    login(email, password).then(res => {
        Notiflix.Report.success(
            'Success',
            "logged in successfuly",
            'Okay',
        );
        // check if there's a booking
        const isThereBooking = new URLSearchParams(window.location.search).get('booking');
        if (isThereBooking) {
            //get the booking from localStorage
            let tempBooking = JSON.parse(localStorage.getItem("guestBooking"));
            //add a booking
            bookingsDB("add", res.username, tempBooking).then(r => {
                Notiflix.Notify.success('added successfuly');
                setTimeout(() => {
                    window.open("./mybookings.html?id=" + r, "_self");
                }, 2000)
            })
            return;
        }
        //redirection after login
        setTimeout(() => {
            window.open("./index.html", "_self");
        }, 3000);
    }).catch(error => {
        Notiflix.Report.failure(
            'Failure',
            error,
            'Okay',
        );
    });
});

//check if the user is logged in
if (userLogin()) {
    Notiflix.Report.warning(
        "warning!",
        "You're already logged in",
        "Okay",
        function () {
            window.open("./index.html", "_self")
        }
    );
};

