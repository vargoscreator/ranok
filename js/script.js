document.addEventListener("DOMContentLoaded", function () {
    // let swiper = new Swiper(".swiper", {
    //     loop: false,
    //     spaceBetween: 20,
    //     slidesPerView: 2,
    //     allowTouchMove: false,
    //     navigation: {
    //         nextEl: ".button-next",
    //         prevEl: ".button-prev",
    //     },
    //     breakpoints: {
    //         775: {
    //             spaceBetween: 30,
    //             slidesPerView: 3,
    //         },
    //         931: {
    //             spaceBetween: 30,
    //             slidesPerView: 4,
    //         },
    //     },
    // });

    let heroSwiper = new Swiper(".hero__swiper", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        allowTouchMove: true,
        navigation: {
            nextEl: ".hero__swiper-next",
            prevEl: ".hero__swiper-prev",
        },
        pagination: {
            el: '.hero__swiper-pagination',
          },
        // autoplay: {
        //     delay: 3000,
        // },
    });

    const productsBlockSliders = document.querySelectorAll('.productsBlock');
    productsBlockSliders.forEach((slider, index) => {
        const sliderInstance = new Swiper(slider.querySelector('.productsBlock__slider'), {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 5,
            navigation: {
                nextEl: slider.querySelector('.productsBlock__top-next'),
                prevEl: slider.querySelector('.productsBlock__top-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1440: {
                    slidesPerView: 5,
                },
            },
        });
    });

    let videoBlockSwiper = new Swiper(".videoBlock__slider", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        allowTouchMove: true,
        navigation: {
            nextEl: ".videoBlock__slider-next",
            prevEl: ".videoBlock__slider-prev",
        },
    });

    let reviewsSwiper = new Swiper(".reviews__slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        allowTouchMove: true,
        navigation: {
            nextEl: ".reviews__top-next",
            prevEl: ".reviews__top-prev",
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });

    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        const title = item.querySelector('.faq__item-title');
        title.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                faqItems.forEach(faq => faq.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });    

    const catalogBtn = document.querySelector('.header__catalog-btn');
    const catalogContent = document.querySelector('.header__catalog-content');
    function toggleCatalog() {
        catalogContent.classList.toggle('active');
    }
    function handleClickOutside(event) {
        if (!catalogContent.contains(event.target) &&!catalogBtn.contains(event.target)) {
            catalogContent.classList.remove('active');
        }
    }
    catalogBtn.addEventListener('click', toggleCatalog);
    document.addEventListener('click', handleClickOutside);


    const callpopup = document.querySelector('.callpopup');
    if(callpopup){
        const callpopupOpen = document.querySelectorAll('.callpopup-open');
        const callpopupClose = document.querySelector('.callpopup__close');
        const callpopupInner = document.querySelector('.callpopup__inner');
        callpopupOpen.forEach(element => {
            element.addEventListener('click', () => {
                callpopup.classList.add('active');
            });
        });

        callpopupClose.addEventListener('click', () => {
            callpopup.classList.remove('active');
        }); 
        callpopup.addEventListener('click', (event) => {
            if (!callpopupInner.contains(event.target)) {
                callpopup.classList.remove('active');
            }
        });
    }

    const fixedBtnUp = document.querySelector('.fixedBtn__up');
    const checkScrollPosition = () => {
        if (window.scrollY > 20) {
            fixedBtnUp.classList.add('show');
        } else {
            fixedBtnUp.classList.remove('show');
        }
    };
    checkScrollPosition()
    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    fixedBtnUp.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    });

});



document.querySelectorAll(".custom-select").forEach((customSelect) => {
    const selectElement = customSelect.querySelector("select");
    const selectedDiv = document.createElement("div");
    selectedDiv.className = "select-selected";
    selectedDiv.textContent = selectElement.options[selectElement.selectedIndex].textContent;
    customSelect.appendChild(selectedDiv);
  
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "select-items";
  
    Array.from(selectElement.options).forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.textContent = option.textContent;
        optionDiv.addEventListener("click", () => {
            selectElement.selectedIndex = index;
            selectedDiv.textContent = option.textContent;
            optionsDiv.querySelectorAll(".same-as-selected").forEach((el) => el.classList.remove("same-as-selected"));
            optionDiv.classList.add("same-as-selected");
            selectedDiv.click();
        });
        optionsDiv.appendChild(optionDiv);
    });
  
    customSelect.appendChild(optionsDiv);
  
    selectedDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllSelect(selectedDiv);
      selectedDiv.classList.toggle("select-arrow-active");
    });
});
  
function closeAllSelect(current) {
    document.querySelectorAll(".select-selected").forEach((el) => {
      if (el !== current) el.classList.remove("select-arrow-active");
    });
}
  
document.addEventListener("click", () => closeAllSelect(null));