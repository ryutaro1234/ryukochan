function nav_toggle(){
  document.getElementById("nav_toggle").classList.toggle("nav_toggle");
  document.getElementById("navigation").classList.toggle("navigation");
  document.getElementById("nav").classList.toggle("nav");
};

$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-up').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});
$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-up-l').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});
$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-up-r').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});

$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-down').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});
$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-down-l').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});
$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-down-r').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});

$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-slide-l').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});
$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-slide-r').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});



$(function(){
  $(window).on('load scroll',function (){
    $('.title01').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('-visible');
      }
    });
  });
});
let bg01 = document.getElementsByClassName('bg01');
window.addEventListener("load", () => {
  for (let i = 0; i < bg01.length; i++){
    const rect = bg01[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      bg01[i].classList.add('-visible');
    }
  }
});

let bg02 = document.getElementsByClassName('bg02');
window.addEventListener("load", () => {
  for (let i = 0; i < bg02.length; i++){
    const rect = bg02[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      bg02[i].classList.add('-visible');
    }
  }
});

let bg03 = document.getElementsByClassName('bg03');
window.addEventListener("load", () => {
  for (let i = 0; i < bg03.length; i++){
    const rect = bg03[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      bg03[i].classList.add('-visible');
    }
  }
});
