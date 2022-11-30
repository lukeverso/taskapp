import firebase from 'firebase/compat';
import 'firebase/storage';

const firebaseConfig = {
     apiKey: "AIzaSyA_1mN30yNXsqdZTYj7cDaggZCxObwDZ0s",
     authDomain: "expotaskapp.firebaseapp.com",
     projectId: "expotaskapp",
     storageBucket: "expotaskapp.appspot.com",
     messagingSenderId: "453962613505",
     appId: "1:453962613505:web:3052c48f4096d34ec69100",
     measurementId: "G-FH9F9QZLJK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;