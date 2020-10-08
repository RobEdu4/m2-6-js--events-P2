// add js here
const formElement = document.getElementById("formId");
const nameElement = document.getElementById("fullNameI");
const addressElement = document.getElementById("streetAddressI");
const emailElement = document.getElementById("emailAddressI");
const phoneElement = document.getElementById("telI");
const passwordElement = document.getElementById("passwordI");
const confirmElement = document.getElementById("confirmPassI");
const termsElement = document.getElementById("terms");
const errorElement = document.getElementById("errorMsgDiv");
const body = document.querySelector("body");
const errorMsg = document.getElementById("errorMsgP");

formElement.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  clearErrors();

  let password = passwordElement.value;
  let confirmPass = confirmElement.value;
  let hasAgreed = termsElement.checked;
  let error = false;

  if (!hasAgreed) {
    alert("You must agree to the terms before continuing!");
    return;
  }

  if (password.length < 10) {
    errorElement.style.display = "block";
    errorMsg.innerText =
      "Password too short! Please provide a password that has at least 10 characters.";
    error = true;
    passwordElement.classList.toggle("errorBox");
    passwordElement.focus();
    return;
  } else if (password !== confirmPass) {
    errorElement.style.display = "block";
    errorMsg.innerText =
      "Password mismatch. Please make sure both password entries are identical.";
    error = true;
    confirmElement.classList.toggle("errorBox");
    confirmElement.focus();
    return;
  }

  if (!error) window.alert("Success!");
}

function clearErrors() {
  passwordElement.classList.remove("errorBox");
  confirmElement.classList.remove("errorBox");

  errorElement.style.display = "none";
}
