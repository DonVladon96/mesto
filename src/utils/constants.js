//картинки для карточек
import CardImagesCoffe from '../images/coffe.jpg'
import CardImagesJuice from '../images/orange-juice.png'
import CardImagesPiano from '../images/piano.png'
import CardImagesCosmo from '../images/CCCP.png'
import CardImagesPizza from '../images/pizza.png'
import CardImagesPhoto from '../images/photograph.jpg'

//константы
export const buttonOpenPopupEditProfile = document.querySelector('.profile__edit');
export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const buttonClosePopupEditProfile = document.querySelector('.popup__close');
export const popupFormEdit = document.querySelector('#popup-form')
export const popupFormAdd = document.querySelector('#popup-form-card');
export const nameInput = popupFormEdit.querySelector('#input-name')
export const jobInput = popupFormEdit.querySelector('#input-job')
export const profileInfo = document.querySelector('.profile__info')
export const profileName = profileInfo.querySelector('.profile__name')
export const profileJob = profileInfo.querySelector('.profile__aboute')
export const template = document.querySelector("#card-item-template");
export const cardContainer = document.querySelector(".elements");
export const popupImageOpen = document.querySelector('.popup_image-open');
export const popupImage = popupImageOpen.querySelector('.popup__image');
export const popupCaption = popupImageOpen.querySelector('.popup__caption');
export const profileAvatar = document.querySelector('.profile__avatar');
export const PopupDeleteCard  = document.querySelector('.popup_delelte-card');
export const updateAvatarPopupElement = document.querySelector('.popup_edit_avatar');
export const profileAvatarContainer = document.querySelector('.profile__avatar-container');
export const avatarInput = document.querySelector(".popup__input_avatar");
export const buttonSubmitCard = document.querySelector("#submit-button-card");
export const buttonSubmitAvatar = document.querySelector("#submit-button-avatar");
export const buttonSubmitProfile = document.querySelector("#submit-button-profile");
export const buttonSubmitDelete = document.querySelector("#delete-submit-button");



// ПИШЕМ КАК В ВЕБИНАРЕ.
export const buttonOpenPopupAddCard = document.querySelector(".profile__add-button");
export const popupCards = document.querySelector(".popup-cards");
export const titleInput = popupCards.querySelector("#card-name-discription");
export const linkInput = popupCards.querySelector("#card-link");


//массив карточек
export const cards = [
  {
    name: 'Coffee',
    link: CardImagesCoffe
  },
  {
    name: 'Глинтвейн',
    link: CardImagesJuice
  },
  {
    name: 'Пианист',
    link: CardImagesPiano
  },
  {
    name: 'Космонавт',
    link: CardImagesCosmo
  },
  {
    name: 'Вкуснотища!',
    link: CardImagesPizza
  },
  {
    name: 'Photo',
    link: CardImagesPhoto
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  activeButtonClass: 'popup__submit-button_valid',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};


