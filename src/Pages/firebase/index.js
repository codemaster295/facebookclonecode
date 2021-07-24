import firebase from "firebase/app";
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRxfAbRuh_of9gOVSy_uwCVlWdszl7JbM",
    authDomain: "facebook-clone-8f5aa.firebaseapp.com",
    databaseURL: "https://facebook-clone-8f5aa-default-rtdb.firebaseio.com",
    projectId: "facebook-clone-8f5aa",
    storageBucket: "facebook-clone-8f5aa.appspot.com",
    messagingSenderId: "19546402012",
    appId: "1:19546402012:web:e7442c564ce893b53c5819",
    measurementId: "G-CDT9EMS61C"
  };
  firebase.initializeApp(firebaseConfig)
  const storage =firebase.storage();
  export {storage , firebase as default}