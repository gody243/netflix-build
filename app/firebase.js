 
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBNSLeegEGG3OfbUEjbl9Wdg6NPtJmnkX8",
    authDomain: "netflix-clone-358be.firebaseapp.com",
    projectId: "netflix-clone-358be",
    storageBucket: "netflix-clone-358be.appspot.com",
    messagingSenderId: "1091500806480",
    appId: "1:1091500806480:web:1d9bf99fd4bbb2cea9dc55"
  };

  const firebaseApp=initializeApp(firebaseConfig)
  const db=getFirestore(firebaseApp)
  const auth=getAuth(firebaseApp)

  export{auth}
  export default db