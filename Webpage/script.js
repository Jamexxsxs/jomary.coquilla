const intro_top = document.getElementById('intro-top')
const intro_middle = document.getElementById('intro-middle')
const intro_bottom = document.getElementById('intro-bottom')
const education_top = document.getElementById('education-top')
const education_middle = document.getElementById('education-middle')
const education_bottom = document.getElementById('education-bottom')
const div1 = document.getElementById('div1')
const intro = document.getElementById('intro')
const education = document.getElementById('education')
const movies = document.getElementById('movies')
const songs = document.getElementById('songs')
const contact = document.getElementById('contact')
const list = document.getElementById('list')
const right_arrow = document.getElementById('arrow-right')


let count = 0
let incrementing = false
let scrollDirection = 0

div1.style.borderBlockColor = '#fedd64'

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
            bottom.style.transitionDuration = '1.2s'
        
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
            bottom.style.opacity = '0'
        }
        else{
            top.style.top = '0'
            top.style.transitionDuration = '1.5s'
            top.style.opacity = '1'


            middle.style.top = '26vw'
            middle.style.transitionDuration = '1.6s'
            middle.style.opacity = '1'

            bottom.style.top = '33vw'
            bottom.style.transitionDuration = '1.7s'
            bottom.style.opacity = '1'
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
            right_arrow.style.opacity = '0'
            nav_down('translateY(0)', intro, education)
        }

        else if(count === -1) {
            down(education_top, education_middle, education_bottom, 0, true)
            right_arrow.style.opacity = '1'
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
            right_arrow.style.opacity = '1'
            nav_up('translateY(-20%)', intro, education)
        }
        
        else if(count === -2) {
            up(education_top, education_middle, education_bottom, true)
            right_arrow.style.opacity = '0'
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


function changeDivColor(divNumber) {
    const targetDiv = document.getElementById(`div${divNumber[0]}`);
    targetDiv.style.borderBlockColor = "#fedd64";

    targetDiv.style.transform = 'translateY(-10px)'

    setTimeout(()=>{
        targetDiv.style.transform = 'translateY(0)'
    }, 500)
}

function resetDivColor(divNumber) {
    const targetDiv = document.getElementById(`div${divNumber[0]}`);
    targetDiv.style.borderBlockColor = "white";
}

function selected_educ(divNumber) {
    const school = document.querySelector('.school')
    const school_img = document.getElementById('school-img')
    const school_about = document.getElementById('about')
    const targetDiv = document.getElementById(`div${divNumber[0]}`)
    const targetP = document.getElementById(`p${divNumber[0]}`)

    education_top.style.transform = 'translateX(0)'
    if (count1 == 1)
            right_arrow.style.transform = 'scaleX(1)'
    count1 = 0

    targetDiv.style.backgroundColor ='#fedd64'
    targetDiv.style.borderBlockColor = "#fedd64";

    targetP.style.color = '#fedd64'

    for(let i = 1; i < divNumber.length; i++){
        const changeDiv = document.getElementById(`div${divNumber[i]}`)
        const changeP = document.getElementById(`p${divNumber[i]}`)

        changeDiv.style.backgroundColor ='transparent'
        changeDiv.style.borderBlockColor = 'white';

        changeP.style.color = 'white'
    }

    if (divNumber[0] === 1) {
        school.style.opacity = '0'
        school.style.width = '25vw'
        school.style.paddingRight = '18vw'
        school.style.marginTop = '1vw'
        school_img.style.opacity = '0'

        setTimeout(()=>{
            school.style.opacity = '1'
            school.innerHTML  = '<span>C</span>ebu <span>T</span>echnological <span>U</span>niversity <span>M</span>ain <span>C</span>ampus.'
            school_img.style.opacity = '1'
            school_img.src = 'img/ctu.svg'
        }, 500)
    }

    else if (divNumber[0] === 2) {
        school.style.opacity = '0'
        school.style.width = '23vw'
        school.style.paddingRight = '20vw'
        school.style.marginTop = '3vw'
        school_img.style.opacity = '0'


        setTimeout(()=>{
            school.style.opacity = '1'
            school.innerHTML  = '<span>U</span>niversity of <span>C</span>ebu <span>B</span>anilad.'
            school_about.innerHTML = 'As a recent graduate from the esteemed University of Cebu Banilad with a focus on STEM (Science, Technology, Engineering, and Mathematics), I have cultivated a strong foundation in the fields of science and technology. My academic journey has not only equipped me with a deep understanding of these subjects but has also instilled in me a passion for innovation and problem-solving. Throughout my high school years, I have eagerly embraced challenges, sought out opportunities for hands-on learning, and consistently pushed the boundaries of my knowledge. With a solid educational background and an unwavering enthusiasm for STEM, I am eager to embark on the next chapter of my academic and professional journey.'
            school_img.style.opacity = '1'
            school_img.src = 'img/uc.svg'
        }, 500)
    }

    else if (divNumber[0] === 3) {
        school.style.opacity = '0'
        school.style.width = '21vw'
        school.style.paddingRight = '22vw'
        school.style.marginTop = '0vw'
        school_img.style.opacity = '0'

        setTimeout(()=>{
            school.style.opacity = '1'
            school.innerHTML  = '<span>A</span>rcelo <span>M</span>emorial <span>N</span>ational <span>H</span>igh <span>S</span>chool.'
            school_img.style.opacity = '1'
            school_img.src = 'img/amnhs.svg'
        }, 500)
    }

    else if (divNumber[0] === 4) {
        school.style.paddingRight = '22vw'
        school.style.opacity = '0'
        school.style.width = '21vw'
        school.style.marginTop = '2vw'
        school_img.style.opacity = '0'

        setTimeout(()=>{
            school.style.opacity = '1'
            school.innerHTML  = '<span>S</span>imeon <span>A</span>yuda <span>E</span>lementary <span>S</span>chool.'
            school_img.style.opacity = '1'
            school_img.src = 'img/saes.svg'
        }, 500)
    }
}

let count1 = 0
function go_right(){
    count1++
    if(count1 == 1){
        education_top.style.transform = 'translateX(-43vw)'
        right_arrow.style.transform = 'scaleX(-1)'
    }
    else {
        education_top.style.transform = 'translateX(0)'
        right_arrow.style.transform = 'scaleX(1)'
        count1 = 0
    }

}
