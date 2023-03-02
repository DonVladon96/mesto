import UserInfo from "./UserInfo";

export default class Api {
  constructor() {
    this._baseUrl = "https://mesto.nomoreparties.co/v1/cohort-60/";
    this._headers = {
      authorization: "8449ac58-7a24-4246-806a-a59752bbc1d5",
      "Content-Type": "application/json",
    };
  }

  getUserInfo(){
    return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((response) => {
      return response.json()
    })
  }

  async getInitialCards() {
    // Первый способ из вебинара
    // return fetch(`${this._baseUrl}cards`, {
    //   method: "GET",
    //   headers: this._headers,
    // }).then((response) => {
    //   return response.json()
    // })

    //второй способ из вебинара
    const response = await fetch(`${this._baseUrl}cards`, {
      method: "GET",
       headers: this._headers,
    });
    const data = await response.json();

    return data;
  }

  async updateUserAvatar(avatar) {
    const response = await fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(avatar)
    });
    const data = await response.json()

    return data;
  }


  updateUserInfo(userInfo){
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(userInfo)
    }).then((response) => {
      return response.json()
    })
  }

  createCard(cardInfo){
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardInfo)
    }).then((response) => {
      return response.json()
    })
  }

  deleteCard(cardId){
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then((response) => {
      return response.json()
    })
  }

  addLike(cardId){
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers
    }).then((response) => {
      return response.json()
    })
  }

  deleteLike(cardId){
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then((response) => {
      return response.json()
    })
  }


}

// Токен: 8449ac58-7a24-4246-806a-a59752bbc1d5
// Идентификатор группы: cohort-60
