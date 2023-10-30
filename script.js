/**calling elements fron the html */
const intro_top = document.getElementById('intro-top')
const intro_middle = document.getElementById('intro-middle')
const intro_bottom = document.getElementById('intro-bottom')
const education_top = document.getElementById('education-top')
const education_middle = document.getElementById('education-middle')
const education_bottom = document.getElementById('education-bottom')
const movie_top = document.getElementById('movie-top')
const movie_middle = document.getElementById('movie-middle')
const movie_bottom = document.getElementById('movie-bottom')
const song_top = document.getElementById('song-top')
const song_middle = document.getElementById('song-middle')
const song_bottom = document.getElementById('song-bottom')
const div1 = document.getElementById('div1')
const intro = document.getElementById('intro')
const education = document.getElementById('education')
const movies = document.getElementById('movies')
const songs = document.getElementById('songs')
const contact = document.getElementById('contact')
const list = document.getElementById('list')
const right_arrow = document.getElementById('arrow-right')
const song_button = document.getElementById('play_button')
const song_img = document.getElementById('song-img')
const mode_border = document.getElementById('mode')
const toggle_mode = document.getElementById('mode-circle')
const body = document.body
const home = document.getElementById('home')
const paragraphs = home.getElementsByTagName('p');
const name = document.getElementById('name')
const lines = document.querySelectorAll('.line')
const label = document.querySelectorAll('.label')
const media = document.querySelectorAll('.img1')
const arrow = document.getElementById('arrow')

/**variables for logic */
let count = 0
let incrementing = false
let scrollDirection = 0
let content = ['home', 'education', 'movies', 'songs', 'contact', intro]
let count1 = 0
let wheelTimeout
let count3 = 0
let targetDiv = null
let targetP1 = null
let targetDiv1 = null
let high_color = ['#fedd64', '#25afee']
let font_color = ['#f8f8f8', '#262735']
let back_color = ['#262735', '#e0e0e0']
let count2 = 0
let song = 'haruka'

