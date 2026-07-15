/* ===========================================
   FOREVER US
   script.js
   PART 3A
===========================================*/

// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 600);

    }, 1800);
});


// Secret Love Letter

const openLetter = document.getElementById("openLetter");
const secretMessage = document.getElementById("secretMessage");

openLetter.addEventListener("click", () => {

    secretMessage.style.display = "block";

    openLetter.innerHTML = "❤️ I Love You ❤️";

});


// Surprise Button

const surpriseBtn = document.getElementById("surpriseBtn");

const finalMessage = document.getElementById("finalMessage");

surpriseBtn.addEventListener("click", () => {

    finalMessage.style.display = "block";

    surpriseBtn.style.display = "none";

});


// Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (15 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,400);


// Sparkles

function sparkle(){

    const star = document.createElement("div");

    star.className = "sparkle";

    star.style.left = Math.random()*100 + "vw";

    star.style.top = Math.random()*100 + "vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(sparkle,300);


// Smooth Navigation

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});


// Love Counter

const startDate = new Date("2025-07-15");

function updateCounter(){

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff / (1000*60*60*24));

document.getElementById("loveCounter").innerHTML =

days + " Days Together ❤️";

}

updateCounter();

setInterval(updateCounter,60000);