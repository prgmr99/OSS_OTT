import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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
const database = getDatabase(app);
const auth = getAuth();

function goUrl() {
    let link = '../html/LandingPage.html';
    location.href = link;
}

export let email;
export let movies;
export let obj_user;

const signInBtn = document.getElementById('signInBtn').value;
console.log(signInBtn);
signInBtn.addEventListener('click', (e) => {
    email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    movies = [];
    
    obj_user = {
        user : email,
        mv : movies
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const dt = new Date();
        update(ref(database, 'users/' + user.uid), {
            last_login: dt
        })
        alert('User Sign In!');
        // localStorage에 user : email 값 추가.
        localStorage.setItem('obj_user', JSON.stringify(obj_user));
        goUrl();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        alert(errorMessage);
    })
});




/*
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // 유저 로그아웃 구현 가능.
    }
});*/

// 로그아웃 -> 나중에 아래의 signOut함수만 호출하면 로그아웃이 된다.
/**logout.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('User Sign Out!');
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        alert(errorMessage);
    })
});*/