/**mouse wheel listener */
document.addEventListener('wheel', (event) => {
    const song_title = document.getElementById(song)
    song_button.style.backgroundImage = 'url("img/play.png")'
    song_img.style.animation = 'none'
    song_title.currentTime = 0;
    song_title.pause()

    clearTimeout(wheelTimeout);

    /**trap for long scrolling */
    if(!incrementing){
        /**condition when scrolling up*/
        if (event.deltaY < 0) {
            if (count != 0){
                scrollDirection = 1;
                console.log(count += scrollDirection)
                scrollDirection = 0
                if(count === 0) {
                    comp_down(intro_top, intro_middle, intro_bottom, education_top, education_middle, education_bottom, intro, education, '0')
                    right_arrow.style.opacity = '0'
                    content = ['home', 'education', 'movies', 'songs', 'contact', intro]
                }
        
                else if(count === -1) {
                    comp_down(education_top, education_middle, education_bottom, movie_top, movie_middle, movie_bottom, education, movies, '-20%')
                    right_arrow.style.opacity = '1'
                    content = ['education', 'movies', 'songs', 'contact', 'home', education]
                    targetDiv1 = document.getElementById('div1')
                    targetP1 = document.getElementById('p1')
                }
        
                else if(count === -2) {
                    comp_down(movie_top, movie_middle, movie_bottom, song_top, song_middle, song_bottom, movies, songs, '-40%')
                    right_arrow.style.opacity = '1'
                    content = ['movies', 'songs', 'contact', 'home', 'education', movies]
                    targetDiv1 = document.getElementById('mdiv1')
                    targetP1 = document.getElementById('mp1')
                }
        
                else if(count === -3) {
                    down(song_top, song_middle, song_bottom, 0, true)
                    nav_down('translateY(-60%)', songs, contact)
        
                    content = ['songs', 'contact', 'home', 'education', 'movies', songs]
                }
            }
            incrementing = true

        /**condition when scrolling down*/
        } else if (event.deltaY > 0) {
            if (count != -4){
                scrollDirection = -1
                console.log(count += scrollDirection)
                scrollDirection = 0;
                if(count === -1) {
                    comp_up(intro_top, intro_middle, intro_bottom, education_top, education_middle, education_bottom, intro, education, '-20%')
                    content = ['education', 'movies', 'songs', 'contact', 'home', education]
                    targetDiv1 = document.getElementById('div1')
                    targetP1 = document.getElementById('p1')
                    right_arrow.style.opacity = '1'
                }
                
                else if(count === -2) {
                    comp_up(education_top, education_middle, education_bottom, movie_top, movie_middle, movie_bottom, education, movies, '-40%')
                    content = ['movies', 'songs', 'contact', 'home', 'education', movies]
                    targetDiv1 = document.getElementById('mdiv1')
                    targetP1 = document.getElementById('mp1')
                    right_arrow.style.opacity = '1'
                }
        
                else if(count === -3) {
                    comp_up(movie_top, movie_middle, movie_bottom, song_top, song_middle, song_bottom, movies, songs, '-60%')
                    content = ['songs', 'contact', 'home', 'education', 'movies', songs]
                    right_arrow.style.opacity = '1'
                }
        
                else if(count === -4) {
                    up(song_top, song_middle, song_bottom, true)
                    nav_up('translateY(-80%)', songs, contact)
        
                    content = ['contact', 'home', 'education', 'movies', 'songs', contact]
                }
            }
            incrementing = true
        }
    }

    right_arrow.style.transform = 'scaleX(1)'
    count1 = 0

    /**components that moves when scrolling up*/
    function comp_down(top1, middle1, bottom1, top2, middle2, bottom2, parent1, parent2, nav) {
        down(top1, middle1, bottom1, 0, true)
        down(top2, middle2, bottom2, '100%', false)
        nav_down(`translateY(${nav})`, parent1, parent2)

        top2.style.transform = 'translateX(0)'
    }

    /**body transition when scrolling up */
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
            top.style.top = '80vw'
            middle.style.top = '90vw'
            bottom.style.top = '100vw'
        
            top.style.opacity = '0'
            middle.style.opacity = '0'
            bottom.style.opacity = '0'
        }
    }

    /**components that moves when scrolling down*/
    function comp_up(top1, middle1, bottom1, top2, middle2, bottom2, parent1, parent2, nav) {
        up(top1, middle1, bottom1, true)
        up(top2, middle2, bottom2, false)
        nav_up(`translateY(${nav})`, parent1, parent2)

        top2.style.transform = 'translateX(0)'
    }

    /**body transition when scrolling down */
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
            top.style.opacity = '1'


            middle.style.top = '26vw'
            middle.style.opacity = '1'

            bottom.style.top = '33vw'
            bottom.style.opacity = '1'
        }
    }


    /**nav transition when scrolling down */
    function nav_up (translate, text1, text2) {
        list.style.transform = translate
        text1.style.opacity = '0.4'
        text2.style.opacity = '0.7'
        text1.style.color = font_color[0]
        text2.style.color = high_color[0]
        
    }

    /**nav transition when scrolling up */
    function nav_down (translate, text1, text2) {
        list.style.transform = translate
        text2.style.opacity = '0.4'
        text1.style.opacity = '0.7'
        text2.style.color = font_color[0]
        text1.style.color = high_color[0]
    }

    wheelTimeout = setTimeout(function() {
        incrementing = false
    }, 200);
});


/**functions for changing the color of circle*/
function changeDivColor(divNumber) {
    if(content[0] === 'education'){
        targetDiv = document.getElementById(`div${divNumber[0]}`);
    }   

    else if(content[0] === 'movies'){
        targetDiv = document.getElementById(`mdiv${divNumber[0]}`);
    }     
    
    targetDiv.style.borderBlockColor = high_color[0]

    targetDiv.style.transform = 'translateY(-10px)'

    setTimeout(()=>{
        targetDiv.style.transform = 'translateY(0)'
    }, 300)

}

