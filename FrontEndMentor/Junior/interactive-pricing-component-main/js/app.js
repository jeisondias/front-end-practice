const scroller = document.querySelector('#price');
const pageViews = document.querySelector('#pageviews');
const priceValue = document.querySelector('#price-value');
const discountBtn = document.querySelector('#discountBtn');

const price = [10, 12, 16, 24, 36];
let price2 = [10, 12, 16, 24, 36];

function showNewValue() {
    percentage();

    switch(scroller.value) {
        case '1': 
        pageViews.innerText = '10k Pageviews';
        priceValue.innerText = `$${price2[0].toFixed(2)}`;
        break;
        case '2': 
        pageViews.innerText = '50k Pageviews';
        priceValue.innerText = `$${price2[1].toFixed(2)}`;
        break;
        case '3': 
        pageViews.innerText = '100k Pageviews';
        priceValue.innerText = `$${price2[2].toFixed(2)}`;
        break;
        case '4': 
        pageViews.innerText = '500k Pageviews';
        priceValue.innerText = `$${price2[3].toFixed(2)}`;
        break;
        case '5': 
        pageViews.innerText = '1M Pageviews';
        priceValue.innerText = `$${price2[4].toFixed(2)}`;
        break;
        default:
            console.log('Not a valid value');
    }
}

function discount() {
    if (discountBtn.checked) {
        price2 = price.map(i => i - (i * 0.25));
        discountBtn.checked == true;
        showNewValue()
    } else {
        price2 = price;
        showNewValue()
    }
}

function percentage() {
    var sliderValue = ((scroller.value - scroller.min) / (scroller.max - scroller.min)) * 100;
    var color = 'linear-gradient(90deg, var(--hover-slider-button)' + sliderValue + '%, var(--slider-empty-bar)' + sliderValue + '%)';
    scroller.style.background = color;
}

discountBtn.addEventListener('click', discount);
scroller.addEventListener('change', showNewValue);