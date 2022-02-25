import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMi6iBGFyyGLVLQ1hFGh1M-W0aypKqpDY",
    authDomain: "spaceward-c9b98.firebaseapp.com",
    projectId: "spaceward-c9b98",
    storageBucket: "spaceward-c9b98.appspot.com",
    messagingSenderId: "730226921774",
    appId: "1:730226921774:web:fb30ceda2deffe4f1daabf",
    measurementId: "G-ZMJ3ZJBZF9"
};

const firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;