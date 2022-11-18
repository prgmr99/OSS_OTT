import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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

signUpBtn.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email
        })
        alert('user created!');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message; 

        alert(errorMessage);
    })
});
