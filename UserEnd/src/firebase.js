import {getStorage} from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDtYmyg3dJpwfip8i4ZNSHLlHbQz7-UNMI",
    authDomain: "guestroombooking.firebaseapp.com",
    projectId: "guestroombooking",
    storageBucket: "guestroombooking.appspot.com",
    messagingSenderId: "957173059314",
    appId: "1:957173059314:web:a04c685f16a4b5d5080a6b"
  };
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)



