document.addEventListener('DOMContentLoaded', () => {
    const filterNames = document.querySelectorAll('.catalog__filter-name');

    filterNames.forEach((filterName) => {
        filterName.addEventListener('click', () => {
            const filterBox = filterName.closest('.catalog__filter-box');
            filterBox.classList.toggle('active');
        });
    });
});


const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const sliderTrack = document.querySelector(".slider-track");

const minGap = 10;
function updateSlider() {
    const minValue = parseInt(minRange.value);
    const maxValue = parseInt(maxRange.value);

    minPriceInput.value = minValue;
    maxPriceInput.value = maxValue;
    const percentMin = (minValue / minRange.max) * 100;
    const percentMax = (maxValue / maxRange.max) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentMin}%, #56d2c0 ${percentMin}%, #56d2c0 ${percentMax}%, #ddd ${percentMax}%)`;
}

function handleMinInput() {
    if (parseInt(maxRange.value) - parseInt(minRange.value) < minGap) {
        minRange.value = parseInt(maxRange.value) - minGap;
    }
    updateSlider();
}
function handleMaxInput() {
    if (parseInt(maxRange.value) - parseInt(minRange.value) < minGap) {
        maxRange.value = parseInt(minRange.value) + minGap;
    }
    updateSlider();
}
minRange.addEventListener("input", handleMinInput);
maxRange.addEventListener("input", handleMaxInput);

minPriceInput.addEventListener("input", () => {
    if (parseInt(minPriceInput.value) >= parseInt(maxPriceInput.value) - minGap) {
        minPriceInput.value = parseInt(maxPriceInput.value) - minGap;
    }
    minRange.value = minPriceInput.value;
    updateSlider();
});
maxPriceInput.addEventListener("input", () => {
    if (parseInt(maxPriceInput.value) <= parseInt(minPriceInput.value) + minGap) {
        maxPriceInput.value = parseInt(minPriceInput.value) + minGap;
    }
    maxRange.value = maxPriceInput.value;
    updateSlider();
});
updateSlider();
