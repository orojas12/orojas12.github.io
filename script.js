"use strict";

const form = document.querySelector('.needs-validation');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  form.classList.add('was-validated');
});

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.classList.contains('nav-link')) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});