'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//A function that closes or hides the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//A function that shows or opens a modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Listen for an event on any of the buttons
//OpenModal function gets called when the click event is triggered
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

//The above accepts the closeModal function closes the modal when the click event is triggered
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Handling KeyPres Event
document.addEventListener('keydown', function (e) {
  e.key === 'Escape' && !modal.classList.contains('hidden')
    ? `${closeModal()}`
    : 'Please press the backquote key';
});
