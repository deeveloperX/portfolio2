// Selectors
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

// Toggle menu on click
navbarToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
});

const submit = document.getElementById("button");
const naam = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function messageAction(){
  if(message != "" && email != "" && naam != ""){
    alert("Sorry! this section is still in test mode.")
  }
}