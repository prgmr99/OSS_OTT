import { signInEmail, signUpEmail, signInGoogle } from "./firebase";

const signup = document.getElementById("signup_id");
signin = document.getElementById("signin_id");

signup.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.id == 'sign-up') {
        signUpEmail(email.value, password.value).then((result) => {
            const user = result.user;
            signInSuccess(user.email);
        })
        .catch((error) => console.log(error));
    }
});

signin.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.id == 'sign-in') {
        signInEmail(email.value, pw.value).then((result) => {
            console.log(result);
            const user = result.user;
            signInSuccess(user.email);
        });
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