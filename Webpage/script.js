const intro_top = document.getElementById('intro-top')
const intro_middle = document.getElementById('intro-middle')
const intro_bottom = document.getElementById('intro-bottom')
const intro = document.getElementById('intro')
const education = document.getElementById('education')
const hobbies = document.getElementById('hobbies')
const movies = document.getElementById('movies')
const songs = document.getElementById('songs')
const contact = document.getElementById('contact')
const list = document.getElementById('list')


let content = 'home'
let scrollDirection = 0;

document.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        scrollDirection = 1;
    } else if (event.deltaY > 0) {
        scrollDirection = -1;
    }

    function back (top, middle, bottom) {
        top.style.transform = 'translateY(0)'
        middle.style.transform = 'translateX(0)'
        bottom.style.transform = 'translateX(0)'
    }

    function hide (top, middle, bottom) {
        top.style.transform = 'translateY(-100%)'
        middle.style.transform = 'translateX(100%)'
        bottom.style.transform = 'translateX(100%)'
    }

    function nav_up (translate, text1, text2) {
        list.style.transform = translate
        text1.style.color = 'white'
        text1.style.opacity = '0.4'
        text2.style.color = '#fedd64'
        text2.style.opacity = '0.7'
    }

    function nav_down (translate, text1, text2) {
        list.style.transform = translate
        text2.style.color = 'white'
        text2.style.opacity = '0.4'
        text1.style.color = '#fedd64'
        text1.style.opacity = '0.7'
    }

    if (scrollDirection === 1) {
        if(content === 'education') {
            back(intro_top, intro_middle, intro_bottom)
            nav_down('translateY(0)', intro, education)
            list.style.transform = 'translateY(0)'
            intro.style.color = '#fedd64'
            intro.style.opacity = '0.7'
            education.style.color = 'white'
            education.style.opacity = '0.4'
            content = 'home'
        }
    } else if (scrollDirection === -1) {
        if(content === 'home') {
            hide(intro_top, intro_middle, intro_bottom)
            nav_up('translateY(-20%)', intro, education)
            content = 'education'
        }
    }

    scrollDirection = 0;
});