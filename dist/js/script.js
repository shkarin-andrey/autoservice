$(document).ready(function () {

    // menu
    $('.hamburger').click(addClass); 
    $('.menu__close').click(removeClass);  

    function addClass() {
        $('.hamburger').addClass('hamburger-active');
        $('.menu').addClass('menu-active');
        $('body').css({'overflow' : 'hidden'});
    }

    function removeClass() {
        $('.menu').removeClass('menu-active');
        $('.hamburger').removeClass('hamburger-active');
        $('body').css({'overflow' : 'visible'});
    }


    // price
    const tab = document.querySelectorAll('.price__tab'),
          tabHeader = document.querySelectorAll('.price__tab-header'),
          tabContent = document.querySelectorAll('.price__tab-content');
    for (let i = 0; i < tab.length; i++) {
      
      tab[i].addEventListener('click', function () {  
        tab[i].classList.toggle('price__tab-active');
        
          if (tab[i].classList.contains('price__tab-active')) {
            tabHeader[i].classList.add('price__tab-header-active');
            tabContent[i].classList.add('price__tab-content-active');
          } else {
            tabHeader[i].classList.remove('price__tab-header-active');
              tabContent[i].classList.remove('price__tab-content-active');
          }
      });
    }
    


    // scroll to anchor
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });


    // form
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: 'https://service9a.ru/wp-content/themes/autoservice/mailer/smart.php',
          data: $(this).serialize()
        }).done(function() {
          $(this).find('input').val('');
    
          $('form').trigger('reset');
        });
        return false;
    });


  // modal
  $('.modal__btn').click(() => {
    $('.modal').fadeIn();
    $('body').css({'overflow': 'hidden'});
  });

  $('.modal__close').click(() => {
    $('.modal').fadeOut();
    $('body').css({'overflow': 'visible'});
  });


  $('.modal').click(function(e) {
    if (e.target.classList.contains('modal')){
      $('.modal').fadeOut();
      $('body').css({'overflow': 'visible'});
    }    
  });
  

  
  

  // nav services
  if (window.location.href.indexOf("https://service9a.ru/shinomontazh/") > -1) {
    const navServicesClassAdd = document.querySelectorAll('.services-page__nav__item');
    navServicesClassRemove();
    navServicesClassAdd[5].classList.add('services-page__nav__item-active');
  } else if (window.location.href.indexOf("https://service9a.ru/remont-tormoznoj-sistemy/") > -1) {
    const navServicesClassAdd = document.querySelectorAll('.services-page__nav__item');
    navServicesClassRemove();
    navServicesClassAdd[4].classList.add('services-page__nav__item-active');
  } else if (window.location.href.indexOf("https://service9a.ru/remont-kpp/") > -1) {
    const navServicesClassAdd = document.querySelectorAll('.services-page__nav__item');
    navServicesClassRemove();
    navServicesClassAdd[3].classList.add('services-page__nav__item-active');
  } else if (window.location.href.indexOf("https://service9a.ru/remont-podveski/") > -1) {
    const navServicesClassAdd = document.querySelectorAll('.services-page__nav__item');
    navServicesClassRemove();
    navServicesClassAdd[2].classList.add('services-page__nav__item-active');
  } else if (window.location.href.indexOf("https://service9a.ru/zamena-rashodnikov-to/") > -1) {
    const navServicesClassAdd = document.querySelectorAll('.services-page__nav__item');
    navServicesClassRemove();
    navServicesClassAdd[1].classList.add('services-page__nav__item-active');
  } else if (window.location.href.indexOf("https://service9a.ru/remont-dvigatelya/") > -1) {
    const navServicesClassAdd = document.querySelectorAll('.services-page__nav__item');
    navServicesClassRemove();
    navServicesClassAdd[0].classList.add('services-page__nav__item-active');
  }

  function navServicesClassRemove() { 
    const navServicesItem = document.querySelectorAll('.services-page__nav__item');
    navServicesItem.forEach((item) => {
      item.classList.remove('services-page__nav__item-active');
    });
  }
  
});