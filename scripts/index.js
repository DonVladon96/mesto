//.Profile__edit
//.popup
//.popup__close
//Переменные для попапа
const profileEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const formElement = document.querySelector('#popup-form')
const nameInput = formElement.querySelector('#input-name')
const jobInput = formElement.querySelector('#input-job')
const profileInfo = document.querySelector('.profile__info')
const profileName = profileInfo.querySelector('.profile__name')
const profileJob = profileInfo.querySelector('.profile__aboute')

profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function openPopup(event) {
  popup.classList.add('popup_opened')
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

// делаем сабмит

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameValue = nameInput.value
  let jobValue = jobInput.value
  profileName.textContent = nameValue
  profileJob.textContent = jobValue
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

// Первый метод. Оставлю здесь на всякий случай.
// const initialCards = [
//   {
//     name: 'Карачаевск',
//     link: '../images/photo1.png'
//   },
//   {
//     name: 'Глинтвейн',
//     link: '../images/orange-juice.png'
//   },
//   {
//     name: 'Пианист',
//     link: '../images/piano.png'
//   },
//   {
//     name: 'Космонавт',
//     link: '../images/CCCP.png'
//   },
//   {
//     name: 'Вкуснотища!',
//     link: '../images/pizza.png'
//   },
//   {
//     name: 'Фотограф',
//     link: './images/photograph.jpg'
//   }
// ];

// initialCards.forEach((card) => {
//   const element = `<article class="element">
//     <img src="${card.link}" alt="Карачаевск" class="element__photo">
//     <div class="element__photo-info">
//     <h2 class="element__title">${card.name}</h2>
//     <button type="button" class="element__button-like"></button>
//     </div>
//   </article>`
//   const cardContainer = document.querySelector('.elements');
//   cardContainer.insertAdjacentHTML('afterbegin', element)
// });

//пробуем метод из вебинара

const cards = [
  {
    name: 'Coffee',
    link: '../images/coffe.jpg'
  },
  {
    name: 'Глинтвейн',
    link: '../images/orange-juice.png'
  },
  {
    name: 'Пианист',
    link: '../images/piano.png'
  },
  {
    name: 'Космонавт',
    link: '../images/CCCP.png'
  },
  {
    name: 'Вкуснотища!',
    link: '../images/pizza.png'
  },
  {
    name: 'Фотограф',
    // link: './images/photograph.jpg'
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  }
];

const cardContainer = document.querySelector('.elements');
const createCard = (card) => {
  const string = `<article class="element">
     <button type="buttonTrash" class="element__button-trash"></button>
      <img src="${card.link}" alt="Карачаевск" class="element__photo">
       <div class="element__photo-info">
       <h2 class="element__title">${card.name}</h2>
      <button type="button" class="element__button-like"></button>
      </div>
    </article>`
  const container = document.createElement('div');
  container.innerHTML = string;
  const likeButton = container.querySelector('.element__button-like')
  const buttonTrash = container.querySelector('.element__button-trash');
  const openCard = container.querySelector('.element__photo');
  openCard.addEventListener('click', () => {
    const popupImageOpen = document.querySelector('.popup_image-open')
    const popupImage = popupImageOpen.querySelector('.popup__image')
    const popupCaption = popupImageOpen.querySelector('.popup__caption')
    popupImage.setAttribute('src', card.link)
    popupCaption.textContent = card.name;
    popupImageOpen.classList.add('popup_opened')
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
  popupImageOpen.classList.remove('popup_opened');
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
const popupCards = document.querySelector('.popup_cards');
const titleInput = popupCards.querySelector('#card-name');
const linkInput = popupCards.querySelector('#card-link');
const submitButton = popupCards.querySelector('#submit-button-card');

//кнопка открытия редиктора карточек
openCardButton.addEventListener('click', () => {
  popupCards.classList.add('popup_opened')
});

// Кнопка закрытия редактора карточек
const cardClose = document.querySelector('.popup_cards_close')
cardClose.addEventListener('click', closeCard);
function closeCard() {
  popupCards.classList.remove('popup_opened');
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  }

  if (!newCard.name || !newCard.link) return;

  renderCard(newCard)
  popupCards.classList.remove('popup_opened');
})






