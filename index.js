// Set current year for copyright
let yearSpan = document.getElementById("year");
yearSpan.innerText = new Date().getFullYear();

// Nav Toggle
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.dataset.visible;

  if (visibility === 'false') {
    primaryNav.dataset.visible = 'true';
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.dataset.visible = 'false';
    navToggle.setAttribute('aria-expanded', 'false');
  }
})