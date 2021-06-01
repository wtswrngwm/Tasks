const modalContainer = document.getElementsByClassName('bg-modal')[0];
const modal = document.getElementsByClassName('modal-content')[0];
const signInButton = document.getElementById('signInBtn');
const closeButton = document.getElementsByClassName('close__button')[0];
const nightButton = document.getElementsByClassName('nightBtn')[0];
const body = document.getElementsByClassName('sign-in__body')[0];
const submitButton = document.getElementsByClassName('signinbtn')[1];
const loginImage = document.getElementById('login-image');

modal.addEventListener('click', function(e) {
    e.stopPropagation()
})
modalContainer.addEventListener('click', function() {
    modalContainer.classList.remove('visible')
})
signInButton.addEventListener('click', function() {
    modalContainer.classList.add('visible')
})
closeButton.addEventListener('click', function() {
    modalContainer.classList.remove('visible')
})

nightButton.addEventListener('click', function() {
    if (body.classList.contains('night-body')) {
        body.classList.remove('night-body')
        loginImage.src='images/login.png'
        return;
    }
    body.classList.add('night-body')
    loginImage.src='images/signin2.png'
})

submitButton.addEventListener('click', function(e) {
    e.preventDefault()
})