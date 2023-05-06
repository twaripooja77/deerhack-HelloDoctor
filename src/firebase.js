// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0nt0j1-zoQAH8zq0reBXL_vMD2Dwdujs",
    authDomain: "hello-doctor-e918a.firebaseapp.com",
    projectId: "hello-doctor-e918a",
    storageBucket: "hello-doctor-e918a.appspot.com",
    messagingSenderId: "909144613439",
    appId: "1:909144613439:web:e31ccce604b544da654e8a",
    measurementId: "G-4VX5QMEZ1X"
  };

  const firebaseApp= initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth= getAuth();
  const provider=new GoogleAuthProvider(auth); 

  export{auth, provider};
  export default db;
