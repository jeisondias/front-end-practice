const emailForm = document.querySelector('#email-field');
const emailError = document.querySelector('.error');

emailForm.addEventListener('keyup', validateEmail);

function validateEmail() {
    if(emailForm.value == '') {
        emailError.innerHTML = 'Oops! Please add your email';
        return false;
    } 
    else if (!emailForm.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        emailError.innerHTML = 'Oops! Please check your email';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}