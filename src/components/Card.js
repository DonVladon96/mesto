import Api from "./Api";

class Card {
  constructor(cardData, selector, handleCardClick, deletePopup) {
    this._deletePopup = deletePopup;
    this._api = new Api();
    this._cardId = cardData._id;
    this._likes = cardData.likes;
    this._ownerId = cardData.owner._id;
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleCardClick = handleCardClick;
    this._container = selector.content
      .querySelector(".element")
      .cloneNode(true);
    this._likeNumber = this._container.querySelector(".element__like-number");
    this._likeButton = this._container.querySelector(".element__button-like");
    this._cardTitle = this._container.querySelector(".element__title");
    this._cardImage = this._container.querySelector(".element__photo");
    this._buttonTrash = this._container.querySelector(".element__button-trash");
  }

  _setCardImage() {
    this._cardImage = this._container.querySelector(".element__photo");
    this._cardImage.setAttribute("src", this._link);
    this._cardImage.setAttribute("alt", this._name);

    return this._cardImage;
  }

  _setCardTitle() {
    this._cardTitle = this._container.querySelector(".element__title");
    this._cardTitle.textContent = this._name;

    return this._cardTitle;
  }

  _deleteButtonIsVisible() {
    this._api.getUserInfo().then((data) => {
      if (data._id !== this._ownerId) {
        this._buttonTrash.style.visibility = "hidden";
      }
    });
  }

  _toggleLike() {
    this._likeButton.classList.toggle("element__button-like_active");
  }

  //создаю приватный метод для установки всех обработчиков (rew 1)
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._buttonTrash.addEventListener("click", () => {
      this._deletePopup.open();
      this._deletePopup.setEventListeners();
      this._deletePopup.setDeleteEvent(this._cardId);
    });

    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__button-like_active")) {
        this._api.deleteLike(this._cardId).then((data) => {
          this._likes = data.likes;
          this._setCardLikes();
        });
      } else {
        this._api.addLike(this._cardId).then((data) => {
          this._likes = data.likes;
          this._setCardLikes();
        });
      }

      this._toggleLike();
    });
  }

  _setCardLikes() {
    this._likeNumber.textContent = this._likes.length;
  }

  getCard() {
    this._setCardTitle();
    this._setCardImage();
    this._setEventListeners();
    this._setCardLikes();
    this._deleteButtonIsVisible();

    return this._container;
  }
}

export { Card };
