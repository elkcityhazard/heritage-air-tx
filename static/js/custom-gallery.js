/*
Author: Andrew M McCall
url: https://andrew-mccall.com
*/

const fullGallery = document.querySelector('.full-gallery');
const images = document.querySelectorAll('.gallery-container-item');
const back = document.getElementById('backward');
const forward = document.getElementById('forward');
const close = document.getElementById('close');
let currentImgIndex;



function showImage(x) {
    images.forEach(image => {
        image.style.display = 'none';
    })
if (currentImgIndex < 0) {
    currentImgIndex = 1;
}
fullGallery.style.display = 'block';
images[x-1].style.display = 'block';
return currentImgIndex = x;
}

function lastImage() {
    images.forEach(image => {
        image.style.display = 'none';
    })
    currentImgIndex--;
    if (currentImgIndex <= 0) {
        currentImgIndex = 1;
        showImage(currentImgIndex);
    } else {
        showImage(currentImgIndex);
    }
}

function nextImage() {
    images.forEach(image => {
        image.style.display = 'none';
    })
    currentImgIndex++;
    if (currentImgIndex >= images.length) {
        currentImgIndex = images.length;
        showImage(currentImgIndex)
    } else {
        showImage(currentImgIndex)
    }
}

back.addEventListener('click', lastImage);

forward.addEventListener('click', nextImage);

close.addEventListener('click', () => {
    fullGallery.style.display = 'none';
})


