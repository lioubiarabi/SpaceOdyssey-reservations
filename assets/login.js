
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let email = document.getElementById("email").value,
        password = document.getElementById("password").value;

    login(email, password).then(res => {
        Notiflix.Report.success(
            'Success',
            res,
            'Okay',
        );
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
if(userLogin()) {
    Notiflix.Report.warning(
        "warning!",
        "You're already logged in",
        "Okay",
        function () {
            window.open("./index.html", "_self")
        }
    );
};

