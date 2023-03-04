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
  PopupDeleteCard,
  updateAvatarPopupElement,
  profileAvatarContainer,
  avatarInput,
  buttonSubmitCard,
  popupFormAdd,
  buttonSubmitAvatar,
  buttonSubmitProfile,
  buttonSubmitDelete,
  jobInput,nameInput
} from "../utils/constants.js";
import { Card } from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";
import Popup from "../components/Popup";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

const api = new Api();
let userId;

const deletePopup = new PopupWithConfirmation(PopupDeleteCard);
deletePopup.setEventListeners();
function createCard(cardData) {
  const card = new Card(cardData, template, handleCardClick, userId, {
    createLike: (cardId) => {
      api
        .addLike(cardId)
        .then((likes) => {
          card.showData(likes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteLike: (cardId) => {
      api
        .deleteLike(cardId)
        .then((likes) => {
          card.showData(likes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCardFunction: (cardId) => {
      deletePopup.open();
      deletePopup.setSubmitHandler(() => {
        isWaiting(true, buttonSubmitDelete);
        api
          .deleteCard(cardId)
          .then(() => {
            card.deleteCard();
            deletePopup.close();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          })
          .finally(() => {
            isWaiting(false, buttonSubmitDelete);

          });
      });
    },
  });
  const cardElement = card.getCard();

  return cardElement;
}

//функция открытия попапа картинки
function handleCardClick(name, link) {
  popupViewImages.open(name, link);
  popupViewImages.setEventListeners();
}

// *Для каждого попапа создавайте свой экземпляр класса PopupWithForm*
const popupViewImages = new PopupWithImage(popupImageOpen);

popupViewImages.setEventListeners();

const cardListSection = new Section(
  {
    renderer: (item) => {
      cardListSection.addItem(createCard(item));
    },
  },
  cardContainer
);

const userInfo = new UserInfo({
  dataName: profileName,
  dataJob: profileJob,
  avatar: profileAvatar,
});

const updateAvatarPopup = new PopupWithForm({
  popupSelector: updateAvatarPopupElement,
  submitForm: (avatar) => {
    isWaiting(true, buttonSubmitAvatar);
    api
      .updateUserAvatar(avatar)
      .then((data) => {
        userInfo.setProfileAvatar(data.avatar);
        updateAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        isWaiting(false, buttonSubmitAvatar);

      });
  },
});

updateAvatarPopup.setEventListeners();
profileAvatarContainer.addEventListener("click", () => {
  updateAvatarPopup.open();
});

api
  .getUserInfo()
  .then((userData) => {
    userId = userData._id;
    userInfo.setUserInfo({
      dataName: userData.name,
      dataJob: userData.about,
    });
    userInfo.setProfileAvatar(userData.avatar);
    api.getInitialCards().then((cardData) => {
      cardListSection.renderItems(cardData);
    });
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

function isWaiting(isLoading, submitButton) {
  if (isLoading) {
    submitButton.textContent = "Сохранение...";
  } else {
    submitButton.textContent = "Сохранить";
  }
}

// //экземпляр для формы добавления картинки
const popupAddCardForm = new PopupWithForm({
  popupSelector: popupCards,
  submitForm: (inputs) => {
    isWaiting(true, buttonSubmitCard);

    api
      .createCard({
        name: inputs.cardName,
        link: inputs.cardLink,
      })
      .then((res) => {
        cardListSection.addItemPrepend(
          createCard(res, "#card-item-template", handleCardClick, userId)
        );
        popupAddCardForm.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        isWaiting(false, buttonSubmitCard);

      });
  },
});

popupAddCardForm.setEventListeners();

//создаю функцию для открытия карточки
function handlePopupAddCardForm() {
  popupAddCardForm.open();
  popupFormAdd.reset();
}

buttonOpenPopupAddCard.addEventListener("click", handlePopupAddCardForm);

//   // Слушатель на открытие попапа редактирования профиля
buttonOpenPopupEditProfile.addEventListener("click", () => {
  openEditProfile.open();
  handleOpenProfileForm()
});

//Экземпляр редактирования профиля
// сделать функцию для заполнения данных в инпуты
function handleOpenProfileForm() {
  const user = userInfo.getUserInfo();
  nameInput.value = user.dataName;
  jobInput.value = user.dataJob;
  openEditProfile.open();
}

const openEditProfile = new PopupWithForm({
  popupSelector: popupEditProfile,
  submitForm: (inputs) => {
    isWaiting(true, buttonSubmitProfile);

    api
      .updateUserInfo({
        name: inputs.dataName,
        about: inputs.dataJob,
      })
      .then((data) => {
        userInfo.setUserInfo({
          dataName: data.name,
          dataJob: data.about,
        });
        openEditProfile.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        isWaiting(false, buttonSubmitProfile);

      });
  },
});

openEditProfile.setEventListeners();

// вызвали функцию валидации с ООП

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formInfoValidator = new FormValidator(config, formElement);
    formInfoValidator.enableValidation();
  });
}

enableValidation(validationConfig);
