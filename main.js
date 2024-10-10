import "./style.css";

class FormValidator {
  #form = document.querySelector("form");
  #emailInput = document.querySelector("#email");
  #countryInput = document.querySelector("#country");
  #zipcodeInput = document.querySelector("#zipCode");
  #passwordInput = document.querySelector("#password");
  #confirmPasswordInput = document.querySelector("#confirmPassword");
  #errorEmail = document.querySelector("#errorEmail");
  #errorCountry = document.querySelector("#errorCountry");
  #errorZipcode = document.querySelector("#errorZipcode");
  #errorPassword = document.querySelector("#errorPassword");
  #errorConfirmPassword = document.querySelector("#errorConfirmPassword");

  controllerUserFormInput() {
    this.#form.addEventListener("focusout", (event) => {
      // Email validation
      switch (true) {
        case this.#emailInput.validity.valueMissing:
          this.#errorEmail.textContent = `E-mail field can't be empty.`;
          break;
        case this.#emailInput.validity.typeMismatch:
          this.#errorEmail.textContent = `You nedd to provide a aproper e-mail format.`;
          break;
        default:
          this.#errorEmail.textContent = "";
      }
    });
  }
}

// APP STARTS HERE
const formValidator = new FormValidator();

formValidator.controllerUserFormInput();
