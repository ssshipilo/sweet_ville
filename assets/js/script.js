function ALL_SLIDERS(){
function sliderHappy(){
  var swiper = new Swiper('.swiper-price-box', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: '.price-next',
        prevEl: '.price-prev',
      },
    });
}sliderHappy()

function sliderProgram(){

  var swiperSet = new Swiper('.slider-programs', {
      slidesPerView: "auto",
      spaceBetween: 12,
      watchOverflow: true,
      allowTouchMove: true,
      draggable: true,
      loop: true,
    });

}sliderProgram()

function sliderAnimators(){

  var turnAnim = true;

  var swiperSetAnim = new Swiper('.slider-geroes', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      watchOverflow: true,
      allowTouchMove: true,
      draggable: turnAnim,
      loop: true,
    });

}sliderAnimators()

function sliderDopServices(){
  var swiper = new Swiper('.swiper-more-services', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.more-services-next',
        prevEl: '.more-services-prev',
      },
    });

    console.log(swiper.slidesPerView)
}sliderDopServices()

function sliderFeedback(){
  var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });
}sliderFeedback()

function sliderGallery(){
  var swiperGallery = new Swiper('.swiper-gallery', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },
    });
}sliderGallery()

}ALL_SLIDERS();


// Mask Phone
function maskPhone(){
  window.addEventListener("DOMContentLoaded", function() {
      [].forEach.call( document.querySelectorAll('.tel'), function(input) {
      var keyCode;
      function mask(event) {
          event.keyCode && (keyCode = event.keyCode);
          var pos = this.selectionStart;
          if (pos < 3) event.preventDefault();
          var matrix = "+7 (___) ___ ____",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = this.value.replace(/\D/g, ""),
              new_value = matrix.replace(/[_\d]/g, function(a) {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a
              });
          i = new_value.indexOf("_");
          if (i != -1) {
              i < 5 && (i = 3);
              new_value = new_value.slice(0, i)
          }
          var reg = matrix.substr(0, this.value.length).replace(/_+/g,
              function(a) {
                  return "\\d{1," + a.length + "}"
              }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
          if (event.type == "blur" && this.value.length < 5)  this.value = ""
      }
  
      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false)
  
    });
  
  });
}maskPhone();

var validate_name = false;
var validate_phone = false;

// Валидация имени
function validNames(){
  let name = document.querySelector('.name_user');
  if(name.value == ''){
    document.querySelector('#err_name').style.transition = '0.6s ease';
    document.querySelector('#err_name').style.opacity = '1';

    document.querySelector('.alarm_name').style.transition = '0.6s ease';
    document.querySelector('.alarm_name').style.opacity = '1';

    validate_name = false;
  }else if(name.value != ''){
    document.querySelector('#err_name').style.opacity = '0';
    document.querySelector('.alarm_name').style.opacity = '0';
    validate_name = true;
  }
}

// Валидация телефона
function validPhones(){
  let phone = document.querySelector('.name_phone');
  if(phone.value.length < 17 || phone.value == ''){
    document.querySelector('#err_phone').style.transition = '0.6s ease';
    document.querySelector('#err_phone').style.opacity = '1';

    document.querySelector('.alarm_phone').style.transition = '0.6s ease';
    document.querySelector('.alarm_phone').style.opacity = '1';
    validate_phone = false;

    
  }else if(phone.value != ''){
    document.querySelector('#err_phone').style.opacity = '0';
    document.querySelector('.alarm_phone').style.opacity = '0';

    validate_phone = true;
  }
}

function formWatch(){
  
  let phone = document.querySelector('.name_phone');
  let name = document.querySelector('.name_user');
 
  name.addEventListener('blur', validNames, false);
  phone.addEventListener('blur', validPhones, false);

}formWatch();

document.addEventListener('scroll', ()=>{
  if(window.scrollY >= 300){
    document.querySelector('.menu-header').style.position = 'fixed';
    document.querySelector('.menu-header').style.boxShadow = 0 + ' ' + 0 + ' ' + ' ' + 10 + 'px #d2d2d2';
  }else if(window.scrollY < 300){
    document.querySelector('.menu-header').style.position = 'relative';
    document.querySelector('.menu-header').style.boxShadow = 'none';
  }
})

var turned = false;

document.querySelector('.happy_lab').addEventListener('click', function(){
  if(turned == true){
    turned = false;
    console.log(turned)
  }else if(turned == false){
    turned = true;
    console.log(turned)
  }
})

function done_allert(){
  if(validate_name == true && validate_phone == true && turned == true){
    let alert_done = document.querySelector('.alert_done');
    let alerts = document.querySelector('.alerts');
    alert_done.style.display = 'flex';
    alerts.style.display = 'none';
    validate_name = false;
    validate_phone = false;
  }else{
    validNames();
    validPhones();
  }
 
}


function order_happy(num){
  let arr = [
    'Заказать звонок',
    `Заказать<br>праздник`,
    `Заказать<br>шоу-программу`,
    `Заказать<br>аниматора-персонажа`,
    `Арендовать площадку`,
    `Заказать площадку,<br>пакет «Хорошо»`,
    `Заказать площадку,<br>пакет «Супер»`,
    `Заказать площадку,<br>пакет «Вау»`,
    `Праздник для<br>юридических лиц`,
  ];

  let body = document.querySelector('body');
  let alerts = document.querySelector('.alerts');
  let abs_box = document.querySelector('.absolute_box_alert');
  let title_alert = document.querySelector('.title_alert');
  
  title_alert.innerHTML = arr[num];
  alerts.style.display = 'flex';
  abs_box.style.display = 'flex';
  body.style.overflow = 'hidden';
}

function close_alert(){
  let close = document.querySelectorAll('.close_alert');
  let body = document.querySelector('body');
  let alert_done = document.querySelector('.alert_done');
  let alerts = document.querySelector('.alerts');
  let abs_box = document.querySelector('.absolute_box_alert');

  for(let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(){
      alert_done.style.display = 'none';
      alerts.style.display = 'none';
      abs_box.style.display = 'none';
      body.style.overflow = 'auto';
    });
  }
  
}close_alert();
