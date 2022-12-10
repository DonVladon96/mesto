//.Profile__edit
//.popup
//.popup__close

const profileEdit = document.querySelector('.Profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');


profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened');
}


popup.addEventListener('click', function(event){
  if(event.target === event.currentTarget){
    closePopup();
  }
});


// делаем сабмит

let formElement = document.querySelector('#popup-form')

console.log(formElement)
let nameInput = document.querySelector('#input-name')
let jobInput = document.querySelector('#input-job')



function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameValue = nameInput.value
  let jobValue = jobInput.value

  let profileName = document.querySelector('.Profile__name')
  let profileJob = document.querySelector('.Profile__aboute')

  profileName.textContent = nameValue
  profileJob.textContent = jobValue
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
// здесь сделать кнопку лайк
