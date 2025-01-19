const sliderThumbs = new Swiper('.product__content-thumbs', {
	direction: 'vertical',
	slidesPerView: 3,
	spaceBetween: 20,
    mousewheel: true,
	navigation: {
		nextEl: '.product__content-thumbs--next',
		prevEl: '.product__content-thumbs--prev'
	},
});
const sliderImages = new Swiper('.product__content-slider', {
	slidesPerView: 1,
	spaceBetween: 32,
	mousewheel: true,
	navigation: {
		nextEl: '.product__content-slider--next',
		prevEl: '.product__content-slider--prev'
	},
	grabCursor: true, 
	thumbs: {
		swiper: sliderThumbs
	},
});


document.addEventListener('DOMContentLoaded', () => {
    const actionBlock = document.querySelector('.product__action-block');
    const endDateAttr = actionBlock.getAttribute('data-action-end');
    
    let endDate;

    if (endDateAttr) {
        endDate = new Date(`${endDateAttr}T00:00:00`);
    } else {
        endDate = new Date();
        actionBlock.innerHTML = `
            <div class="product__action-item"><span>00</span> дн</div>
            <span>:</span>
            <div class="product__action-item"><span>00</span> год</div>
            <span>:</span>
            <div class="product__action-item"><span>00</span> хв</div>
            <span>:</span>
            <div class="product__action-item"><span>00</span> сек</div>
        `;
        return;
    }

    function updateTimer() {
        const now = new Date();
        const timeDiff = endDate - now;

        if (timeDiff <= 0) {
            actionBlock.innerHTML = '<span>Время истекло</span>';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        actionBlock.innerHTML = `
            <div class="product__action-item"><span>${String(days).padStart(2, '0')}</span> дн</div>
            <span>:</span>
            <div class="product__action-item"><span>${String(hours).padStart(2, '0')}</span> год</div>
            <span>:</span>
            <div class="product__action-item"><span>${String(minutes).padStart(2, '0')}</span> хв</div>
            <span>:</span>
            <div class="product__action-item"><span>${String(seconds).padStart(2, '0')}</span> сек</div>
        `;
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
});

const buttons = document.querySelectorAll('.productSelects__select-btn');
const contentBlocks = document.querySelectorAll('.productSelects__content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    contentBlocks.forEach(content => content.classList.remove('active'));
    button.classList.add('active');

    const contentId = button.getAttribute('data-productSelects');
    document.getElementById(contentId).classList.add('active');
  });
});


document.querySelector('.product__about-reviews--comments').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('productSelects').scrollIntoView({ behavior: 'smooth' });

    const buttons = document.querySelectorAll('.productSelects__select-btn');
    const contentBlocks = document.querySelectorAll('.productSelects__content');
    buttons.forEach(button => button.classList.remove('active'));
    contentBlocks.forEach(content => content.classList.remove('active'));

    const targetButton = document.querySelector('[data-productSelects="content-5"]');
    targetButton.classList.add('active');

    const targetContent = document.getElementById('content-5');
    targetContent.classList.add('active');
});

const oneClickPopup = document.querySelector('.oneClick');
    if(oneClickPopup){
        const oneClickPopupOpen = document.querySelector('.oneClick-open');
        const oneClickPopupClose = document.querySelector('.oneClick__close');
        const oneClickPopupInner = document.querySelector('.oneClick__inner');
        oneClickPopupOpen.addEventListener('click', () => {
            oneClickPopup.classList.add('active');
        });
        oneClickPopupClose.addEventListener('click', () => {
            oneClickPopup.classList.remove('active');
        }); 
        oneClickPopup.addEventListener('click', (event) => {
            if (!oneClickPopupInner.contains(event.target)) {
                oneClickPopup.classList.remove('active');
            }
        });
    }