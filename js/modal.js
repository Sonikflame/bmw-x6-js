const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
    modalElem.classList.remove('hidden');
    disableScroll(); // Убираем полоску скролл, blockScroll.js
};

const closeModal = () => {
    modalElem.classList.add('hidden');
    enableScroll(); // Убираем полоску скролл, blockScroll.js
};

moreElems.forEach(moreElem => {
    moreElem.addEventListener('click', openModal);
});

modalElem.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        closeModal();
    }
});