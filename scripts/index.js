//.Profile__edit
//.popup
//.popup__close
//Переменные для попапа
import { cards } from "./constants.js";

const profileEdit = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCloseProfile = document.querySelector('.popup__close');
const formElement = document.querySelector('#popup-form')
const nameInput = formElement.querySelector('#input-name')
const jobInput = formElement.querySelector('#input-job')
const profileInfo = document.querySelector('.profile__info')
const profileName = profileInfo.querySelector('.profile__name')
const profileJob = profileInfo.querySelector('.profile__aboute')

//Универсальные функции открытия и закрытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

profileEdit.addEventListener('click', openProfilePopup);
popupCloseProfile.addEventListener('click', () => {
  closePopup(popupEditProfile)
});

function openProfilePopup(event) {
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}


// делаем сабмит

function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value
  const jobValue = jobInput.value
  profileName.textContent = nameValue
  profileJob.textContent = jobValue
  closePopup(popupEditProfile);
}

formElement.addEventListener('submit', handleFormSubmit);


const template = document.querySelector('#card-item-template');

const cardContainer = document.querySelector('.elements');
const createCard = (card) => {
  const container = template.content.querySelector('.element').cloneNode(true);
  const likeButton = container.querySelector('.element__button-like');
  const buttonTrash = container.querySelector('.element__button-trash');
  const openCard = container.querySelector('.element__photo');
  openCard.setAttribute('src', card.link)

  const cardTitle = container.querySelector('.element__title');
  cardTitle.textContent = card.name;

  const popupImageOpen = document.querySelector('.popup_image-open')
  const popupImage = popupImageOpen.querySelector('.popup__image')
  const popupCaption = popupImageOpen.querySelector('.popup__caption')
  openCard.addEventListener('click', () => {

    popupImage.setAttribute('src', card.link)
    popupCaption.textContent = card.name;
    // popupImageOpen.classList.add('popup_opened')
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
const popupCloseImg = document.querySelector('.popup__close-image');
popupCloseImg.addEventListener('click', () => {

  const popupImageOpen = document.querySelector('.popup_image-open')
  closePopup(popupImageOpen)
})

const renderCard = (card) => {
  cardContainer.prepend(createCard(card))
}

cards.forEach((card) => {
  renderCard(card);
})

//ВЫВОД: СДЕЛАЛ КАК В ВЕБИНАРЕ.
// Делаем лайк кнопки <button type="button" class="element__button-like"></button>
// .element__button-like_active
const openCardButton = document.querySelector('.profile__add-button');
const popupCards = document.querySelector('.popup-cards');
const titleInput = popupCards.querySelector('#card-name');
const linkInput = popupCards.querySelector('#card-link');
const submitButton = popupCards.querySelector('#submit-button-card');

//кнопка открытия редиктора карточек
openCardButton.addEventListener('click', () => {
  // popupCards.classList.add('popup_opened')
  openPopup(popupCards)
});

// Кнопка закрытия редактора карточек
const cardClose = document.querySelector('.popup__cards-close')
cardClose.addEventListener('click', () => {
  closePopup(popupCards)
})


//Обрабатываем форму
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  }

  if (!newCard.name || !newCard.link) return;

  renderCard(newCard)
  popupCards.classList.remove('popup_opened');
  titleInput.value = ''
  linkInput.value = ''
})




