let myForm = document.querySelector("#form");
myForm.addEventListener("submit", validator);

let firstName = document.querySelector("#first-name");

function validator(e) {
  e.preventDefault();
  let newsLetter = null;
  if (e.target.yes.checked) {
    newsLetter = true;
  } else if (e.target.no.checked) {
    newsLetter = false;
  }
  if (
    e.target.firstName.value == "" ||
    e.target.lastName.value == "" ||
    e.target.position.value == "" ||
    e.target.company.value == "" ||
    e.target.companyType.value == "select" ||
    e.target.country.value == "choose" ||
    e.target.email.value == "" ||
    newsLetter == null
  ) {
    alert("Please fill all values");
  } else {
    alert("Thank you for your response");
    location.reload();
  }
}

// Nav bar
let navButton = document.querySelector("#showNav");
let backdrop = document.querySelector(".backdrop");
let nav = document.querySelector("nav ul");
navButton.addEventListener("click", showNav);
backdrop.addEventListener("click", hideNav);

function showNav() {
  nav.style.display = "block";
  nav.style.transform = "translateX(0px)";
  backdrop.style.display = "block";
}

function hideNav() {
  nav.style.display = "none";
  nav.style.transform = "translateX(-100px)";
  backdrop.style.display = "none";
}
