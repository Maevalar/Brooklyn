//BURGER
const headerBurger = document.querySelector('.menu__burger');
if (headerBurger){
    const headerMenu = document.querySelector('.menu__body');
    headerBurger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    }) 
}

//===============================
//SLIDER
const swiper = new Swiper('.blog__slider', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        475: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1333: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    }
  });
//===================================
//SKILLS
const skillsItems = document.querySelectorAll('.skills__item')

if(skillsItems.length > 0){
    skillsItems[0].addEventListener("click", function(e){
        skillsItems[0].classList.add('_active');

        if (skillsItems[1].classList.contains('_active')){
            skillsItems[1].classList.remove('_active')
        }else{
            skillsItems[2].classList.remove('_active')
        }
        
    })
    skillsItems[1].addEventListener("click", function(e){
        skillsItems[1].classList.add('_active');

        if (skillsItems[0].classList.contains('_active')){
            skillsItems[0].classList.remove('_active')
        }else{
            skillsItems[2].classList.remove('_active')
        }
        
    })
    skillsItems[2].addEventListener("click", function(e){
        skillsItems[2].classList.add('_active');

        if (skillsItems[0].classList.contains('_active')){
            skillsItems[0].classList.remove('_active')
        }else{
            skillsItems[1].classList.remove('_active')
        }
        
    }) 
}
//======================================
//TESTIMONIAL SLIDER
const swiper2 = new Swiper('.testimonial__slider',{
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    grabCursor: true,
})
//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick (e) {
        const menuLink = e.target;

        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
