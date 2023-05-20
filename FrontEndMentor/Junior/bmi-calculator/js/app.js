const radioBtn = document.querySelectorAll('input[type="radio"]');
const numberOptions = document.querySelector('.number-options');
const numberImperialOptions = document.querySelectorAll('.number-imperial-options');

console.log(radioBtn)

radioBtn.forEach(i => {
    i.addEventListener('click', event => {
        if(event.target.value === "Imperial") {
            numberImperialOptions.forEach(i => {
                i.classList.remove('hide');
            })
            numberOptions.classList.add('hide');
        } else {
            numberImperialOptions.forEach(i => {
                i.classList.add('hide');
            })
            numberOptions.classList.remove('hide');
        }
    })
})