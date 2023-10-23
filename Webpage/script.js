const intro_top = document.getElementById('intro-top')
const intro_middle = document.getElementById('intro-middle')
const intro_bottom = document.getElementById('intro-bottom')
const education_top = document.getElementById('education-top')
const education_middle = document.getElementById('education-middle')
const education_bottom = document.getElementById('education-bottom')
const movie_top = document.getElementById('movie-top')
const movie_middle = document.getElementById('movie-middle')
const movie_bottom = document.getElementById('movie-bottom')
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
let content = 'home'
let count1 = 0

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

    right_arrow.style.transform = 'scaleX(1)'
    count1 = 0

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

            content = 'home'
        }

        else if(count === -1) {
            down(education_top, education_middle, education_bottom, 0, true)
            down(movie_top, movie_middle, movie_bottom, '100%', false)
            right_arrow.style.opacity = '1'
            nav_down('translateY(-20%)', education, movies)

            content = 'education'
        }

        else if(count === -2) {
            down(movie_top, movie_middle, movie_bottom, 0, true)
            right_arrow.style.opacity = '1'
            nav_down('translateY(-40%)', movies, songs)

            content = 'movies'
        }

        else if(count === -3) {
            nav_down('translateY(-60%)', songs, contact)

            content = 'songs'
        }
    } else if (scrollDirection === -1) {
        if(count === -1) {
            up(intro_top, intro_middle, intro_bottom, true)
            up(education_top, education_middle, education_bottom, false)
            right_arrow.style.opacity = '1'
            nav_up('translateY(-20%)', intro, education)

            content = 'education'
        }
        
        else if(count === -2) {
            up(education_top, education_middle, education_bottom, true)
            up(movie_top, movie_middle, movie_bottom, false)
            right_arrow.style.opacity = '1'
            nav_up('translateY(-40%)', education, movies)

            content = 'movies'
        }

        else if(count === -3) {
            up(movie_top, movie_middle, movie_bottom, true)
            nav_up('translateY(-60%)', movies, songs)

            content = 'songs'
        }

        else if(count === -4) {
            nav_up('translateY(-80%)', songs, contact)

            content = 'contact'
        }
    }
    
    scrollDirection = 0;
    setTimeout(() => {
        incrementing = false
    }, 200)
});


function changeDivColor(divNumber) {
    if(content == 'education'){
        const targetDiv = document.getElementById(`div${divNumber[0]}`);
        targetDiv.style.borderBlockColor = "#fedd64";

        targetDiv.style.transform = 'translateY(-10px)'

        setTimeout(()=>{
            targetDiv.style.transform = 'translateY(0)'
        }, 500)
    }   

    else if(content == 'movies'){
        const targetDiv = document.getElementById(`mdiv${divNumber[0]}`);
        targetDiv.style.borderBlockColor = "#fedd64";

        targetDiv.style.transform = 'translateY(-10px)'

        setTimeout(()=>{
            targetDiv.style.transform = 'translateY(0)'
        }, 500)
    }      
}

function resetDivColor(divNumber) {
    if (content == 'education'){
        const targetDiv = document.getElementById(`div${divNumber[0]}`);
        targetDiv.style.borderBlockColor = "white";
    }

    else if (content == 'movies'){
        const targetDiv = document.getElementById(`mdiv${divNumber[0]}`);
        targetDiv.style.borderBlockColor = "white";
    }
}

function selected_educ(divNumber) {
    if (content == 'education'){
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
                school_about.innerHTML = "As a proud graduate of Simeon Ayuda Elementary School, I am thrilled to present my academic journey that spans several years of consistent achievement. My time at Simeon Ayuda Elementary School was marked by a dedicated pursuit of excellence, resulting in a consecutive string of academic accomplishments year after year. This formative experience instilled in me not only a strong foundation in elementary education but also a deep commitment to continued growth and learning."
                school_img.style.opacity = '1'
                school_img.src = 'img/saes.svg'
            }, 500)
        }
    }

    else if (content == 'movies'){
        const movie_title = document.getElementById('movie-title')
        const movie_iframe = document.getElementById('movie-iframe')
        const movie_about = document.getElementById('movie-about')
        const targetDiv = document.getElementById(`mdiv${divNumber[0]}`)
        const targetP = document.getElementById(`mp${divNumber[0]}`)

        movie_top.style.transform = 'translateX(0)'
        if (count1 == 1)
                right_arrow.style.transform = 'scaleX(1)'
        count1 = 0

        targetDiv.style.backgroundColor ='#fedd64'
        targetDiv.style.borderBlockColor = "#fedd64";

        targetP.style.color = '#fedd64'

        for(let i = 1; i < divNumber.length; i++){
            const changeDiv = document.getElementById(`mdiv${divNumber[i]}`)
            const changeP = document.getElementById(`mp${divNumber[i]}`)

            changeDiv.style.backgroundColor ='transparent'
            changeDiv.style.borderBlockColor = 'white';

            changeP.style.color = 'white'
        }

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
                movie_title.innerHTML = '<span>T</span>he <span>L</span>ord of <span>T</span>he <span>R</span>ings'
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
                movie_title.innerHTML = '<span>J</span>ohn <span>W</span>ick'
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
                movie_title.innerHTML = '<span>N</span>ow <span>Y</span>ou <span>S</span>ee <span>M</span>e'
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
                movie_title.innerHTML = '<span>J</span>umanji: <span>W</span>elcome to the <span>J</span>ungle'
                movie_title.style.opacity = '1'
                movie_about.innerHTML = `In "Jumanji: Welcome to the Jungle," a group of high school students serving detention discovers an old video game console with the game "Jumanji." As they start playing, they get sucked into the virtual world and inhabit the avatars they chose. With their real-world personalities and insecurities, they must navigate the perilous jungle environment, complete challenges, and face dangerous foes in a bid to escape the game and return to the real world. The film combines humor and adventure as the characters learn to work together and confront their fears, all within the unpredictable and wild world of "Jumanji."`
            }, 500)
        }
    }
}

function go_right(){
    count1++
    if(content == 'education'){
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

    if(content == 'movies'){
        if(count1 == 1){
            right_arrow.style.transform = 'scaleX(-1)'
            movie_top.style.transform = 'translateX(-29.5vw)'
        }
        else {
            right_arrow.style.transform = 'scaleX(1)'
            movie_top.style.transform = 'translateX(0)'
            count1 = 0
        }
    }
}
