import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyAUPlBfWnBadKUPam2fGH9SfAH2Km2wNfw",
    authDomain: "registration-form-4d989.firebaseapp.com",
    databaseURL: "https://registration-form-4d989-default-rtdb.firebaseio.com",
    projectId: "registration-form-4d989",
    storageBucket: "registration-form-4d989.appspot.com",
    messagingSenderId: "333385184069",
    appId: "1:333385184069:web:9e452f7bda87464f20c42c",
    measurementId: "G-6GHXX93F6C"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal('name');
    var usn = getElementVal('usn');
    var sem = getElementVal('sem');
    var branch = getElementVal('branch');
    var gender = getElementVal('gender');
    var email = getElementVal('email');
    var phone = getElementVal('phone');
    var desc = getElementVal('desc');
    var image = getElementVal('image');
  
    saveMessage(name,usn,sem,branch,gender,email,phone,desc,image);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 30000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessage = (name,usn,sem,branch,gender,email,phone,desc,image) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
        name:name,
        usn:usn,
        sem:sem,
        branch:branch,
        gnder:gender,
        email:email,
        phone:phone,
        desc:desc,
        image:image
    });
  };
  mybutton = document.getElementById("mygbtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
