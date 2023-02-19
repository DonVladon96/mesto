import CardImagesCoffe from '../images/coffe.jpg'
import CardImagesJuice from '../images/orange-juice.png'
import CardImagesPiano from '../images/piano.png'
import CardImagesCosmo from '../images/CCCP.png'
import CardImagesPizza from '../images/pizza.png'
import CardImagesPhoto from '../images/photograph.jpg'

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

export const popupImageOpen = document.querySelector('.popup_image-open');
export const popupImage = popupImageOpen.querySelector('.popup__image');
export const popupCaption = popupImageOpen.querySelector('.popup__caption');
