import './style.css';

const slideButtons = document.querySelectorAll('.slider > button');
const slideCircles = document.querySelectorAll('.nav-circle');
const imageElements = document.querySelectorAll('.image-display > img');
const lastImageIndex = imageElements[imageElements.length - 1].dataset.imageIndex;


function doesNextImageExist(index) {
    return document.querySelector(`img[data-image-index="${index + 1}"]`);
}

function doesPreviousImageExist(index) {
    return document.querySelector(`img[data-image-index="${index - 1}"]`);
}

function moveToImage(visibleImage, selectedCircle, index) {
    visibleImage.classList.remove('visible');
    document.querySelector(`img[data-image-index="${index}"]`).classList.add('visible');

    selectedCircle.classList.remove('selected');
    document.querySelector(`button[data-image-nav="${index}"]`).classList.add('selected');
}

function moveToNext() {
    const visibleImage = document.querySelector('.visible');
    const selectedCircle = document.querySelector('.selected');
    const imageIndex = Number(visibleImage.dataset.imageIndex);
    const nextIndex = !doesNextImageExist(imageIndex) ? 1 : imageIndex + 1;

    moveToImage(visibleImage, selectedCircle, nextIndex);
}

slideButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const visibleImage = document.querySelector('.visible');
        const selectedCircle = document.querySelector('.selected');
        const imageIndex = Number(visibleImage.dataset.imageIndex);
        let nextIndex;

        if (e.target.classList.contains('previous-control')) {
            nextIndex = !doesPreviousImageExist(imageIndex) ? lastImageIndex : imageIndex - 1;
        } else {
            nextIndex = !doesNextImageExist(imageIndex) ? 1 : imageIndex + 1;
        }

        moveToImage(visibleImage, selectedCircle, nextIndex);
    })
})

function unselectAndHide() {
    document.querySelector('.visible').classList.remove('visible');
    document.querySelector('.selected').classList.remove('selected');
}

function selectAndShow(index) {
    document.querySelector(`img[data-image-index="${index}"]`).classList.add('visible');
    document.querySelector(`button[data-image-nav="${index}"]`).classList.add('selected');
}

slideCircles.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const selectedCircle = e.target;
        const selectedCircleIndex = Number(selectedCircle.dataset.imageNav);

        unselectAndHide();
        selectAndShow(selectedCircleIndex);
    })
})