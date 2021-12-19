import {initializeApp, FirebaseApp, FirebaseOptions, getApp, getApps} from 'firebase/app'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var app : FirebaseApp
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig : FirebaseOptions = {
  apiKey: "AIzaSyDly_ss8sqbsScLPoOcgiPLx6bhrnWn2zk",
  authDomain: "somewebshitserver.firebaseapp.com",
  projectId: "somewebshitserver",
  storageBucket: "somewebshitserver.appspot.com",
  messagingSenderId: "557459053094",
  appId: "1:557459053094:web:0171d055881ab65c5ee4e7",
  measurementId: "G-3CHHZ3W5BT"
};

// Initialize Firebase

if(getApps.length){
    app = getApp()
}else{
    app = initializeApp(firebaseConfig)
}

export default app