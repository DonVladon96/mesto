import "./index.css";
import { Section } from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo.js";
import {
  template,
  cardContainer,
  cards,
  validationConfig,
  popupImageOpen,
  buttonOpenPopupEditProfile,
  popupEditProfile,
  profileName,
  profileJob,
  buttonOpenPopupAddCard,
  popupCards,
} from "../utils/constants.js";
import { Card } from "../components/Card";
import FormValidator from "../components/FormValidator.js";

//экземпляр для открытия картинки
const addCardForm = new PopupWithForm({
  popupSelector: popupCards,
  submitForm: handleSubmitAddCardForm,
});

function handleSubmitAddCardForm({ cardName, cardLink }) {
  const newCard = new Card(
    { name: cardName, link: cardLink },
    template,
    handleCardClick
  );
  cardListSection.addItem(newCard);
  addCardForm.close();
}

//навешиваем слушатель события открытия редактора карточки
buttonOpenPopupAddCard.addEventListener("click", () => {
  addCardForm.open();
});

addCardForm.setEventListeners();

//Экземпляр поапа формы редактированя профиля
const openEditProfile = new PopupWithForm({
  popupSelector: popupEditProfile,
  submitForm: openProfilePopup,
});

function openProfilePopup({ dataName, dataJob }) {
  viewUserInfo.setUserInfo({
    dataName,
    dataJob,
  });

  openEditProfile.close();
}

openEditProfile.setEventListeners();

const viewUserInfo = new UserInfo({
  dataName: profileName,
  dataJob: profileJob,
});

// Слушатель на открытие попапа редактирования профиля
buttonOpenPopupEditProfile.addEventListener("click", () => {
  openEditProfile.open();
});

// *Для каждого попапа создавайте свой экземпляр класса PopupWithForm*
const popupViewImages = new PopupWithImage(popupImageOpen);

popupViewImages.setEventListeners();

//функция открытия попапа картинки
function handleCardClick(name, link) {
  popupViewImages.open(name, link);
}

// Section Новый способ
const cardItems = cards.map((cardData) => {
  return new Card(cardData, template, handleCardClick);
});

const renderer = (container, card) => {
  container.prepend(card.getCard());
};

const cardListSection = new Section(
  {
    items: cardItems,
    renderer: renderer,
  },
  cardContainer
);

cardListSection.renderItems();

// вызвали функцию валидации с ООП

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formInfoValidator = new FormValidator(config, formElement);
    formInfoValidator.enableValidation();
  });
}

enableValidation(validationConfig);
