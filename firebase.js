// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGU_un3csIKs15LkYD_J4KZuLL1QS0B4k",
  authDomain: "carbon-footprint-17dec.firebaseapp.com",
  projectId: "carbon-footprint-17dec",
  storageBucket: "carbon-footprint-17dec.appspot.com",
  messagingSenderId: "416592436162",
  appId: "1:416592436162:web:c48f4f2a60004914c1d45b",
  measurementId: "G-642GMWPCXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize databases
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// if (app.name && typeof window !== 'undefined') {
//   analytics = getAnalytics(app)
// }

// module.exports.auth = auth
// module.exports.db = db