// РАБОТА ПО КОММЕНТАРИЮ "МОЖНО И ЛУЧШЕ С РЕВЬЮ"
import { cards, validationConfig } from "./constants.js";
import { enableValidation } from './validate.js';

const popups = document.querySelectorAll('.popup')
const buttonOpenPopupEditProfile = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonClosePopupEditProfile = document.querySelector('.popup__close');
const popupFormEdit = document.querySelector('#popup-form')
const popupFormAdd = document.querySelector('#popup-form-card');
const nameInput = popupFormEdit.querySelector('#input-name')
const jobInput = popupFormEdit.querySelector('#input-job')
const profileInfo = document.querySelector('.profile__info')
const profileName = profileInfo.querySelector('.profile__name')
const profileJob = profileInfo.querySelector('.profile__aboute')

//Универсальные функции открытия и закрытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
};


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
}

//скрытие полей по клику на оверлей
const closePopupOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.target);
}

//закрытие попапа по клавише Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupHasOpened = document.querySelector('.popup_opened');
    closePopup(popupHasOpened)
  };
};



buttonOpenPopupEditProfile.addEventListener('click', openProfilePopup);
buttonClosePopupEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile)
});

function openProfilePopup(event) {
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const template = document.querySelector('#card-item-template');
const cardContainer = document.querySelector('.elements');
const popupImageOpen = document.querySelector('.popup_image-open')
const popupImage = popupImageOpen.querySelector('.popup__image')
const popupCaption = popupImageOpen.querySelector('.popup__caption')

const createCard = (card) => {
  const container = template.content.querySelector('.element').cloneNode(true);
  const likeButton = container.querySelector('.element__button-like');
  const buttonTrash = container.querySelector('.element__button-trash');

  const cardImage = container.querySelector('.element__photo');
  cardImage.setAttribute('src', card.link)
  cardImage.setAttribute('alt', card.name)
  const cardTitle = container.querySelector('.element__title');
  cardTitle.textContent = card.name;

  cardImage.addEventListener('click', () => {

    popupImage.setAttribute('src', card.link)
    popupImage.setAttribute('alt', card.name)
    popupCaption.textContent = card.name;

    openPopup(popupImageOpen);
  });

  buttonTrash.addEventListener('click', () => {
    container.remove();
  })
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__button-like_active')
  })

  return container;
}

// Кнопка закрытия картинки
const buttonClosePopupImage = document.querySelector('.popup__close-image');
buttonClosePopupImage.addEventListener('click', () => {
  closePopup(popupImageOpen)
})

const renderCard = (card) => {
  cardContainer.prepend(createCard(card))
}

cards.forEach((card) => {
  renderCard(card);
})

// ПИШЕМ КАК В ВЕБИНАРЕ.
const buttonOpenPopupAddCard = document.querySelector('.profile__add-button');
const popupCards = document.querySelector('.popup-cards');
const titleInput = popupCards.querySelector('#card-name');
const linkInput = popupCards.querySelector('#card-link');

//кнопка открытия редактора карточек
buttonOpenPopupAddCard.addEventListener('click', () => {

  openPopup(popupCards)
});

// Кнопка закрытия редактора карточек
const buttonClosePopupAddCard = document.querySelector('.popup__cards-close')
buttonClosePopupAddCard.addEventListener('click', () => {
  closePopup(popupCards)
})


//Обрабатываем форму. первый метод

popupFormAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  }

  if (!newCard.name || !newCard.link) return;

  renderCard(newCard)
  closePopup(popupCards);
  e.target.reset();
})

// делаем сабмит. второй метод

function submitEditProfileForm(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value
  const jobValue = jobInput.value
  profileName.textContent = nameValue
  profileJob.textContent = jobValue
  closePopup(popupEditProfile);
}

popupFormEdit.addEventListener('submit', submitEditProfileForm);

//вызвали функцию валидации
enableValidation(validationConfig);




