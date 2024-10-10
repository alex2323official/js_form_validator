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
    this.#form.addEventListener("focusout", (event) => {
      switch (true) {
        case this.#emailInput.validity.valueMissing:
          this.#errorDisplaySpan.textContent = `E-mail field can't be empty.`;
          break;
        case this.#emailInput.validity.typeMismatch:
          this.#errorDisplaySpan.textContent = `You nedd to provide a proper e-mail format.`;
          break;
        default:
          this.#errorDisplaySpan.textContent = "";
      }
    });
  }
}

// APP STARTS HERE
const formValidator = new FormValidator();

formValidator.controllerUserFormInput();
