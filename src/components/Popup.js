export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector(".popup__close");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleCloseOverlay(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.close();
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
        this.close();
      });

    this._popupSelector.addEventListener("click", (evt) => this._handleCloseOverlay(evt));
  }
}