function resetDivColor(divNumber) {
    targetDiv.style.borderBlockColor = '#f8f8f8'
}


/**function for selected option */
function selected_opt(divNumber) {
    const spans = home.getElementsByTagName('span')

    function change_font_border(div, p){
        for(let i = 1; i < divNumber.length; i++){
            const changeDiv = document.getElementById(`${div}${divNumber[i]}`)
            const changeP = document.getElementById(`${p}${divNumber[i]}`)

            changeDiv.style.backgroundColor ='transparent'
            changeDiv.style.borderBlockColor = '#f8f8f8'

            changeP.style.color = font_color[0]
        }
    }

    /**changin the contents of components when selecting an option */
    if (content[0] === 'education'){
        const school = document.querySelector('.school')
        const school_img = document.getElementById('school-img')
        const school_about = document.getElementById('about')
        targetDiv1 = document.getElementById(`div${divNumber[0]}`)
        targetP1 = document.getElementById(`p${divNumber[0]}`)

        education_top.style.transform = 'translateX(0)'

        if (count1 == 1)
                right_arrow.style.transform = 'scaleX(1)'
        count1 = 0

        targetDiv1.style.backgroundColor = high_color[0]
        targetDiv1.style.borderBlockColor = '#f8f8f8'
        targetP1.style.color = high_color[0]

        change_font_border('div', 'p')

        if (divNumber[0] === 1) {
            school.style.opacity = '0'
            school.style.width = '25vw'
            school.style.paddingRight = '18vw'
            school.style.marginTop = '1vw'
            school_img.style.opacity = '0'

            setTimeout(()=>{
                school.style.opacity = '1'
                school.innerHTML  = '<span>C</span>ebu <span>T</span>echnological <span>U</span>niversity <span>M</span>ain <span>C</span>ampus.'
                for(var i=0; i < spans.length; i++){
                    spans[i].style.color = high_color[0]
                }
                school_about.innerHTML = "I'm currently a student at Cebu Technological University Main Campus, pursuing a Bachelor of Science in Information Technology (BSIT). I have always had a passion for technology and a deep curiosity about the digital world. My journey in the field of IT has been an exciting and fulfilling one, and I'm eager to continue expanding my knowledge and skills in this ever-evolving field. I believe that education is the key to unlocking new opportunities and making a positive impact in the world, and I am dedicated to achieving my academic and career goals in the realm of Information Technology."
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
                for(var i=0; i < spans.length; i++){
                    spans[i].style.color = high_color[0]
                }
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
                for(var i=0; i < spans.length; i++){
                    spans[i].style.color = high_color[0]
                }
                school_about.innerHTML = "As a proud graduate of Arcelo Memorial National High School with a focus on Information and Communication Technology (ICT), I am excited to share my journey and accomplishments from my junior high school years. Throughout my time at Arcelo Memorial, I immersed myself in the world of ICT, honing my skills and knowledge in this dynamic field. My experiences have not only equipped me with a strong foundation in technology but have also instilled in me a passion for innovation and problem-solving. I am eager to showcase the projects, achievements, and growth that have defined my educational path, demonstrating my dedication to the field of ICT and my commitment to continuous learning and advancement."
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
                for(var i=0; i < spans.length; i++){
                    spans[i].style.color = high_color[0]
                }
                school_about.innerHTML = "As a proud graduate of Simeon Ayuda Elementary School, I am thrilled to present my academic journey that spans several years of consistent achievement. My time at Simeon Ayuda Elementary School was marked by a dedicated pursuit of excellence, resulting in a consecutive string of academic accomplishments year after year. This formative experience instilled in me not only a strong foundation in elementary education but also a deep commitment to continued growth and learning."
                school_img.style.opacity = '1'
                school_img.src = 'img/saes.svg'
            }, 500)
        }
    }

    else if (content[0] === 'movies'){
        const movie_title = document.getElementById('movie-title')
        const movie_iframe = document.getElementById('movie-iframe')
        const movie_about = document.getElementById('movie-about')
        targetDiv1 = document.getElementById(`mdiv${divNumber[0]}`)
        targetP1 = document.getElementById(`mp${divNumber[0]}`)

        movie_top.style.transform = 'translateX(0)'
        if (count1 == 1)
                right_arrow.style.transform = 'scaleX(1)'
        count1 = 0

        targetDiv1.style.backgroundColor = high_color[0]
        targetDiv1.style.borderBlockColor = '#f8f8f8'
        targetP1.style.color = high_color[0]

        change_font_border('mdiv', 'mp')

        if (divNumber[0] === 1) {
            movie_title.style.opacity = '0'
            movie_iframe.style.opacity = '0'
            movie_title.style.marginTop = '0.5vw'
            movie_title.style.width = '18vw'
            movie_title.style.paddingBottom = '0vw'
            movie_title.style.paddingRight = '11vw'


            setTimeout(()=>{
                movie_iframe.src = 'https://www.youtube.com/embed/cnf4h5HT4dc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'
                movie_iframe.style.opacity = '1'
                movie_title.innerHTML = '<span>T</span>he <span>L</span>ord of <span>T</span>he <span>R</span>ings.'
                for(var i=0; i < spans.length; i++){
                    spans[i].style.color = high_color[0]
                }
                movie_title.style.opacity = '1'
                movie_about.innerHTML = `"The Lord of the Rings" is an epic high-fantasy trilogy written by J.R.R. Tolkien. It follows the perilous journey of a humble hobbit named Frodo Baggins, who is entrusted with the task of destroying a powerful and malevolent ring, created by the dark lord Sauron, which holds the fate of Middle-earth in its grip. Frodo, along with a diverse fellowship of companions, embarks on a quest to Mount Doom, where the ring must be destroyed. Their journey is marked by battles, magic, alliances, and the struggle against the forces of darkness. The story explores themes of courage, friendship, and the corrupting influence of power, creating a rich and immersive world of fantasy and adventure.`
            }, 500)
        }

        else if (divNumber[0] === 2) {
            movie_title.style.opacity = '0'
            movie_title.style.marginTop = '6vw'
            movie_title.style.paddingBottom = '5vw'
            movie_title.style.width = '18vw'
            movie_title.style.paddingRight = '11vw'
            movie_iframe.style.opacity = '0'


            setTimeout(()=>{
                movie_iframe.src = 'https://www.youtube.com/embed/wyYrfmXhUVc?si=FyQI1NkabDNEOI5j?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'
                movie_iframe.style.opacity = '1'
                movie_title.innerHTML = '<span>J</span>ohn <span>W</span>ick.'
                if(count3 === 1){
                    for(var i=0; i < spans.length; i++){
                        spans[i].style.color = '#25afee'
                    }
                }
                else{
                    for(var i=0; i < spans.length; i++){
                        spans[i].style.color = '#fedd64'
                    }
                }
                movie_title.style.opacity = '1'
                movie_about.innerHTML = `"John Wick" is a high-octane action film that introduces us to a retired hitman, John Wick, portrayed by Keanu Reeves. Grieving the loss of his wife and seeking solace in a dog she left behind, he's thrust back into the deadly underworld he once ruled when a group of Russian mobsters break into his home, steal his car, and kill his beloved pet. Wick embarks on a relentless and stylish vendetta, taking on an entire criminal empire with unmatched skill and determination. Fueled by a captivating mix of intense gunfights and martial arts, the film immerses viewers in a thrilling, visually striking world of retribution, making John Wick a legendary and iconic character in modern action cinema.`
            }, 500)
        }

        else if (divNumber[0] === 3) {
            movie_title.style.opacity = '0'
            movie_title.style.marginTop = '0vw'
            movie_title.style.paddingBottom = '0.5vw'
            movie_title.style.width = '15vw'
            movie_title.style.paddingRight = '14vw'
            movie_iframe.style.opacity = '0'


            setTimeout(()=>{
                movie_iframe.src = 'https://www.youtube.com/embed/HIGDXIDgXy0?si=Hj8u-EgNad9x994j?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'
                movie_iframe.style.opacity = '1'
                movie_title.innerHTML = '<span>N</span>ow <span>Y</span>ou <span>S</span>ee <span>M</span>e.'
                if(count3 === 1){
                    for(var i=0; i < spans.length; i++){
                        spans[i].style.color = '#25afee'
                    }
                }
                else{
                    for(var i=0; i < spans.length; i++){
                        spans[i].style.color = '#fedd64'
                    }
                }
                movie_title.style.opacity = '1'
                movie_about.innerHTML = `"Now You See Me" is a thrilling heist and magic-themed movie that follows a group of four illusionists who, under the guise of a high-stakes magic act called the Four Horsemen, pull off a series of seemingly impossible bank heists during their performances. As they evade the authorities and outsmart the FBI, the film unfolds as a cat-and-mouse chase, revealing layers of deception, misdirection, and intricate magic tricks. With an ensemble cast, including Jesse Eisenberg, Mark Ruffalo, Woody Harrelson, Isla Fisher, and Morgan Freeman, the movie is a mind-bending blend of heist caper and illusionist spectacle, keeping the audience engaged and mystified until the final act's unexpected twist.`
            }, 500)
        }

        else if (divNumber[0] === 4) {
            movie_title.style.opacity = '0'
            movie_iframe.style.opacity = '0'
            movie_title.style.marginTop = '0.5vw'
            movie_title.style.width = '18vw'
            movie_title.style.paddingBottom = '0vw'
            movie_title.style.paddingRight = '11vw'


            setTimeout(()=>{
                movie_iframe.src = 'https://www.youtube.com/embed/2QKg5SZ_35I?si=yiwn3hZKV31dfbfU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'
                movie_iframe.style.opacity = '1'
                movie_title.innerHTML = '<span>J</span>umanji: <span>W</span>elcome to the <span>J</span>ungle.'
                if(count3 === 1){
                    for(var i=0; i < spans.length; i++){
                        spans[i].style.color = '#25afee'
                    }
                }
                else{
                    for(var i=0; i < spans.length; i++){
                        spans[i].style.color = '#fedd64'
                    }
                }
                movie_title.style.opacity = '1'
                movie_about.innerHTML = `In "Jumanji: Welcome to the Jungle," a group of high school students serving detention discovers an old video game console with the game "Jumanji." As they start playing, they get sucked into the virtual world and inhabit the avatars they chose. With their real-world personalities and insecurities, they must navigate the perilous jungle environment, complete challenges, and face dangerous foes in a bid to escape the game and return to the real world. The film combines humor and adventure as the characters learn to work together and confront their fears, all within the unpredictable and wild world of "Jumanji."`
            }, 500)
        }
    }
}


