import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlHWxIQ6lxWJ6wSB5UxHqJpa8WEtmdeEE",
  authDomain: "viralhub-bd-3a679.firebaseapp.com",
  projectId: "viralhub-bd-3a679",
  storageBucket: "viralhub-bd-3a679.firebasestorage.app",
  messagingSenderId: "603360533030",
  appId: "1:603360533030:web:dfa5aa9fa6cf306cc9e4e7",
  measurementId: "G-1GH867GEX7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", () => {
    alert("❤️ ভিডিওটি লাইক হয়েছে");
  });

  buttons[1].addEventListener("click", () => {
    const comment = prompt("আপনার মন্তব্য লিখুন:");
    if (comment) {
      alert("ধন্যবাদ!\nআপনার মন্তব্য: " + comment);
    }
  });

  buttons[2].addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: "ViralHub BD",
        text: "এই ভিডিওটি দেখুন",
        url: window.location.href
      });
    } else {
      alert("আপনার ব্রাউজারে Share সাপোর্ট নেই");
    }
  });

  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert("স্বাগতম " + result.user.displayName);
    } catch (error) {
      alert(error.message);
    }
  });

});
