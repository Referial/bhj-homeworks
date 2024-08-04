let elem = document.querySelectorAll("div.reveal");

const pageHeight = document.documentElement.clientHeight;

const intervalId = setInterval(function () {
    for (let index = 0; index < elem.length; index++) {
        let rect = elem[index].getBoundingClientRect().top;

        if (rect >= 0 && rect <= pageHeight) {
            elem[index].classList.add('reveal_active');
        } else {
            elem[index].classList.remove('reveal_active');
        }
    };
}, 100);