const intro_top = document.getElementById('intro-top')
const intro_middle = document.getElementById('intro-middle')
const intro_bottom = document.getElementById('intro-bottom')
const education_top = document.getElementById('education-top')
const education_middle = document.getElementById('education-middle')
const education_bottom = document.getElementById('education-bottom')
const intro = document.getElementById('intro')
const education = document.getElementById('education')
const movies = document.getElementById('movies')
const songs = document.getElementById('songs')
const contact = document.getElementById('contact')
const list = document.getElementById('list')


let count = 0
let incrementing = false
let scrollDirection = 0

document.addEventListener('wheel', (event) => {
    if(!incrementing){
        if (event.deltaY < 0) {
            scrollDirection = 1;
            if (count != 0)
                count++
            incrementing = true
        } else if (event.deltaY > 0) {
            scrollDirection = -1
            if (count != -4)
                count--
            incrementing = true
        }
    }

    function down (top, middle, bottom, translate, bool) {
        if(bool === true){
            top.style.transform = 'translateY(' + translate + ')'
            middle.style.transform = 'translateY(' + translate + ')'
            bottom.style.transform = 'translateY(' + translate + ')'

            top.style.opacity = '1'
            middle.style.opacity = '1'
            bottom.style.opacity = '1'
        }
        else{
            top.style.top = translate
            middle.style.top = translate
            bottom.style.top = translate


            top.style.transitionDuration = '1.2s'
            middle.style.transitionDuration = '0.5s'
        
            top.style.opacity = '0'
            middle.style.opacity = '0'
            bottom.style.opacity = '0'
        }
    }

    function up (top, middle, bottom, bool) {
        if(bool === true){
            top.style.transform = 'translateY(-110%)'
            middle.style.transform = 'translateX(110%)'
            bottom.style.transform = 'translateX(110%)'

            top.style.opacity = '0'
            middle.style.opacity = '0'
        }
        else{
            top.style.top = '0'
            top.style.transitionDuration = '1.5s'
            top.style.opacity = '1'


            middle.style.top = '49vh'
            middle.style.transitionDuration = '1.6s'
            middle.style.opacity = '1'
        }
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
        if(count === 0) {
            down(intro_top, intro_middle, intro_bottom, 0, true)
            down(education_top, education_middle, education_bottom, '100%', false)
            nav_down('translateY(0)', intro, education)
        }

        else if(count === -1) {
            down(education_top, education_middle, education_bottom, 0, true)
            nav_down('translateY(-20%)', education, movies)
        }

        else if(count === -2) {
            nav_down('translateY(-40%)', movies, songs)
        }

        else if(count === -3) {
            nav_down('translateY(-60%)', songs, contact)
        }
    } else if (scrollDirection === -1) {
        if(count === -1) {
            up(intro_top, intro_middle, intro_bottom, true)
            up(education_top, education_middle, education_bottom, false)
            nav_up('translateY(-20%)', intro, education)
        }
        
        else if(count === -2) {
            up(education_top, education_middle, education_bottom, true)
            nav_up('translateY(-40%)', education, movies)
        }

        else if(count === -3) {
            nav_up('translateY(-60%)', movies, songs)
        }

        else if(count === -4) {
            nav_up('translateY(-80%)', songs, contact)
        }
    }
    
    scrollDirection = 0;
    setTimeout(() => {
        incrementing = false
    }, 200)
});