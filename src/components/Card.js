import { popupImageOpen, popupImage, popupCaption} from '../utils/constants.js';

class Card {
  constructor(cardData, selector, openPopup) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._openPopup = openPopup;
    this._container = selector.content.querySelector('.element').cloneNode(true);
  }

  _setLikeButton() {
    const likeButton = this._container.querySelector('.element__button-like');
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('element__button-like_active')
    });

    return likeButton;
  }

  _setTrashButton() {
    const buttonTrash = this._container.querySelector('.element__button-trash');
    buttonTrash.addEventListener('click', () => {
      this._container.remove();
    });

    return buttonTrash;
  }

  _setCardImage() {
    const cardImage = this._container.querySelector('.element__photo')
    cardImage.setAttribute('src', this._link);
    cardImage.setAttribute('alt', this._name);

    cardImage.addEventListener('click', () => {
      popupImage.setAttribute('src', this._link);
      popupImage.setAttribute('alt', this._name);
      popupCaption.textContent = this._name;
      this._openPopup(popupImageOpen);
    });

    return cardImage;
  }

  _setCardTitle() {
    const cardTitle = this._container.querySelector('.element__title');
    cardTitle.textContent = this._name;

    return cardTitle;
  }

  getCard() {
    this._setLikeButton();
    this._setTrashButton();
    this._setCardTitle();
    this._setCardImage();

    return this._container;
  }
}

export {Card}
