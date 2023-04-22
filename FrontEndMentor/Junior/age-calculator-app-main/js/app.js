// Form Fields

const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

// Current Date
const today = new Date();
const cDay = today.getDate();
const cMonth = today.getMonth() + 1;
const cYear = today.getFullYear();

// Result Fields

const yearsText = document.querySelector('.years');
const monthsText = document.querySelector('.months');
const daysText = document.querySelector('.days');

// Form Default Dates
let dayInputData = 0;
let monthInputData = 0;
let yearInputData = 0;

dayInput.addEventListener('keyup', getYMD);
monthInput.addEventListener('keyup', getYMD);
yearInput.addEventListener('keyup', getYMD);

// Check if the date is correct
function checkDay(day) {
    parseInt(day);
    if(day <= 0 || day > 31) {
        console.log('This is not a valid date')
    } else {
        return parseInt(day);
    }
}

function checkMonth(month) {
    parseInt(month);
    if(month <= 0 || month > 12) {
        console.log('This is not a valid Month')
    } else {
        return parseInt(month);
    }
}

function checkYear(year) {
    parseInt(year);
    if(year <= 0 || year > cYear) {
        console.log('This is not a valid Year')
    } else {
        return parseInt(year);
    }
}


function getYMD() {

    dayInputData = checkDay(dayInput.value);
    monthInputData = checkMonth(monthInput.value);
    yearInputData = checkYear(yearInput.value);

    
    if (dayInputData > 0 && monthInputData > 0 && parseInt(yearInputData) < cYear && parseInt(yearInputData) > 0) {
        let years = negativeDate(cYear - yearInputData);
        yearsText.innerHTML = years;

        let months = negativeDate((cMonth - parseInt(monthInputData)));
        monthsText.innerHTML = months;

        let days = negativeDate((cDay - parseInt(dayInputData)));
        daysText.innerHTML = days;

    } else {
        console.log('Tem Coisa errada!')
    }
}

function negativeDate(date) {
    if(date < 0) {
        return date * -1;
    } else {
        return date;
    }
}