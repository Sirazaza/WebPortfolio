document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

  
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });

   
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('show');
        });
    });
});
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200



});
ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .skill-container, .education-box, .about-img, .about-content',{origin:'bottom'});

const typed = new Typed('.multiple-text', {
    strings: [' ', 'Computer Engineering Student'], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