/**function to move the top container*/
function go_right(){
    count1++

    if(count1 === 1){
        right_arrow.style.transform = 'scaleX(-1)'
    }
    else {
        right_arrow.style.transform = 'scaleX(1)'
        count1 = 0
    }

    if(content[0] === 'education'){
        if(count1 === 1){
            education_top.style.transform = 'translateX(-43vw)'
        }
        else {
            education_top.style.transform = 'translateX(0)'
            count1 = 0
        }
    }

    else if(content[0] === 'movies'){
        if(count1 == 1){
            movie_top.style.transform = 'translateX(-29.5vw)'
        }
        else {
            movie_top.style.transform = 'translateX(0)'
            count1 = 0
        }
    }

    else if(content[0] === 'songs') {
        if(count1 === 1){
            song_top.style.transform = 'translateX(-35.5vw)'
        }
        else {
            song_top.style.transform = 'translateX(0)'
            count1 = 0
        }
    }
}


/**lyrics */
function play_audio() {
    const song_title = document.getElementById(song)
    const lyrics = document.getElementById('song-lyrics')

    if (count2 == 0) {
        song_button.style.backgroundImage = 'url("img/pause.png")'
        song_img.style.animation = 'spin 6s linear infinite'
        song_title.play();
        count2++;


        song_title.addEventListener('ended', function(){
            song_button.style.backgroundImage = 'url("img/redo.png")'
            song_img.style.animation = 'none'
            count2 = 0;
        })

        if (song == 'haruka'){

            song_title.addEventListener('timeupdate', function(){
                if(song_title.currentTime >= 0 && song_title.currentTime <= 43) {
                    lyrics.innerHTML = `omoidasu no wa deatta hi no koto<br>
                    (I recall the day we met)<br>
                    <br>
                    dare no moto ni mo kaerenai boku wo mitsuke dashite kureta<br>
                    (You found me when did not have anyone to go home to)<br>
                    <br>
                    sukui dashite kureta, wasureru koto nai kimi no egao<br>
                    (Your smile that I could never forget)<br>
                    <br>
                    kurashi no sukima, yofuke no inori<br>
                    (A corner of our lives, Late night prayers)<br>
                    <br>
                    itsudemo kimi to tomo ni aruite kita kiseki<br>
                    (The miracle of always being able to walk by your side)`
                }

                else if(song_title.currentTime < 82) {
                    lyrics.innerHTML = `tsurai koto mo ureshii koto mo  wakachi aeru sonna hibi yo<br>
                    (Days where we shared both happy and painful things)<br>
                    <br>
                    furikaereba kazoe kirenai omoide ga afuredashite kuru<br>
                    (If I look back, uncountable number of memories come flooding back)<br>
                    <br>
                    dare ni mo mienai tokoro de ganbatteru<br>
                    (We are doing our best in a place no one can see)<br>
                    <br>
                    kimi no soba ni irareru koto sore dake de<br>
                    (Just being able to be by your side)<br>
                    <br>
                    konna ni hora shiawase nanda yo<br>
                    (Brings me so much happiness)` 
                }

                else if(song_title.currentTime < 110){
                    lyrics.innerHTML = `komi agete kuru omoi wa tada arigatou<br>
                    (The feeling that surges up is just gratitude)<br>
                    <br>
                    otozureta yorokobi no haru wa<br>
                    (The spring of happiness that came around)<br>
                    <br>
                    tabitachi no kisetsu<br>
                    (Was a season to set out to travel)<br>
                    <br>
                    hanareta machi ni mo tsuredashite kureta ne<br>
                    (You took me along even as we left the town)<br>
                    <br>
                    hitori fuan na hibi ni<br>
                    (On days when you are uneasy by yourself)`
                }

                else if(song_title.currentTime < 141){
                    lyrics.innerHTML = `samishisou na kimi ni okuru e-ru boku ga tsuiteru yo<br>
                    (The yell I send you when you are sad is 'I am here with you!')<br>
                    <br>
                    tanoshii koto bakari janai nichijou ni<br>
                    (There were days that were not filled with only fun things)<br>
                    <br>
                    afure dashita kimi no namida<br>
                    (and your tears that flowed on such days)<br>
                    <br>
                    soredemo mae wo muite aruite sou yatte otona ni natteku<br>
                    (Even then we keep walking forward and so, we become adults)<br>
                    <br>
                    kimi no soba ni irareru koto<br>
                    (The fact that I can be by your side and)`
                }

                else if(song_title.currentTime < 175){
                    lyrics.innerHTML = `kimi no yorokobi wa boku no yorokobi de<br>
                    (Your happiness is my happiness)<br>
                    <br>
                    kimi no taisetsu ga shiawase ga<br>
                    (I hope that the things that are important to you)<br>
                    <br>
                    itsumade mo kimi to arimasu you ni<br>
                    (and your happiness will always stay with you)<br>
                    <br>
                    ne kimi no soba ni wa mou takusan no ai ga afureteru<br>
                    (Nowadays, around you, so much love is overflowing)<br>
                    <br>
                    dakara ima wa douka nakanaide no hi no you ni egao de<br>
                    (So, now please don't cry, stay with a smile like back in the day)`
                }

                else if(song_title.currentTime < 211){
                    lyrics.innerHTML = `fure kaereba ikutsu mo no omoide ga yomigaette kuru<br>
                    (When I look back, a number of memories come flooding back)<br>
                    <br>
                    dare ni mo mienai tokoro de nagashita namida mo hora<br>
                    (The tears the we shed in a place where no one could see)<br>
                    <br>
                    ima no kimi ni tsunagatteru<br>
                    (Are still connected to you today)<br>
                    <br>
                    takusan no ai ni tsunagatteru<br>
                    (And connected to a lot of love)<br>
                    <br>
                    komi agete kuru omoi wa tada arigatou<br>
                    (The feeling that surges up is just gratitude)`
                }

                else{
                    lyrics.innerHTML = `itsumade mo shiawase de<br>
                    (May you always be happy)<br>
                    <br>
                    itsumade mo aishiteru yo<br>
                    (I will always love you)`
                }
            })
        }
        
    }

    else{
        song_button.style.backgroundImage = 'url("img/play.png")'
        song_img.style.animation = 'none'
        song_title.pause();
        count2 = 0;
    }
}



