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
        let years = calculateYear();
        yearsText.innerHTML = years;

        let months = calculateMonth() ;
        monthsText.innerHTML = months;

        let days = calculateDay();
        daysText.innerHTML = days;
    }
}

function calculateYear() {
    // Get's the difference between the year
    let year_difference = cYear - parseInt(yearInputData);
    // Check if the month is the same one or a previous one
    // Check if the day and the Month Match

    // This also prevents the leaping between dates, like someone who was born on Feb 29. The full year will be counted on March 1st as it should. 
    // The result will be 1 for example, if the date is Feb 28th and the person's birthday is 29th. It'll be the new age only on March 1st
    let age;

    if (cMonth > monthInputData || (cMonth == monthInputData && cDay >= dayInputData)) {
        age = year_difference;
    } else {
        age = year_difference - 1;
    }    
    
    return age;
}

function calculateMonth() {
    let months;
    if(cDay >= dayInputData) {
        months = cMonth - parseInt(monthInputData);
    } 
    else if(cDay < dayInputData) {
        months = cMonth - parseInt(monthInputData) - 1 ;
    }

    // If Month is < 0, it'll add + 12;
    months = months < 0 ? months + 12 : months;
    return months;
}

function calculateDay() {
    let days;
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(cDay > dayInputData) {
        days = cDay - parseInt(dayInputData);
    } else {
        // It'll add to the date the number of days from the month in the position that the user inserted
        days = cDay - dayInputData + monthDays[parseInt(monthInputData)];
    }

    return days;
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
