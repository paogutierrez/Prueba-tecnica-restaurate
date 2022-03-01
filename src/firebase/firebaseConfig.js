
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtzuXarN9K4DgEX3UzCCv4OajswOak56I",
  authDomain: "rissoto-35044.firebaseapp.com",
  projectId: "rissoto-35044",
  storageBucket: "rissoto-35044.appspot.com",
  messagingSenderId: "797804128723",
  appId: "1:797804128723:web:5652e24b9993beb0f4a726"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();


export{ 
    app,
    google
}