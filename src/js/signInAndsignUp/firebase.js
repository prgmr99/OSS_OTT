// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,    // authentication 설정
    signInWithPopup,    // google 로그인을 팝업창에 띄우기 위해
    GoogleAuthProvider, // google 로그인 기능
    signInWithEmailAndPassword,  // email 로그인
    createUserWithEmailAndPassword  // email 회원가입
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    authDomain: "auth-test-web-1.firebaseapp.com",
    projectId: "auth-test-web-1",
    storageBucket: "auth-test-web-1.appspot.com",
    messagingSenderId: "aaaaaaaaaaaaaa",
    appId: "1:aaaaaaaaaaaaaaa:web:aaaaaaaaaaaaaaaa",
    //measurementId: "G-6NFEXG2TZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정
const auth = getAuth();

// Email 회원가입
export const signUpEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Email 로그인
export const signInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

// Google 로그인
const provider = new GoogleAuthProvider();
export const signInGoogle = () => {
    return signInWithPopup(auth, provider);
};