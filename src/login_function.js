const signup = document.getElementById("sign-up");
signin = document.getElementById("sign-in");
loginin = document.getElementById("login-in");
loginup = document.getElementById("login-up");

signup.addEventListener("click", () => {
    loginin.classList.remove("block");
    loginup.classList.remove("none");

    loginin.classList.add("none");
    loginup.classList.add("block");
})

signin.addEventListener("click", () => {
    loginin.classList.remove("none");
    loginup.classList.remove("block");

    loginin.classList.add("block");
    loginup.classList.add("none");
})
