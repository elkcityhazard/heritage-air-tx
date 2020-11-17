/*
Author: Andrew M McCall
url: https://andrew-mccall.com
*/

const fullGallery = document.querySelector('.full-gallery');
const images = document.querySelectorAll('.gallery-container-item');
const figure = document.querySelectorAll('.gallery-container-item > figure');
const back = document.getElementById('backward');
const forward = document.getElementById('forward');
const close = document.getElementById('close');
let currentImgIndex = 0;
let slideIn = false;

(function () {
    let imgContainers = document.querySelectorAll('.gallery-info');
    for (let i = 0; i < imgContainers.length; i++) {
        imgContainers[i].style.backgroundImage = `url('../images/customer-jobs/residential-jobs/residential-${i + 1}.jpg')`;
        imgContainers[i].style.backgroundPosition = 'center';
        imgContainers[i].style.backgroundSize = 'cover';
    }
    for (let i = 0; i < figure.length; i++) {
        figure[i].style.backgroundImage = `url('../images/customer-jobs/residential-jobs/residential-${i + 1}.jpg')`;
        figure[i].style.backgroundPosition = 'center';
        figure[i].style.backgroundSize = 'cover';
    }
})();

function hideImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
}


function showImage(x) {
    currentImgIndex = x;
    hideImages();
    if (!slideIn) {
        figure[currentImgIndex].classList.add('slideIn');
        slideIn = true;
    } else if (slideIn) {
        figure[currentImgIndex].classList.remove('slideIn');
    }
    console.log(currentImgIndex);
    fullGallery.style.display = 'block';
    images[currentImgIndex].style.display = 'block';
    figure[currentImgIndex].classList.add('fadeIn');
    return currentImgIndex = x;
}

function lastImage() {
    images[currentImgIndex].style.display = 'none';
    currentImgIndex--;
    if (currentImgIndex < 0) {
        currentImgIndex = 0;
        showImage(currentImgIndex);
    } else {
        showImage(currentImgIndex);
    }
}

function nextImage() {
    images[currentImgIndex].style.display = 'none';
    currentImgIndex++;
    if (currentImgIndex >= figure.length) {
        currentImgIndex = figure.length - 1;
        showImage(currentImgIndex)
    } else {
        showImage(currentImgIndex)
    }
}

back.addEventListener('click', lastImage);

forward.addEventListener('click', nextImage);

function closeLightbox(x) {
    figure[x].classList.add('slideUp');
    setTimeout(() => {
        fullGallery.style.display = 'none';
        figure[x].classList.remove('slideUp');
    }, 500)
    for (let i = 0; i < figure.length; i++) {
        figure[x].classList.remove('slideIn');
    }
    slideIn = false;
}
