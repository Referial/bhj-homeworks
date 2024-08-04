let line = document.querySelectorAll("span.rotator__case");

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const intervalId = setInterval(function () {
    let lineActive = document.querySelector("span.rotator__case_active");

    lineActive.classList.remove('rotator__case_active');

    let random = getRandomInRange(0, 5);

    line[random].classList.add('rotator__case_active');
}, 1000);