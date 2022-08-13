import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDS8wB66it_rmzVeZvanH_y37PUDBo6CF0",
  authDomain: "derana-593e7.firebaseapp.com",
  projectId: "derana-593e7",
  storageBucket: "derana-593e7.appspot.com",
  messagingSenderId: "1079080503545",
  appId: "1:1079080503545:web:7df8f34401bb8d86e5fa28"
});






// import firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyDS8wB66it_rmzVeZvanH_y37PUDBo6CF0",
//   authDomain: "derana-593e7.firebaseapp.com",
//   projectId: "derana-593e7",
//   storageBucket: "derana-593e7.appspot.com",
//   messagingSenderId: "1079080503545",
//   appId: "1:1079080503545:web:7df8f34401bb8d86e5fa28"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();




// import { initializeApp } from "firebase/app";
// import{ getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDS8wB66it_rmzVeZvanH_y37PUDBo6CF0",
//   authDomain: "derana-593e7.firebaseapp.com",
//   projectId: "derana-593e7",
//   storageBucket: "derana-593e7.appspot.com",
//   messagingSenderId: "1079080503545",
//   appId: "1:1079080503545:web:7df8f34401bb8d86e5fa28"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app)