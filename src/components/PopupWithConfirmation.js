import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    console.log();
  this._submitButton = popupSelector.querySelector('.popup__submit-button')

  }

  setEventListeners() {
    super.setEventListeners();

    this._submitButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  setSubmitHandler(handler) {
    this._handleSubmit = handler;
  }
}
