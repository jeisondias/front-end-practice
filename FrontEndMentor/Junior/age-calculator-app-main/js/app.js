//Form Fields

const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

// Current Date
const today = new Date();
const cDay = today.getDate();
const cMonth = today.getMonth() + 1;
const cYear = today.getFullYear();

// Listeners
dayInput.addEventListener('keyup', getFormDay);
monthInput.addEventListener('keyup', getFormMonth);
yearInput.addEventListener('keyup', getFormYear);


//Get the Date from the form and check if they're correct

function getFormDay(e) {
    e.preventDefault();
    let day = dayInput.value;
    checkDay(day);
}

function getFormMonth(e) {
    e.preventDefault();
    let month = monthInput.value;
    checkMonth(month);
}

function getFormYear(e) {
    e.preventDefault();
    let year = yearInput.value;
    checkYear(year);

}

// Check if the date is correct
function checkDay(day) {
    if(day <= 0 || day > 31) {
        console.log('This is not a valid date')
    } else {
        console.log(day + 'certo');
        return day;
    }
}


function checkMonth(month) {
    if(month <= 0 || month > 12) {
        console.log('This is not a valid Month')
    } else {
        console.log(month + 'certo');
        return month;
    }
}

function checkYear(year) {
    if(year < 0 || year > cYear) {
        console.log('This is not a valid Year')
    } else {
        console.log(year+ 'certo');
        return year;
    }
}