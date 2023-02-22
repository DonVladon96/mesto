import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._popupImage = this._popupSelector.querySelector(".popup__image");
    this._popupCaption = this._popupSelector.querySelector(".popup__caption");
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImage.textContent = name;

    super.open();
  }
}
