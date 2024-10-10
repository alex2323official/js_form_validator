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
      if (this.#emailInput.validity.valueMissing) {
        this.#errorDisplaySpan.textContent = `You need provide proper e-mail. Field can't be empty.`;
      }
    });
  }
}

// APP STARTS HERE
const formValidator = new FormValidator();

formValidator.controllerUserFormInput();
