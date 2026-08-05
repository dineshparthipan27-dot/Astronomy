
 
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