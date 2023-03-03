import Api from "./Api";

class Card {
  constructor(cardData, selector, handleCardClick, deletePopup, userId, handles) {
    this._userId = userId;
    this._deletePopup = deletePopup;
    this._cardId = cardData._id;
    this._likes = cardData.likes;
    this._ownerId = cardData.owner._id;
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleCardClick = handleCardClick;
    this._createLike = handles.createLike;
    this._deleteLike = handles.deleteLike;
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
    if (this._userId !== this._ownerId) {
      this._buttonTrash.style.visibility = "hidden";
    }
  }


  //создаю приватный метод для установки всех обработчиков (rew 1)
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._buttonTrash.addEventListener("click", () => {
      this._deletePopup.open();
      // this._deletePopup.setEventListeners();
      // this._deletePopup.setDeleteEvent(this._cardId, this._container);
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick()


    });
  }

  _setCardLikes() {
    this._likeNumber.textContent = this._likes.length;
  }

  _isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  showData(data) {
    this._likes = data.likes;

    this._likeNumber.textContent = this._likes.length;

    if (this._isLiked()) {
      this._likeButton.classList.add("element__button-like_active");
    } else {
      this._likeButton.classList.remove("element__button-like_active");
    }
  }

  _handleLikeClick() {
    if (this._isLiked()) {
      this._deleteLike(this._cardId);
    } else {
      this._createLike(this._cardId);
    }
  }

  getCard() {
    this._setCardTitle();
    this._setCardImage();
    this._setEventListeners();
    this._setCardLikes();
    this._deleteButtonIsVisible();
    
    if (this._isLiked()) {
      this._likeButton.classList.add("element__button-like_active");
    } else {
      this._likeButton.classList.remove("element__button-like_active");
    }

    return this._container;
  }
}

export { Card };
