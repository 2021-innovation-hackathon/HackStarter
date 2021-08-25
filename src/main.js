import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAJce4pFmQJXGz-6Sy1LqSkd8RV0Hanmvs",
    authDomain: "petsrecipes.firebaseapp.com",
    projectId: "petsrecipes",
    storageBucket: "petsrecipes.appspot.com",
    messagingSenderId: "372618014677",
    appId: "1:372618014677:web:cb396b90a3afe4a906d75c",
    measurementId: "G-L3TPHZDYBE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



createApp(App).use(store).use(router).mount("#app");