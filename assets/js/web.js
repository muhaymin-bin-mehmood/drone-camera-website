/* Time Counter */
let countDate = new Date('Jan 1, 2021 00:00:00').getTime();

function saleTime(){
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / second);

    document.getElementById('day').innerText = d;
    document.getElementById('Hour').innerText = h;
    document.getElementById('Minute').innerText = m;
    document.getElementById('Second').innerText = s;
}
setInterval(function(){
    saleTime();
}, 1000)

/* navbar */
let hamburger = document.querySelector('.hamburger');
let navigation = document.querySelector('nav');