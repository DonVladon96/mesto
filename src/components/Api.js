import UserInfo from "./UserInfo";

export default class Api {
  constructor() {
    this._baseUrl = "https://mesto.nomoreparties.co/v1/cohort-60/";
    this._headers = {
      authorization: "8449ac58-7a24-4246-806a-a59752bbc1d5",
      "Content-Type": "application/json",
    };
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUserAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(avatar),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUserInfo(userInfo) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(userInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createCard(cardInfo) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
