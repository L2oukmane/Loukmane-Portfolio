/*= ==== MENU SHOW ===== */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*= =================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*= =================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*= ==== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
/* ====== CNATACT FORM SEND ====*/
const contactForm = document.querySelector('.contact__form');

function formInfo(data) {
  const storedData = JSON.stringify(data);
  localStorage.setItem('data', storedData);
}

function fillData() {
  const data = JSON.parse(localStorage.getItem('data'));
  const { name } = contactForm.elements;
  const { email } = contactForm.elements;
  const { message } = contactForm.elements;
  name.value = data.name;
  email.value = data.email;
  message.value = data.message;
}

contactForm.addEventListener('input', () => {
  const data = {
    name: document.querySelector('.name__input').value,
    email: document.querySelector('.email__input').value,
    message: document.querySelector('.text__input').value,
  };
  formInfo(data);
});

document.addEventListener('DOMContentLoaded', () => {
  createProjectCards(Object.values(projects));
  if (localStorage.getItem('data')) {
    fillData();
  }
});