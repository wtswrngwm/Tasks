const containerFirst = document.getElementById("first-container");
const shareBtn = document.getElementById("share-button");
const learnMoreBtn = document.getElementById("learnmore-button");
const containerSecond = document.getElementById("second-container");
const freeSampleBtn = document.getElementById("freesample-button");
const reviewBtn = document.getElementById("review-button");
const containerThird = document.getElementById("third-container");
const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");

shareBtn.addEventListener('click', function() {
    containerFirst.classList.add('invisible-container')
})
learnMoreBtn.addEventListener('click', function() {
    containerFirst.classList.add('invisible-container')
})
freeSampleBtn.addEventListener('click', function() {
    containerSecond.classList.add('invisible-container')
})
reviewBtn.addEventListener('click', function() {
    containerSecond.classList.add('invisible-container')
})
noBtn.addEventListener('click', function() {
    containerThird.classList.add('invisible-container')
})
yesBtn.addEventListener('click', function() {
    containerThird.classList.add('invisible-container')
})