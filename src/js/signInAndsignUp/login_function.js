import { signInEmail, signUpEmail, signInGoogle } from "./firebase";

const signup = document.getElementById("sign-up");
signin = document.getElementById("sign-in");
loginin = document.getElementById("login-in");
loginup = document.getElementById("login-up");

signup.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.id == 'sign-in') {
        signInEmail(email.value, pw.value).then((result) => {
            console.log(result);
            const user = result.user;
            signInSuccess(user.email);
        });
    } else if(e.target.id == 'sign-up') {
        signUpEmail(email.value, password.value).then((result) => {
            const user = result.user;
            signInSuccess(user.email);
        })
        .catch((error) => console.log(error));
    }
});

// Google 로그인
google.addEventListener('click', (e) => {
    signInGoogle().then((result) => {
        console.log(result);
        const user = result.user;
        signInSuccess(user.email, user.uid);
    });
});

// 로그인 성공시 UI 변경
const signInSuccess = (email) => {
    const signIn_area = document.getElementById('signIn-area');
    login_area.innerHTML = `<h2>Login 성공!</h2><div>email: ${email}</div>`;
}


/*signup.addEventListener("click", () => {
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
})*/
