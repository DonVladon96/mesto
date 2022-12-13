//.Profile__edit
//.popup
//.popup__close

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
// здесь сделать кнопку лайк


