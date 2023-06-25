// Radio Options
const radioBtn = document.querySelectorAll('input[type="radio"]');
const numberOptions = document.querySelector('.number-options');
const numberImperialOptions = document.querySelectorAll('.number-imperial-options');

// Metric variables
const metricHeight = document.querySelector('#height');
const metricWeight = document.querySelector('#weight');

let metricHeightValue = 0;
let metricWeightValue = 0;

let resultMetric = 0;
let minWeight = 0;
let maxWeight = 0;

// Impreial Variables

const imperialFT = document.querySelector('#height-imperial-ft');
const imperialIN = document.querySelector('#height-imperial-in');
const imperialST = document.querySelector('#weight-imperial-st');
const imperialLBS = document.querySelector('#weight-imperial-lbs');

// View
const bmiResult = document.querySelector('.bmi-result');
const weightInfo = document.querySelector('.weight-info');
const welcomeMessage = document.querySelector('.welcome-result');
const resultLeft = document.querySelector('.result-left');
const resultRight = document.querySelector('.result-right');
let idealWeightM = "";


// Imperial variables

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


window.onload = calculateMetric();
window.onload = calculateImperial();

function calculateMetric() {
    metricHeight.addEventListener('input', function () {
        metricHeightValue = Number(metricHeight.value);
        calculateBMIMetric();
        idealWeightMetric();
        displayBMIMetric();
    });

    metricWeight.addEventListener('input', function () {
        metricWeightValue = Number(metricWeight.value);
        calculateBMIMetric();
        idealWeightMetric();
        displayBMIMetric();
    });
}

function calculateImperial() {
    imperialLBS.addEventListener('input', function () {
        calculateImperialMetric();
        idealWeightImperial();
        displayBMIMetric();
    });
}


function calculateImperialMetric() {
    let heightImperial = (imperialFT.value * 0.3048) + (imperialIN.value * 0.0254);
    let weightImperial = (imperialST.value * 6.35029318) + (imperialLBS.value * 0.45359237);
    
    metricHeightValue = Number((heightImperial * 100));
    metricWeightValue = Number(weightImperial.toFixed(1));
    calculateBMIMetric();
}


function calculateBMIMetric() {
    if(metricHeightValue > 0 && metricWeightValue > 0) {
        resultMetric = metricWeightValue / (metricHeightValue/100 * metricHeightValue/100);
        return Number(resultMetric.toFixed(1));
    }
}

function displayBMIMetric(){
    if(resultMetric <= 18.5) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re underweight. Your ideal weight is between <span class="bold ">${displayWeight()}.</span>`;
    } else if(resultMetric > 18.5 && resultMetric <= 24.9) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re a heatlhy weight. Your ideal weight is between <span class="bold ">${displayWeight()}.</span>`;
    } else if(resultMetric > 24.9 && resultMetric <= 29.9) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re overweight. Your ideal weight is between <span class="bold ">${displayWeight()}.</span>`;
    } else if(resultMetric > 29.9) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re obese. Your ideal weight is between <span class="bold ">${displayWeight()}.</span>`;
    }
}

function displayWeight() {
    if(radioBtn[1].checked) {
        return idealWeightImperial();
    } else {
        return idealWeightMetric();
    }
}

function idealWeightMetric() {
    let minWeight = 18.5 * (metricHeightValue/100 * metricHeightValue/100);
    let maxWeight = 24.9 * (metricHeightValue/100 * metricHeightValue/100);
    return `${minWeight.toFixed(1)}kgs - ${maxWeight.toFixed(1)}kgs`;
}

function idealWeightImperial() {
    minWeight = 18.5 * (metricHeightValue/100 * metricHeightValue/100);
    maxWeight = 24.9 * (metricHeightValue/100 * metricHeightValue/100);
    
    let stoneMin = minWeight / 6.35029318;
    let stoneMax = maxWeight / 6.35029318;
    let lbsMin = (stoneMin % 1).toFixed(2) * 14;
    let lbsMax = (stoneMax % 1).toFixed(2) * 14;
    return `${stoneMin.toFixed(0)}st ${lbsMin.toFixed(0)}lbs - ${stoneMax.toFixed(0)}st ${lbsMax.toFixed(0)}lbs`;
}