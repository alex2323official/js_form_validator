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
  #submitBtn = document.querySelector("#button");
  #errorFormSubmit = document.querySelector("#errorFormSubmit");
  #successFormSubmit = document.querySelector("#successFormSubmit");

  controllerUserFormInput() {
    // Check if field is correct
    let emailValid = false;
    let countryValid = false;
    let zipcodeValid = false;
    let passwordValid = false;
    let confirmPasswordValid = false;

    // Email validation
    this.#emailInput.addEventListener("focusout", (event) => {
      switch (true) {
        case this.#emailInput.validity.valueMissing:
          this.#errorEmail.textContent = `E-mail field can't be empty.`;
          break;
        case this.#emailInput.validity.typeMismatch:
          this.#errorEmail.textContent = `You nedd to provide a aproper e-mail format.`;
          break;
        default:
          this.#errorEmail.textContent = "";
          this.#emailInput.setCustomValidity("");
          emailValid = true;
      }
    });

    // Country validation
    this.#countryInput.addEventListener("focusout", (event) => {
      const regexTestForNumbers = /\d/; // \d matches any digit (0-9)
      const regexNoNoCharacters = /[^a-zA-Z0-9]/; // \d matches any digit (0-9)

      switch (true) {
        case this.#countryInput.validity.valueMissing:
          this.#errorCountry.textContent = `Country field can't be empty.`;
          break;
        case this.#countryInput.validity.typeMismatch:
          this.#errorCountry.textContent = `You nedd to provide a aproper country format.`;
          break;
        case regexTestForNumbers.test(this.#countryInput.value):
          this.#errorCountry.textContent = `Country field can not contain any numbers.`;
          this.#countryInput.setCustomValidity(
            "Wrong - trigger :invalid class on element"
          );
          break;
        case regexNoNoCharacters.test(this.#countryInput.value):
          this.#errorCountry.textContent = `Country field can not contain other characters than letters.`;
          this.#countryInput.setCustomValidity(
            "Wrong - trigger :invalid class on element"
          );
          break;
        default:
          this.#errorCountry.textContent = "";
          this.#countryInput.setCustomValidity("");
          countryValid = true;
      }
    });

    // Zip Code validation
    this.#zipcodeInput.addEventListener("focusout", (event) => {
      const regexZipcodeFormatCheck = /^\d{2}-\d{3}$/;

      switch (true) {
        case this.#zipcodeInput.validity.valueMissing:
          this.#errorZipcode.textContent = `Zip Code field can't be empty.`;
          break;
        case !regexZipcodeFormatCheck.test(this.#zipcodeInput.value):
          this.#errorZipcode.textContent = `You nedd to provide a proper Zip Code format (xx-xxx).`;
          this.#zipcodeInput.setCustomValidity(
            "Wrong - trigger :invalid class on element"
          );
          break;
        default:
          this.#errorZipcode.textContent = "";
          this.#zipcodeInput.setCustomValidity("");
          emailValid = true;
      }
    });

    // FINAL VALIDATION CHECK AND FORM SUBMIT
    this.#submitBtn.addEventListener("click", (e) => {
      if (
        emailValid &&
        countryValid &&
        zipcodeValid &&
        passwordValid &&
        confirmPasswordValid
      ) {
        // Clear Submit Error
        this.#errorFormSubmit.textContent = "";
        // Success message
        this.#successFormSubmit.textContent =
          "Form Submited! You are awesome <3!";
      } else {
        // Clear Submit Success
        this.#successFormSubmit.textContent = "";
        this.#errorFormSubmit.textContent =
          "You need to have all fields valid to submit this form!";
      }
    });
  }
}

// APP STARTS HERE
const formValidator = new FormValidator();

formValidator.controllerUserFormInput();
