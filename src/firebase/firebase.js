import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA62nY1-Y5tW4MLGpae8q-grcaa-Ai18h4",
    authDomain: "aprendendo-firebase-c5341.firebaseapp.com",
    databaseURL: "https://aprendendo-firebase-c5341.firebaseio.com",
    projectId: "aprendendo-firebase-c5341",
    storageBucket: "aprendendo-firebase-c5341.appspot.com",
    messagingSenderId: "387535528075"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth
};