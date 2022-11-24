"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obj_user = exports.movies = exports.email = void 0;

var _firebaseApp = require("https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js");

var _firebaseDatabase = require("https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js");

var _firebaseAuth = require("https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDpPAcdVQmUoLwiXTEO_6PRuzloKDjYX3A",
  authDomain: "auth-test-web-1-4ae93.firebaseapp.com",
  databaseURL: "https://auth-test-web-1-4ae93-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-test-web-1-4ae93",
  storageBucket: "auth-test-web-1-4ae93.appspot.com",
  messagingSenderId: "977888738182",
  appId: "1:977888738182:web:98e6f6f6a04f0089914a07",
  measurementId: "G-6NFEXG2TZW"
}; // Initialize Firebase

var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var database = (0, _firebaseDatabase.getDatabase)(app);
var auth = (0, _firebaseAuth.getAuth)();
var email;
exports.email = email;
var movies;
exports.movies = movies;
var obj_user;
exports.obj_user = obj_user;
exports.email = email = document.getElementById('email').value;
var signInbtn = document.getElementById('signInBtn');
signInbtn.addEventListener('click', function (e) {
  exports.email = email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  exports.movies = movies = [];
  exports.obj_user = obj_user = {
    user: email,
    mv: movies
  };
  (0, _firebaseAuth.signInWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
    // Signed in 
    var user = userCredential.user;
    var dt = new Date();
    (0, _firebaseDatabase.update)((0, _firebaseDatabase.ref)(database, 'users/' + user.uid), {
      last_login: dt
    });
    alert('User Sign In!'); // localStorage에 user : email 값 추가.

    localStorage.setItem('obj_user', JSON.stringify(obj_user));
  })["catch"](function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
});
/*function goUrl() {
    let link = '../html/LandingPage.html';
    location.href = link;
}
goUrl();*/

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