const enterBtn = document.querySelector(".square");
const topPos = enterBtn.offsetTop; 
const navBar = document.querySelector('#fixed-nav-bar');

//buttons for webpages

const aboutMeBtn = document.querySelector("#about-me-btn");
const workExpBtn = document.querySelector("#work-exp-btn");

//web page headers
const aboutMePg = document.querySelector("#about-me-pg");
const workExpPg = document.querySelector("#work-experience-pg")

var rect = enterBtn.getBoundingClientRect();



enterBtn.addEventListener('click', ()=>{
    scrolldiv(aboutMePg);
    navBar.style.display = "block";
    window.location.href = "#/about-me"
})
aboutMeBtn.addEventListener('click', () =>{
    scrolldiv(aboutMePg);
    window.location.href ="#/about-me";
})
workExpBtn.addEventListener('click', () =>{
    scrolldiv(workExpPg);
    window.location.href ="#/work-experience";
})

window.addEventListener('scroll', () =>{
    console.log(navBar.getBoundingClientRect().top + window.scrollY);
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