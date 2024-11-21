document.querySelectorAll('.nav-items div a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const btnPink = document.querySelector('.btn-pink');
btnPink.addEventListener('mouseover', () => {
    btnPink.style.transform = 'scale(1.05)';
    btnPink.style.boxShadow = '8px 8px 15px rgba(0, 0, 0, 0.2)';
});
btnPink.addEventListener('mouseout', () => {
    btnPink.style.transform = 'scale(1)';
    btnPink.style.boxShadow = '5px 5px 7px 0px #0000003f';
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const projectContent = card.querySelector('.project-content');
        projectContent.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        const projectContent = card.querySelector('.project-content');
        projectContent.style.transform = 'scale(1)';
    });
});

const toggleNav = () => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
};

const toggleMenuBtn = document.createElement('button');
toggleMenuBtn.classList.add('toggle-menu-btn');
toggleMenuBtn.innerHTML = '☰';
document.querySelector('.navbar').appendChild(toggleMenuBtn);

toggleMenuBtn.addEventListener('click', toggleNav);

window.addEventListener('load', () => {
    const fadedText = document.querySelector('.faded-text');
    setTimeout(() => {
        fadedText.style.opacity = '0';
        fadedText.style.transition = 'opacity 1s ease-out';
    }, 3000); 
});

const skillIcons = document.querySelectorAll('.project-skill');
skillIcons.forEach(skillIcon => {
    skillIcon.addEventListener('mouseover', () => {
        skillIcon.style.transform = 'scale(1.2)';
    });
    skillIcon.addEventListener('mouseout', () => {
        skillIcon.style.transform = 'scale(1)';
    });
});

const projectNumbers = document.querySelectorAll('.project-number');
projectNumbers.forEach(number => {
    number.addEventListener('mouseover', () => {
        number.style.display = 'block';
    });
    number.addEventListener('mouseleave', () => {
        number.style.display = 'none';
    });
});

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.classList.add('scroll-to-top-btn');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

const footerYear = document.querySelector('.footer-year');
if (footerYear) {
    footerYear.innerHTML = new Date().getFullYear();
}
