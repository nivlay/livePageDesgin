'use strict';

function onInit() {
  console.log('Init page');
}

function toggleMenu(elMenuBtn) {
  elMenuBtn.classList.toggle('open');

  document.body.classList.toggle('menu-open');
  const hamburgerBtn = document.querySelector('.hamburger');
  const btns = document.querySelectorAll('.card-btn');
  if (document.body.classList.contains('menu-open')) {
    btns.forEach((btn) => {
      btn.style.zIndex = '-1';
    });
  } else {
    btns.forEach((btn) => {
      btn.style.zIndex = '0';
    });
  }
}

function onOpenModal() {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.modal').style.display = 'block';
}

function onCloseModal() {
  document.querySelector('.modal-container').style.display = 'none';
  document.querySelector('.modal').style.display = 'none';
}
