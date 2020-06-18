import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA1lgZTCX2HdC46tL4fAC0Hpn89AUOW3t0",
  authDomain: "rolling-store-af.firebaseapp.com",
  databaseURL: "https://rolling-store-af.firebaseio.com",
  projectId: "rolling-store-af",
  storageBucket: "rolling-store-af.appspot.com",
  messagingSenderId: "426553947449",
  appId: "1:426553947449:web:1b73df432b99a8f9f2a4e8"
};

firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase;

export { firebaseApp };