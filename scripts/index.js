//.Profile__edit
//.popup
//.popup__close
//Переменные для попапа
const profileEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

//Переменные для карточек
// const addCards = document.querySelector('.profile__add-button');
// const popupCards = document.querySelector('.popup_cards');
// const popupCardsClose = document.querySelector('.popup_cards_close');
// // const formCard = document.querySelector('#popup-form-card');
// // const nameCard = formElement.querySelector('#card-name');
// // const urlCard = formElement.querySelector('#card-url');
// addCards.addEventListener('click', openCardPopup);
// // popupCardsClose.addEventListener('click', closeCardPopup);






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
// здесь сделать кнопку лайк






// надо сделать, чтобы картинки добавлялись в начало
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

const cards =  [
    {
      name: 'Карачаевск',
      link: '../images/photo1.png'
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
      link: './images/photograph.jpg'
    }
  ];

const cardContainer = document.querySelector('.elements');
const createCard = (card) => {
  return `<article class="element">
      <img src="${card.link}" alt="Карачаевск" class="element__photo">
       <div class="element__photo-info">
       <h2 class="element__title">${card.name}</h2>
      <button type="button" class="element__button-like"></button>
      </div>
    </article>`
}



const renderCard = (card) => {
  cardContainer.insertAdjacentHTML('afterbegin', createCard(card))
}

cards.forEach((card) => {
  renderCard(card);
})


//ВЫВОД: КАК В ВЕБИНАРЕ НЕ ПОЛУЧАЕТСЯ!

const openCardButton = document.querySelector('.profile__add-button');
const popupCards = document.querySelector('.popup_cards');
const titleInput = popupCards.querySelector('#card-name');
const linkInput = popupCards.querySelector('#card-link');
const submitButton = popupCards.querySelector('#submit-button-card');




openCardButton.addEventListener('click', () => {
  popupCards.classList.add('popup_opened')
});

submitButton.addEventListener('click',(e) => {
  e.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  }

  if(!newCard.name || !newCard.link) return;

  renderCard(newCard)
  popupCards.classList.remove('popup_opened');
})


