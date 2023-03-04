class FormValidator {
  constructor(validationConfig, formElement) {
    this._config = validationConfig;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._formButton = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._formButton.classList.add(this._config.inactiveButtonClass)
      this._formButton.disabled = true;
    } else {
      this._formButton.classList.remove(this._config.inactiveButtonClass)
      this._formButton.disabled = false;
    }
  };

  _setEventListeners() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState()
      })
    })

    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this.toggleButtonState();
      }, 0)
    })
  };

  enableValidation() {
    this._setEventListeners()
  }

  resetValidation(){
  this.toggleButtonState();
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  })
  }
};

export default FormValidator;
