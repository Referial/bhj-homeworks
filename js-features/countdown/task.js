'use strict'

const displayTimer = document.getElementById('timer');

let hours = 5;
let minutes = 2;
let seconds = 42;

function timer() {
    displayTimer.textContent = `${hours}:${minutes}:${seconds}`;

    if (hours === 0 && minutes === 0 && seconds === 0) {
        alert("Вы победили в конкурсе!");
    }

    if (seconds != 0){
        --seconds;
    } 
    
    if (minutes != 0 && seconds === 0){
        --minutes;
        seconds = 60;
    }

    if (hours != 0 && minutes === 0 && seconds ===0) {
        --hours;
        minutes = 59;
        seconds = 60;
    }
}

setInterval(timer, 1000)