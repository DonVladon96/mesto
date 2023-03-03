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
  deleteCardPopup,
  updateAvatarPopupElement,
  profileAvatarContainer,
} from "../utils/constants.js";
import { Card } from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";
import Popup from "../components/Popup";

const api = new Api();
let userId;

function handleSubmitDeleteCard(cardId) {
  api.deleteCard(cardId);
}

const deletePopup = new Popup(deleteCardPopup, handleSubmitDeleteCard);

function createCard(cardData) {
  const card = new Card(
    cardData,
    template,
    handleCardClick,
    deletePopup,
    userId,
    {
      createLike: (cardId) => {
        api.addLike(cardId).then((likes) => {
          card.showData(likes)
        })
        .catch((error) => {
          console.log(error);
        })
      },
      deleteLike:(cardId) => {
        api.deleteLike(cardId).then((likes) => {
          card.showData(likes)
        })
        .catch((error) => {
          console.log(error);
        })
      }
    }
  );
  const cardElement = card.getCard();

  return cardElement;
}

//функция открытия попапа картинки
function handleCardClick(name, link) {
  popupViewImages.open(name, link);
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

api.getUserInfo().then((userData) => {
  const userInfo = new UserInfo({
    dataName: profileName,
    dataJob: profileJob,
    avatar: profileAvatar,
  });
  userId = userData._id;
  userInfo.setUserInfo(userData);

  api.getInitialCards().then((cardData) => {
    cardListSection.renderItems(cardData);
  });
});

// //экземпляр для формы добавления картинки
// const addCardForm = new PopupWithForm({
//   popupSelector: popupCards,
//   submitForm: handleSubmitAddCardForm,
// });

// let userId;

// function handleSubmitAddCardForm({ cardName, cardLink }) {
//   api.createCard({ name: cardName, link: cardLink }).then((data) => {
//     const cardListSection = new Section(
//       {
//         items: [data],
//         renderer: (item) => {
//           cardListSection.addItem(createCard(item));
//         },
//       },
//       cardContainer
//     );

//     cardListSection.addItem(createCard(data));
//   });

//   addCardForm.close();
// }

// //навешиваем слушатель события на удаление попапа

// //Обновление аватара

// const updateAvatarPopup = new PopupWithForm({
//   popupSelector: updateAvatarPopupElement,
//   submitForm: handleUpdateAvatar,
// });

// function handleUpdateAvatar(data) {
//   const api = new Api();
//   api.updateUserAvatar(data).then((data) => {
//     profileAvatar.src = data.avatar;
//   });
//   updateAvatarPopup.close();
// }

// updateAvatarPopup.setEventListeners();
// profileAvatarContainer.addEventListener("click", () => {
//   updateAvatarPopup.open();
// });

// //навешиваем слушатель события открытия редактора карточки
// buttonOpenPopupAddCard.addEventListener("click", () => {
//   addCardForm.open();
// });

// addCardForm.setEventListeners();

// const api = new Api();

// Promise.all([api.getUserInfo(), api.getInitialCards()])
//   .then((data) => {
//     const [userData, cardsData] = data;

//     userId = userData._id;
//     viewUserInfo.setUserInfo(userData);
//     viewUserInfo.setProfileAvatar(userData);

//     cardList.rendererItems(cardsData);
//   })
//   .catch((error) => {
//     console.log(`Ошибка: ${error}`);
//   })

// api.getInitialCards().then((data) => {
//   const cardListSection = new Section(
//     {
//       items: data,
//       renderer: (item) => {
//         cardListSection.addItem(createCard(item));
//       },
//     },
//     cardContainer
//   );

//   cardListSection.renderItems();
// });

// //получаем информацию о профиле

// const viewUserInfo = new UserInfo({
//   dataName: profileName,
//   dataJob: profileJob,
//   avatar: profileAvatar,
// });

// api.getUserInfo().then((data) => {
//   //Экземпляр поапа формы редактированя профиля
//   const openEditProfile = new PopupWithForm({
//     popupSelector: popupEditProfile,
//     submitForm: openProfilePopup,
//   });

//   function openProfilePopup({ dataName, dataJob }) {
//     api
//       .updateUserInfo({
//         name: dataName,
//         about: dataJob,
//       })
//       .then((data) => {
//         viewUserInfo.setUserInfo({
//           dataName: data.name,
//           dataJob: data.about,
//           avatar: data.avatar,
//         });
//       });

//     openEditProfile.close();
//   }

//   openEditProfile.setEventListeners();

//   viewUserInfo.setUserInfo({
//     dataName: data.name,
//     dataJob: data.about,
//     avatar: data.avatar,
//   });

//   // Слушатель на открытие попапа редактирования профиля
//   buttonOpenPopupEditProfile.addEventListener("click", () => {
//     const { dataName, dataJob } = viewUserInfo.getUserInfo();
//     openEditProfile.setInputValues({
//       dataName,
//       dataJob,
//     });

//     openEditProfile.open();
//   });
// });

// вызвали функцию валидации с ООП

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formInfoValidator = new FormValidator(config, formElement);
    formInfoValidator.enableValidation();
  });
}

enableValidation(validationConfig);
