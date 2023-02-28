import "./index.css";
import { Section } from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo.js";
import {
  template,
  cardContainer,
  validationConfig,
  popupImageOpen,
  buttonOpenPopupEditProfile,
  popupEditProfile,
  profileName,
  profileJob,
  buttonOpenPopupAddCard,
  popupCards,
  profileAvatar,
} from "../utils/constants.js";
import { Card } from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

//экземпляр для формы добавления картинки
const addCardForm = new PopupWithForm({
  popupSelector: popupCards,
  submitForm: handleSubmitAddCardForm,
});

function createCard(cardData) {
  const card = new Card(cardData, template, handleCardClick);
  const cardElement = card.getCard();
  return cardElement;
}

function handleSubmitAddCardForm({ cardName, cardLink }) {
  api.createCard({name: cardName, link: cardLink})
  .then((data) => {
    const cardListSection = new Section(
      {
        items: [],
        renderer: (item) => {
          cardListSection.addItem(createCard(item));
        },
      },
      cardContainer
    );

    cardListSection.addItem(
      createCard({
        name: data.name,
        link: data.link
      })
    );
  });

  addCardForm.close();
}

//навешиваем слушатель события открытия редактора карточки
buttonOpenPopupAddCard.addEventListener("click", () => {
  addCardForm.open();
});

addCardForm.setEventListeners();

// *Для каждого попапа создавайте свой экземпляр класса PopupWithForm*
const popupViewImages = new PopupWithImage(popupImageOpen);

popupViewImages.setEventListeners();

//функция открытия попапа картинки
function handleCardClick(name, link) {
  popupViewImages.open(name, link);
}

const api = new Api();

api.getInitialCards().then((data) => {
  const cardListSection = new Section(
    {
      items: data,
      renderer: (item) => {
        cardListSection.addItem(createCard(item));
      },
    },
    cardContainer
  );

  cardListSection.renderItems();
});

//получаем информацию о профиле
api.getUserInfo().then((data) => {
  //Экземпляр поапа формы редактированя профиля
  const openEditProfile = new PopupWithForm({
    popupSelector: popupEditProfile,
    submitForm: openProfilePopup,
  });

  function openProfilePopup({ dataName, dataJob }) {
    api
      .updateUserInfo({
        name: dataName,
        about: dataJob,
      })
      .then((data) => {
        viewUserInfo.setUserInfo({
          dataName: data.name,
          dataJob: data.about,
          avatar: data.avatar,
        });
      });

    openEditProfile.close();
  }

  openEditProfile.setEventListeners();

  const viewUserInfo = new UserInfo({
    dataName: profileName,
    dataJob: profileJob,
    avatar: profileAvatar,
  });

  viewUserInfo.setUserInfo({
    dataName: data.name,
    dataJob: data.about,
    avatar: data.avatar,
  });

  // Слушатель на открытие попапа редактирования профиля
  buttonOpenPopupEditProfile.addEventListener("click", () => {
    const { dataName, dataJob } = viewUserInfo.getUserInfo();
    openEditProfile.setInputValues({
      dataName,
      dataJob,
    });

    openEditProfile.open();
  });
});

// вызвали функцию валидации с ООП

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formInfoValidator = new FormValidator(config, formElement);
    formInfoValidator.enableValidation();
  });
}

enableValidation(validationConfig);
