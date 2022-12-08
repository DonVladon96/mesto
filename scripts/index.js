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
  if(!event.defaultPrevented) {
    closePopup();
  }
})
document.querySelector('.popup__container').addEventListener('click', function(event){
  event.preventDefault();
})
