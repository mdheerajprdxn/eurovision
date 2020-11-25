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
  let errors = 0;
  var inputs = e.target.childNodes;
  for (input of inputs) {
    if (input.classList) {
      if (input.classList[0] == "form-element") {
        let inputChildren = input.childNodes;
        for (inputChild of inputChildren) {
          if (inputChild.nodeName.toLowerCase() == "input") {
            let errorMsg = inputChild.nextElementSibling;
            if (inputChild.value == "") {
              errorMsg.style.display = "block";
              inputChild.classList.add("error-field");
              errors++;
            } else {
              inputChild.classList.remove("error-field");
              errorMsg.style.display = "none";
            }
          } else if (inputChild.nodeName.toLowerCase() == "select") {
            let errorMsg = inputChild.nextElementSibling;
            if (inputChild.value == "select" || inputChild.value == "choose") {
              errorMsg.style.display = "block";
              errors++;
            } else {
              errorMsg.style.display = "none";
            }
          } else {
            let errorMsg = document.querySelector("#checkbox-error");
            if (newsLetter == null) {
              errorMsg.style.display = "block";
              errors++;
            } else {
              errorMsg.style.display = "none";
            }
          }
        }
      }
    }
  }
  if (errors > 0) {
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
