let menuTitle = document.querySelector('div.dropdown__value');
let menuList = Array.from(document.querySelectorAll('a.dropdown__link'));

menuTitle.addEventListener('click', closeAndOpenMenu);

function closeAndOpenMenu() {
    document.querySelector('ul.dropdown__list').classList.toggle('dropdown__list_active');
};

menuList.forEach(function (item) {
    item.onclick = function () {
        document.querySelector('div.dropdown__value').textContent = item.textContent;
        return false;
    };
    item.addEventListener('click', closeAndOpenMenu);
})