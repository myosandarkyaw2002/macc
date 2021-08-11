const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("miliseconds");

const year = document.getElementById("year");

const countdown =document.getElementById("countdown");
const loading = document.getElementById("loading");

const currentyear = new Date().getFullYear();

const newyeartime = new Date(`January 01 ${currentyear +1} 00:00:00`);

function updatecountdown() {


    const currenttime = new Date();

    const diff = newyeartime - currenttime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);

    const h = Math.floor(diff / 1000 / 60 / 60) % 24;

    const m = Math.floor(diff / 1000 / 60) % 60;

    const s = Math.floor(diff / 1000) % 60;

    const mil = Math.floor((diff % 1000)/10);


// console.log(mil);

    days.textContent =d ;
    hours.textContent =h <10 ? "0"+h : h;
    minutes.textContent = m <10 ? "0"+m : m;
    seconds.textContent =s <10 ? "0"+s : s;
    miliseconds.textContent =mil <10 ? "0"+mil : mil;
}
setInterval(updatecountdown,100);
setTimeout( ()=>{
    loading.remove();

    countdown.style.display='flex';
},2000);

