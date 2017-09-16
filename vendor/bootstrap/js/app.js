 (function() {
    var config = {
    apiKey: "AIzaSyAUf5W2UG7ehlOvMbW3eK4iEWV24xvaLPQ",
    authDomain: "bankhutan98.firebaseapp.com",
    databaseURL: "https://bankhutan98.firebaseio.com",
    projectId: "bankhutan98",
    storageBucket: "bankhutan98.appspot.com",
    messagingSenderId: "292797608486"
  };
  firebase.initializeApp(config); 
     
     const txtEmail = document.getElementById('email');
     const txtPass = document.getElementById('password');
     const btnSignUp = document.getElementById('btnSignUp');
     const btnLogin = document.getElementById('btnLogin');
     
     btnLogin.addEventListener('click', e => {
         const email = txtEmail.value;
         const pass = txtPass.value;
         const auth = firebase.auth();
         
         const promise = auth.signInWithEmailAndPassword(email,pass);
         promise.catch(e => console.log(e.message));
     });
     
 }());