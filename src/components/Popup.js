export default class Popup {
  constructor(popupSelector) {
    this._popupItem = popupSelector;
    this._closeButton = this._popupItem.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
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
    this._popupItem.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupItem.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popupItem.addEventListener("click", (evt) =>
      this._handleCloseOverlay(evt)
    );
  }
}
