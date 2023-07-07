/*============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*======== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav-link'),
      navItem = document.querySelectorAll('.dropdown-link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

navItem.forEach(n => n.addEventListener('click', linkAction))

/*========== ACTIVE BUTTON ==============*/
const btnOne = document.getElementById('btn-One'),
      btnTwo = document.getElementById('btn-Two')


if(btnOne) {
  btnOne.addEventListener('click', () => {
    btnOne.classList.add('active-btn'),
    btnTwo.classList.remove('active-btn')
  })
}

if(btnTwo) {
  btnTwo.addEventListener('click', () => {
    btnTwo.classList.add('active-btn'),
    btnOne.classList.remove('active-btn')
  })
}

/*========= SCROLL SECTIONS ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {

    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav-menu a[href*='+ sectionId +']')


    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }

  })
}
window.addEventListener('scroll', scrollActive)

/*============= SWIPER TESTIMONIAL =========*/
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  mousewheel: true,
  keyboard: true,
  // cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,//увеличение активной точки+css
  },
  
});

/*================ SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true //повторение анимации
})

sr.reveal(`.home-content, .choose-container, .about-gallery-sofa, .about-gallery-lamp, .contact-image, .footer-container`)
sr.reveal('.home-images, .about-gallery-chair, .contacnt-form', {origin: 'bottom'})
sr.reveal('.materials-content, .about-conntent, .blog-cards, .contact-subscrite', {origin: 'left'})
sr.reveal('.materials-chair, .blog-text', {origin: 'right'})
sr.reveal('.linia-card', { scale: 1.5 })