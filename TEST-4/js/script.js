const containerOne = document.getElementById("first-container");
const shareBtn = document.getElementById("share-button");
const learnMoreBtn = document.getElementById("learnmore-button");
const containerTwo = document.getElementById("second-container");
const freeSampleBtn = document.getElementById("freesample-button");
const reviewBtn = document.getElementById("review-button");
const containerThree = document.getElementById("third-container");
const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");

shareBtn.addEventListener('click', function() {
    containerOne.classList.add('invisible-container')
})
learnMoreBtn.addEventListener('click', function() {
    containerOne.classList.add('invisible-container')
})
freeSampleBtn.addEventListener('click', function() {
    containerTwo.classList.add('invisible-container')
})
reviewBtn.addEventListener('click', function() {
    containerTwo.classList.add('invisible-container')
})
noBtn.addEventListener('click', function() {
    containerThree.classList.add('invisible-container')
})
yesBtn.addEventListener('click', function() {
    containerThree.classList.add('invisible-container')
})