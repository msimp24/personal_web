
const enterBtn = document.querySelector(".square");
const topPos = enterBtn.offsetTop; 
const navBar = document.querySelector('.fixed-nav-bar');
const boxes = document.querySelectorAll(".nav-item");
var currWindowWidth = window.innerWidth;
var currYPos = window.scrollY;


//buttons for webpages

const aboutMeBtn = document.querySelector("#about-me-btn");
const skillsBtn = document.querySelector("#skills-btn");
const contactBtn = document.querySelector("#contact-btn");

//web page headers
const aboutMePg = document.querySelector("#about-me-pg");
const skillsPg = document.querySelector("#skills-pg");
const contactPg = document.querySelector("#contact-pg");

//contact me text fields/buttons
const firstNameTxt = document.querySelector('#first-name');
const lastNameTxt = document.querySelector('#last-name');
const emailTxt = document.querySelector('#inputEmail');
const subjectTxt = document.querySelector('#inputSubject');
const messageTxt = document.querySelector('#inputMessage');
const submitBtn = document.querySelector('#submit-button');



// down arrow button
var rect = enterBtn.getBoundingClientRect();



window.addEventListener('scroll', () =>{
    currYPos = window.scrollY;
    if(currYPos > (rect.top)){
        if(currWindowWidth > 800){
            navBar.style.display = 'initial';
        }
        else{
            navBar.style.display = "none";
            
        }
    }
    else{
        navBar.style.display = "none";
    }
})

window.addEventListener('resize', () =>{
    currWindowWidth = window.innerWidth;
    
    if(currWindowWidth > 800){
        if(currYPos > rect.top){
            navBar.style.display = 'initial';
        }
        else{
            navBar.style.display = 'none'
        }

    }
    else{
        navBar.style.display = 'none';
    }

    console.log(currWindowWidth);

})

// event listeners for navbar buttons
enterBtn.addEventListener('click', ()=>{
    scrolldiv(aboutMePg);
    navBar.style.display = "block";
    window.location.href = "#/about-me"
})
aboutMeBtn.addEventListener('click', () =>{
    scrolldiv(aboutMePg);
    window.location.href ="#/about-me";
})
skillsBtn.addEventListener('click', () =>{
    scrolldiv(skillsPg);
    window.location.href ="#/skills";
})
contactBtn.addEventListener('click', () =>{
    scrolldiv(contactPg);
    window.location.href ="#/contact";
})

submitBtn.addEventListener('click', async ()=>{
    var firstName = firstNameTxt.value;
    var lastName = lastNameTxt.value;
    var email = emailTxt.value;
    var subject = subjectTxt.value;
    var message = messageTxt.value;

    var data = {firstName, lastName, email, subject, message};

    const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }


    await fetch('/email', options);

    firstNameTxt.value = "";
    lastNameTxt.value = "";
    emailTxt.value = "";
    subjectTxt.value = "";
    messageTxt.value = "";

})

//changes nav box background color when hovered over

boxes.forEach(box =>{
    box.addEventListener('mouseover', () =>{
        box.classList.remove('bg-dark');
        box.children[0].classList.remove('text-white');
        box.children[0].classList.add('text-black');
    })
    box.addEventListener('mouseout', ()=>{
         box.classList.add('bg-dark')
         box.children[0].classList.add('text-white');
    })
})


// functions for smooth scroll to specific points in the
function scrolldiv(obj) {
    window.scrollTo(0, 
    findPosition(obj));
}
function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}


