

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');


menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Opens/Closes the menu
    menuBtn.classList.toggle('toggle');  // Changes hamburger to 'X'
});


document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('toggle');
    });
});
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');
const formContainer = document.querySelector('.footer-newsletter-form');


newsletterForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stops the page from reloading

    const emailValue = emailInput.value.trim();


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    formContainer.classList.remove('error-border');
    formMessage.className = 'form-message';


    if (emailValue === '') {

        formMessage.textContent = 'Machi, please enter an email address!';
        formMessage.classList.add('error');
        formContainer.classList.add('error-border');

    } else if (!emailPattern.test(emailValue)) {

        formMessage.textContent = 'Oops! That doesn\'t look like a valid email.';
        formMessage.classList.add('error');
        formContainer.classList.add('error-border');

    } else {

        formMessage.textContent = 'Success! Welcome to the Cosmic Crew! ✨';
        formMessage.classList.add('success');
        window.location.href = '404.html'


        emailInput.value = '';


        setTimeout(() => {
            formMessage.classList.remove('success');
        }, 4000);
    }
});
