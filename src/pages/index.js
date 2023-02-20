import "./index.css";
import { Section } from "../components/Section.js";
import {
  template,
  cardContainer,
  cards,
  validationConfig,
  popupImageOpen,
  buttonOpenPopupEditProfile,
  popupEditProfile,
  buttonClosePopupEditProfile,
  popupFormEdit,
  popupFormAdd,
  nameInput,
  jobInput,
  profileInfo,
  profileName,
  profileJob,
} from "../utils/constants.js";
import { Card } from "../components/Card";
import FormValidator from "../components/FormValidator.js";

//Универсальные функции открытия и закрытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  popup.addEventListener("click", closePopupOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  popup.removeEventListener("click", closePopupOverlay);
}

//скрытие полей по клику на оверлей
const closePopupOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.target);
};

//закрытие попапа по клавише Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupHasOpened = document.querySelector(".popup_opened");
    closePopup(popupHasOpened);
  }
}

buttonOpenPopupEditProfile.addEventListener("click", openProfilePopup);
buttonClosePopupEditProfile.addEventListener("click", () => {
  closePopup(popupEditProfile);
});

function openProfilePopup(event) {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Section Новый способ
const cardItems = cards.map((cardData) => {
  return new Card(cardData, template, openPopup);
});

const renderer = (container, card) => {
  container.prepend(card.getCard());
};

const cardListSection = new Section(
  {
    items: cardItems,
    renderer: renderer
  },
  cardContainer
);

cardListSection.renderItems();


// // Старый способ без Section который отображает карточки
// function getCard (cardData) {
//   const card = new Card(cardData, template, openPopup);
//   return card.getCard()
// };
// cards.forEach((cardData) => {
//   renderCard(cardData);
// });

// Кнопка закрытия картинки
const buttonClosePopupImage = document.querySelector(".popup__close-image");
buttonClosePopupImage.addEventListener("click", () => {
  closePopup(popupImageOpen);
});

// ПИШЕМ КАК В ВЕБИНАРЕ.
const buttonOpenPopupAddCard = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup-cards");
const titleInput = popupCards.querySelector("#card-name");
const linkInput = popupCards.querySelector("#card-link");

//кнопка открытия редактора карточек
buttonOpenPopupAddCard.addEventListener("click", () => {
  openPopup(popupCards);
});

// Кнопка закрытия редактора карточек
const buttonClosePopupAddCard = document.querySelector(".popup__cards-close");
buttonClosePopupAddCard.addEventListener("click", () => {
  closePopup(popupCards);
});

//Обрабатываем форму. первый метод


popupFormAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: linkInput.value,
  };

  if (!newCard.name || !newCard.link) return;
  const renderCard = new Card(newCard, template, openPopup);
  cardListSection.addItem(renderCard)
  closePopup(popupCards);
  e.target.reset();
});

// делаем сабмит. второй метод

function submitEditProfileForm(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  closePopup(popupEditProfile);
}

popupFormEdit.addEventListener("submit", submitEditProfileForm);

// вызвали функцию валидации с ООП

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formInfoValidator = new FormValidator(config, formElement);
    formInfoValidator.enableValidation();
  });
}

enableValidation(validationConfig);
