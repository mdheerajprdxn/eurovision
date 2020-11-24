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
