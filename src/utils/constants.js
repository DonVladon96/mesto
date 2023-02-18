export const cards = [
  {
    name: 'Coffee',
    link: '../images/coffe.jpg'
  },
  {
    name: 'Глинтвейн',
    link: './images/orange-juice.png'
  },
  {
    name: 'Пианист',
    link: './images/piano.png'
  },
  {
    name: 'Космонавт',
    link: './images/CCCP.png'
  },
  {
    name: 'Вкуснотища!',
    link: './images/pizza.png'
  },
  {
    name: 'Челябинская область',
    link: './images/photograph.jpg'
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

export const popupImageOpen = document.querySelector('.popup_image-open');
export const popupImage = popupImageOpen.querySelector('.popup__image');
export const popupCaption = popupImageOpen.querySelector('.popup__caption');
