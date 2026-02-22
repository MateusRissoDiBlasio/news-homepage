const mobileNavMenuIcon = document.getElementById('navMenuIcon');
const mobileMenu = document.getElementById('mobileMenu');
const mobileCloseMenuIcon = document.getElementById('mobileCloseMenuIcon');
const body = document.querySelector('body');
const headlinerArticle = document.getElementById('headlinerArticle');
const newsShortNotes = document.getElementById('newsShortNotes');
const newsRanking = document.getElementById('newsRanking');
const navMenuIcon = document.getElementById('navMenuIcon');


mobileNavMenuIcon.addEventListener('click', () =>{
    mobileMenu.style.display = 'flex';
    mobileMenu.classList.add('animateFadeIn');
    mobileMenu.classList.remove('animateFadeOut');
    navMenuIcon.classList.remove('animateFadeIn');
    navMenuIcon.classList.add('animateFadeOut');
    body.style.transition = '1.4s';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    headlinerArticle.style.pointerEvents = 'none';
    newsShortNotes.style.pointerEvents = 'none';
    newsRanking.style.pointerEvents = 'none';
    navMenuIcon.classList.add('animateIconRight');
    navMenuIcon.classList.remove('animateIconLeft');
    mobileCloseMenuIcon.classList.add('animateIconTop');
    setTimeout(() => {
        mobileCloseMenuIcon.classList.add('animateIconBottom');
    }, 100);
});

mobileCloseMenuIcon.addEventListener('click', () =>{
    mobileMenu.classList.remove('animateFadeIn');
    mobileMenu.classList.remove('animateFadeOut');
    body.style.transition = '0.55s';
    body.style.backgroundColor = 'hsl(0, 100%, 100%)';
    headlinerArticle.style.pointerEvents = 'all';
    newsShortNotes.style.pointerEvents = 'all';
    newsRanking.style.pointerEvents = 'all';
    navMenuIcon.classList.remove('animateIconRight');
    navMenuIcon.classList.add('animateIconLeft');
    navMenuIcon.classList.remove('animateFadeOut');
    mobileCloseMenuIcon.classList.remove('animateIconBottom');
    setTimeout(() => {
        mobileMenu.style.display = 'none'; 
        body.style.pointerEvents = 'all';
    }, 550);
});