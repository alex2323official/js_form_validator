import "./style.css";

class FormValidator {
  #form = document.querySelector("form");
  #emailInput = document.querySelector("#email");
  #countryInput = document.querySelector("#country");
  #zipcodeInput = document.querySelector("#zipCode");
  #passwordInput = document.querySelector("#password");
  #confirmPasswordInput = document.querySelector("#confirmPassword");
  #errorDisplaySpan = document.querySelector("#errorDisplay");

  controllerUserFormInput() {
    this.#form.addEventListener("input", (event) => {
      console.log(event);
    });
  }
}

// APP STARTS HERE
const formValidator = new FormValidator();

formValidator.controllerUserFormInput();
