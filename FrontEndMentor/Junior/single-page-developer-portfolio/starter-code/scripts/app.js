const emailField = document.getElementById('email-field');
const emailError = document.getElementById('error');

emailField.addEventListener('keyup', validateEmail);

function validateEmail(){
    if(!emailField.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    )) {
        emailError.classList.add('display-block');
        return false;
    } else {
        emailError.classList.remove('display-block');
        return true;
    }
}

