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

// View
const bmiResult = document.querySelector('.bmi-result');
const weightInfo = document.querySelector('.weight-info');
const welcomeMessage = document.querySelector('.welcome-result');
const resultLeft = document.querySelector('.result-left');
const resultRight = document.querySelector('.result-right');


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

function calculateMetric() {
    metricHeight.addEventListener('input', function () {
        metricHeightValue = Number(metricHeight.value);
        calculateBMIMetric();
        displayBMIMetric();
    });

    metricWeight.addEventListener('input', function () {
        metricWeightValue = Number(metricWeight.value);
        calculateBMIMetric();
        displayBMIMetric();
    });
}


function calculateBMIMetric() {
    if(metricHeightValue > 0 && metricWeightValue > 0) {
        resultMetric = metricWeightValue / (metricHeightValue/100 * metricHeightValue/100);
        return resultMetric.toFixed(1);
    }
}

function displayBMIMetric(){
    if(resultMetric <= 0 && resultMetric <= 18.5) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re underweight. Your ideal weight is between <span class="bold ">63.3kgs - 85.2kgs.</span>`;
    } else if(resultMetric > 18.5 && resultMetric <= 24.9) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re a heatlhy weight. Your ideal weight is between <span class="bold ">63.3kgs - 85.2kgs.</span>`;
    } else if(resultMetric > 24.9 && resultMetric <= 29.9) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re overweight. Your ideal weight is between <span class="bold ">63.3kgs - 85.2kgs.</span>`;
    } else if(resultMetric > 29.9) {
        welcomeMessage.classList.add('hide');
        resultLeft.classList.remove('hide');
        resultRight.classList.remove('hide');
        bmiResult.innerHTML = resultMetric.toFixed(1);
        weightInfo.innerHTML = 
        `Your BMI suggests you’re obese. Your ideal weight is between <span class="bold ">63.3kgs - 85.2kgs.</span>`;
    }
}
