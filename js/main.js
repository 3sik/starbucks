// 검색창

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});



// 스크롤 시 나타났다 사라졌다 (배너, 페이지 상단 이동)

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500){
        // 배지 지우기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
        // 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else  {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
        // 버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
})



// visual 사진 순차 등장
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1,{
        delay: (index + 1) * .4,
        opacity: 1
    });
});

// swiper
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데로 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',// 페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});



// 프로모션 닫았다 열었다

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toffle-promotion')
let isHidePromotion = false; // 프로모션이 숨겨졌니의 값은 false 이므로 안숨겨져있다는 뜻!
promotionToggleBtn.addEventListener('click', function () { //프로모션 토글 버튼을 클릭하면 함수가 실행됨.
    isHidePromotion = !isHidePromotion // ispromotion 값을 확인 후 반대 값으로 할당하겠다! , ! 는 뒷쪽의 값이 반대가 되게 해주세요 = true가 들어가게 해주세요.
    if (isHidePromotion) {
        // 숨김 처리! 함수가 실행되면서 ispromotion의 값이 true가 되어 이부분이 실행됨. 따라서 토글키를 누르면 프로모션이 숨겨짐.
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리! 다시 클릭하면 ispromotion 값이 false가 되어 이부분이 실행됨. 따라서 프로모션이 다시 보이게 됨.
        promotionEl.classList.remove('hide');
    }
});


// 유튜브쪽 애니메이션 범위 랜덤 함수(소수점 2자리까지)

function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
   // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        { // 옵션
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



// SCROLLMAGIC

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


// 날짜
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022 -> this year 로 들어감

