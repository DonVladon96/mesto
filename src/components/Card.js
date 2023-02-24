class Card {
  constructor(cardData, selector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleCardClick = handleCardClick;
    this._container = selector.content
      .querySelector(".element")
      .cloneNode(true);
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

  

  _deleteCard() {
    this._container.remove();
  }

  _toggleLike() {
    this._likeButton.classList.toggle("element__button-like_active");
  }

  //создаю приватный метод для установки всех обработчиков (rew 1)
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._buttonTrash = this._container.querySelector(".element__button-trash");
    this._buttonTrash.addEventListener("click", () => {
      this._deleteCard();
    });

    this._likeButton.addEventListener("click", () => {
      this._toggleLike();
    });
  }

  getCard() {
    this._setCardTitle();
    this._setCardImage();
    this._setEventListeners();

    return this._container;
  }
}

export { Card };
