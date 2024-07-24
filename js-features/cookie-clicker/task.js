'use strict'

const cookieImage = document.getElementById("cookie");
let cookieClick = document.getElementById("clicker__counter");
let clicks = 0;
let cookieSpeedClick = document.getElementById("clicker__speed__counter");
let todayTime = Date.now();
let previousClicks = 0;

cookieImage.onclick = function () {
    cookieClick.textContent = ++clicks;
    if (clicks % 2 == 0) {
        --cookie.width;
    } else {
        ++cookie.width;
    }

    cookieSpeedClick.textContent = (((Date.now() - todayTime) / 1000) / (clicks - (clicks - 1))).toFixed(2);
};