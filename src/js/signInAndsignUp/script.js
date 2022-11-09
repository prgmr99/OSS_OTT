import { signInEmail, signUpEmail, signInGoogle } from './firebase.js';
const buttons = document.getElementById('buttons');

// Email 로그인, 회원가입 구현
buttons.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.id == 'signin') {
        signInEmail(email.value, pw.value).then((result) => {
            console.log(result);
            const user = result.user;
            signInSuccess(user.email, user.uid);
        });
    } else if(e.target.id == 'signup') {
        signUpEmail(email.value, password.value).then((result) => {
            const user = result.user;
            signInSuccess(user.email, user.uid);
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
const signInSuccess = (email, uid) => {
    const signIn_area = document.getElementById('signIn-area');
    login_area.innerHTML = `<h2>Login 성공!</h2><div>uid: ${uid}</div><div>email: ${email}</div>`;
}