function toggle_button() {
    count3++;

    if (count3 === 1) {
        high_color = ['#25afee', '#fedd64']
        font_color = ['#262735', '#f8f8f8']
        back_color = ['#e0e0e0', '#262735']
        body.style.opacity = '0'
        toggle_mode.style.transform = 'translateX(-125%)'
        toggle_mode.style.backgroundColor = '#f2c138'

        mode_border.addEventListener('mouseover', () => {
            mode_border.style.border = '1px solid #f2c138'
        });
          
        mode_border.addEventListener('mouseout', () => {
            mode_border.style.border = '1px solid #262735'
        });
          
    }

    else{
        high_color = ['#fedd64', '#25afee']
        font_color = ['#f8f8f8', '#262735']
        back_color = ['#262735', '#e0e0e0']
        body.style.opacity = '0'
        toggle_mode.style.transform = 'translateX(0)'
        toggle_mode.style.backgroundColor = '#25afee'
        count3 = 0

        mode_border.addEventListener('mouseover', () => {
            mode_border.style.border = '1px solid #25afee'
        });
          
        mode_border.addEventListener('mouseout', () => {
            mode_border.style.border = '1px solid #f8f8f8'
        });
    }


    intro.style.color = font_color[0]
    education.style.color = font_color[0]
    movies.style.color = font_color[0]
    songs.style.color = font_color[0]
    contact.style.color = font_color[0]
    content[5].style.color = high_color[0]

    setTimeout(() => {
        body.style.opacity = '1'
        body.style.backgroundColor = back_color[0]
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = font_color[0]

            const spans = paragraphs[i].getElementsByTagName('span');
            for (var x = 0; x < spans.length; x++) {
                spans[x].style.color = high_color[0]
            }
        }

        for (var i = 0; i < media.length; i++) {
            media[i].style.borderColor = high_color[0]
        }

        label.forEach(function(element){
            element.style.color = high_color[0]
        })
    
        lines.forEach(function(element){
            element.style.backgroundColor = font_color[0]
        })

        name.style.color = high_color[0]

        targetDiv1.style.backgroundColor = high_color[0]
        targetP1.style.color = high_color[0]
    }, 250)

    arrow.style.color = font_color[0]
    right_arrow.addEventListener('mouseover', () => {
        arrow.style.color = high_color[0]
    });
      
    right_arrow.addEventListener('mouseout', () => {
        arrow.style.color = font_color[0]
    });
}
