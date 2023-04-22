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

// Error Fields
let dayErr = document.querySelector('.dayErr');
let monthErr = document.querySelector('.monthErr');
let yearErr = document.querySelector('.yearErr');

// Labels
let lbday = document.querySelector('.lbday');
let lbmonth = document.querySelector('.lbmonth');
let lbyear = document.querySelector('.lbyear');

// Event Listeners

dayInput.addEventListener('keyup', getYMD);
monthInput.addEventListener('keyup', getYMD);
yearInput.addEventListener('keyup', getYMD);

// Check if the date is correct
function checkDay(day) {
    if(day <= 0 || day > 31) {
        return false;
    } else {
        dayInputData = day;
        return true;
    }
}

function checkMonth(month) {
    if(month <= 0 || month > 12) {
        return false;
    } else {
        monthInputData = month;
        return true;
    }
}

function checkYear(year) {
    if(year <= 0 || year > cYear) {
        return false;
    } else {
        yearInputData = year;
        return true;
    }
}

// Getting the Age
function getYMD() {
    validateDate();
    clear();

    if (checkDay(dayInput.value) > 0 && checkMonth(monthInput.value) > 0 && checkYear(yearInput.value) < cYear && checkYear(yearInput.value) > 0) {
        let years = negativeDate(cYear - yearInputData);
        yearsText.innerHTML = years;

        let months = negativeDate((cMonth - parseInt(monthInputData))) ;
        monthsText.innerHTML = months;

        let days = negativeDate((cDay - parseInt(dayInputData)));
        daysText.innerHTML = days;
    }
}

// Validating Date and Data

function validateDate() {
    let validDay = parseInt(dayInput.value);
    if (!checkDay(validDay)) {
        displayErrorMessage(dayInput, dayErr, lbday, 'Must be a valid day');
    } else {
        removeErrorMessage(dayInput, dayErr, lbday);
    }

    let validMonth = parseInt(monthInput.value)
    if (!checkMonth(validMonth)) {
        displayErrorMessage(monthInput, monthErr, lbmonth, 'Must be a valid month');
    } else {
        removeErrorMessage(monthInput, monthErr, lbmonth);
    }

    let validYear = parseInt(yearInput.value);
    if (!checkYear(validYear)) {
        displayErrorMessage(yearInput, yearErr, lbyear, 'Must be a valid year');
    } else {
        removeErrorMessage(yearInput, yearErr, lbyear);
    }
}

function negativeDate(date) {
    if(date < 0) {
        return date * -1;
    } else {
        return date;
    }
}


// UI Functions
function displayErrorMessage(field, errField, label, message) {
    field.classList.add("inputError");
    label.classList.add('err');
    errField.classList.add("err");
    errField.innerHTML = message;
}

function removeErrorMessage(field, errField, label) {
    field.classList.remove("inputError");
    label.classList.remove('err');
    errField.classList.remove("err");
    errField.innerHTML = '';
}

function clear() {
    if (dayInput.value == '' || monthInput.value == '' || yearInput.value == '') {
        yearsText.innerHTML = '--';
        monthsText.innerHTML = '--';
        daysText.innerHTML = '--';
    } 
}
