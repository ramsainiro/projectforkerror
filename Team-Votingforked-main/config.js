import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLYZsYvCXlXA5WSsp4bfI3Xu8wq8Kd-SI",
  authDomain: "projjectfoork.firebaseapp.com",
  databaseURL: "https://projjectfoork-default-rtdb.firebaseio.com",
  projectId: "projjectfoork",
  storageBucket: "projjectfoork.appspot.com",
  messagingSenderId: "131307127784",
  appId: "1:131307127784:web:a452200e4e94025c355a5d",
  measurementId: "G-C6ZP597QH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();