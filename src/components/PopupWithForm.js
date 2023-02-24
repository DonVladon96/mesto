import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popupItem.querySelector(".popup__form");
    // this._formList = Array.from(this._popupForm.querySelectorAll(".popup__input"));
    this._formList = this._popupForm.querySelectorAll(".popup__input");
  }

  _setInputValues(data) {
    this._formList.forEach((input) => {
      input.value = data[input.name]
    })
  }


  _getInputValues() {
    const inputValue = {};

    this._formList.forEach(input => {
      inputValue[input.name] = input.value;
    });

    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}



