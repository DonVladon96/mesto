function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);


  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}

function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, formButton, config) {
  if (hasInvalidInput(inputList)) {
    formButton.classList.remove(config.activeButtonClass)
    formButton.classList.add(config.inactiveButtonClass)
    formButton.disabled = true;
  } else {
    formButton.classList.add(config.activeButtonClass)
    formButton.classList.remove(config.inactiveButtonClass)
    formButton.disabled = false;
  }


}

function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const formButton = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, formButton, config)


  //функция для деактивации кнопки методом reset (ООП+)
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, formButton, config);
    }, 0)
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, formButton, config)
    })
  })
}

export function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })
}
