let myForm = document.querySelector("#form");
myForm.addEventListener("submit", validator);

let errors = 0;

function getInputField(element) {
  var node = null;
  for (field of element.childNodes) {
    if (field.querySelector) {
      if (field.nodeName == "INPUT" || field.nodeName == "SELECT") {
        node = field;
      }
    }
  }
  return node;
}

function checkEmpty(input) {
  let err = input.nextElementSibling;
  // Check if input is empty and put the error msg in DOM
  if (input.value == "") {
    // get error message specific to each label
    let errMsg = getErrorMessage(input);
    err.innerHTML = errMsg;
    errors++;
  } else {
    err.innerHTML = "";
  }
}

function getErrorMessage(input) {
  let label = input.previousElementSibling.innerHTML;
  let errMsg = "Field cannot be empty";
  if (input.nodeName == "INPUT") {
    errMsg = label + " cannot be empty";
  } else if (input.nodeName == "SELECT") {
    errMsg = "Please select an option";
  }
  return errMsg;
}

function validateCheckbox() {
  let checkbox = null;
  let yes = document.querySelector("#yes");
  let no = document.querySelector("#no");
  let err = document.querySelector("#checkbox-error");
  if (yes.checked) {
    console.log("yes");
    checkbox = true;
  } else if (no.checked) {
    console.log("no");
    checkbox = false;
  }
  if (checkbox == null) {
    console.log("nul");
    errMsg = " Select a checkbox";
    err.innerHTML = errMsg;
    errors++;
  } else {
    err.innerHTML = "";
  }
}

function validator(e) {
  e.preventDefault();
  // reset errors to 0 at start of each validation
  errors = 0;

  var inputs = document.querySelectorAll("#form .form-element");
  for (input of inputs) {
    // get input field from each form-element div
    let res = getInputField(input);
    if (res) {
      checkEmpty(res);
    }
  }
  // Validate checkbox as a special case
  validateCheckbox();

  if (errors == 0) {
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
