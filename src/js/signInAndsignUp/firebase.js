// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics, set, ref } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDpPAcdVQmUoLwiXTEO_6PRuzloKDjYX3A",
authDomain: "auth-test-web-1-4ae93.firebaseapp.com",
databaseURL: "https://auth-test-web-1-4ae93-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "auth-test-web-1-4ae93",
storageBucket: "auth-test-web-1-4ae93.appspot.com",
messagingSenderId: "977888738182",
appId: "1:977888738182:web:98e6f6f6a04f0089914a07",
measurementId: "G-6NFEXG2TZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const signUp = document.getElementById("signUpBtn");
const signIn = document.getElementById("signInBtn");

signUp.addEventListener('click', (e) => {
    const email = document.getElementById('id').value;
    const password = document.getElementById('pw').value;
    const username = document.getElementById('name').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            set(ref(analytics, 'users/' + user.uid), {
                username: username,
                email: email,

            });
            alert('user created!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 

            alert('errorMessage');
    });
});

/*signIn.addEventListener('click', (e) => {
    const email = document.getElementById('id').value;
    const password = document.getElementById('pw').value;
    const username = document.getElementById('name').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('SignIn Success!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert('errorMessage');
        });
})*/
/**const signup = document.getElementById("signUpBtn");
const signin = document.getElementById("signInBtn");

signup.addEventListener("click", (e) => {
    e.preventDefault();
    signUpEmail(email.value, password.value).then((result) => {
        const user = result.user;
        signInSuccess(user.email);
    })
    .catch((error) => console.log(error));
});

signin.addEventListener("click", (e) => {
    e.preventDefault();
    signInEmail(email.value, pw.value).then((result) => {
        //console.log(result);
        const user = result.user;
        signInSuccess(user.email);
    });
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
    //const signIn_area = document.getElementById('signIn-area');
    login_area.innerHTML = `<h2>Login 성공!</h2><div>email: ${email}</div>`;
}*/