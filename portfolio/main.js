function nav_toggle(){
  document.getElementById("nav_toggle").classList.toggle("nav_toggle");
  document.getElementById("navigation").classList.toggle("navigation");
  document.getElementById("nav").classList.toggle("nav");
};

var Ease = {
  easeInOut: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; }
}
var duration = 500;
window.addEventListener('DOMContentLoaded', function () {
  var smoothScrollTriggers = [].slice.call(document.querySelectorAll('a[href^="#"]'));
  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
    smoothScrollTrigger.addEventListener('click', function (e) {
      var href = smoothScrollTrigger.getAttribute('href');
      var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
      var targetElement = document.getElementById(href.replace('#', ''));
      if (targetElement) {
        e.preventDefault();
        e.stopPropagation();
        var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 115;
        var startTime = performance.now();
        var loop = function (nowTime) {
          var time = nowTime - startTime;
          var normalizedTime = time / duration;
          if (normalizedTime < 1) {
            window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
            requestAnimationFrame(loop);
          } else {
            window.scrollTo(0, targetPosition);
          }
        }
        requestAnimationFrame(loop);
      }
    });
  });
});

let fadeIn = document.getElementsByClassName('fade-in');
window.addEventListener("load", () => {
  for (let i = 0; i < fadeIn.length; i++){
    const rect = fadeIn[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeIn[i].classList.add('active');
    }
  }
});

let scrollUp = document.getElementsByClassName('scroll-up');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollUp.length; i++){
    const rect = scrollUp[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollUp[i].classList.add('active');
    }
  }
});


let scrollSlideL = document.getElementsByClassName('scroll-slide-l');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollSlideL.length; i++){
    const rect = scrollSlideL[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollSlideL[i].classList.add('active');
    }
  }
});
let scrollSlideR = document.getElementsByClassName('scroll-slide-r');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollSlideR.length; i++){
    const rect = scrollSlideR[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollSlideR[i].classList.add('active');
    }
  }
});

let scrollDown = document.getElementsByClassName('scroll-down');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollDown.length; i++){
    const rect = scrollDown[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollDown[i].classList.add('active');
    }
  }
});

let scrollDownL = document.getElementsByClassName('scroll-down-l');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollDownL.length; i++){
    const rect = scrollDownL[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollDownL[i].classList.add('active');
    }
  }
});
let scrollDownR = document.getElementsByClassName('scroll-down-r');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollDownR.length; i++){
    const rect = scrollDownR[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollDownR[i].classList.add('active');
    }
  }
});




document.querySelector("#graphicBtn").onclick = function () {
  document.querySelector("#graphicBtn").classList.toggle("active");

  if(document.querySelector('#graphicBtn').classList.contains('active')){
    document.querySelector('#bgmBtn').classList.remove('active2');
    document.querySelector('#bgmBtn').classList.remove('active');
    document.querySelector('#songBtn').classList.remove('active2');
    document.querySelector('#songBtn').classList.remove('active');
    const classMusic = document.getElementsByClassName("music");
    for(var i = 0; i < classMusic.length; i++){
        classMusic[i].classList.add("none");
    }
    document.querySelector("#musicBtn").classList.remove("active");
    document.querySelector("#illustrationBtn").classList.add("active");
    document.querySelector("#designBtn").classList.add("active");
    const classGraphic = document.getElementsByClassName("graphic");
    for(var i = 0; i < classGraphic.length; i++){
        classGraphic[i].classList.remove("none");
    }
  }
  else{
    const classMusic = document.getElementsByClassName("music");
    for(var i = 0; i < classMusic.length; i++){
        classMusic[i].classList.remove("none");
    }
    document.querySelector("#illustrationBtn").classList.remove("active");
    document.querySelector("#designBtn").classList.remove("active");
    document.querySelector("#illustrationBtn").classList.remove("active2");
    document.querySelector("#designBtn").classList.remove("active2");
    const classIllustration = document.getElementsByClassName("illustration");
    for(var i = 0; i < classIllustration.length; i++){
        classIllustration[i].classList.remove("none");
    }
    const classDesign = document.getElementsByClassName("design");
    for(var i = 0; i < classDesign.length; i++){
        classDesign[i].classList.remove("none");
    }
  };
};

document.querySelector("#designBtn").onclick = function () {
  document.querySelector("#designBtn").classList.toggle("active2");

  if(document.querySelector('#designBtn').classList.contains('active2')){
    document.querySelector('#illustrationBtn').classList.remove('active2');
    const classIllustration = document.getElementsByClassName("illustration");
    for(var i = 0; i < classIllustration.length; i++){
        classIllustration[i].classList.add("none");
    }
    const classDesign = document.getElementsByClassName("design");
    for(var i = 0; i < classDesign.length; i++){
        classDesign[i].classList.remove("none");
    }
  }
  else{
    const classIllustration = document.getElementsByClassName("illustration");
    for(var i = 0; i < classIllustration.length; i++){
        classIllustration[i].classList.remove("none");
    }
  };
};

document.querySelector("#illustrationBtn").onclick = function () {
  document.querySelector("#illustrationBtn").classList.toggle("active2");

  if(document.querySelector('#illustrationBtn').classList.contains('active2')){
    document.querySelector('#designBtn').classList.remove('active2');
    const classDesign = document.getElementsByClassName("design");
    for(var i = 0; i < classDesign.length; i++){
        classDesign[i].classList.add("none");
    }
    const classIllustration = document.getElementsByClassName("illustration");
    for(var i = 0; i < classIllustration.length; i++){
        classIllustration[i].classList.remove("none");
    }
  }
  else{
    const classDesign = document.getElementsByClassName("design");
    for(var i = 0; i < classDesign.length; i++){
        classDesign[i].classList.remove("none");
    }
  };
};



document.querySelector("#musicBtn").onclick = function () {
  document.querySelector("#musicBtn").classList.toggle("active");

  if(document.querySelector('#musicBtn').classList.contains('active')){
    document.querySelector('#designBtn').classList.remove('active2');
    document.querySelector('#designBtn').classList.remove('active');
    document.querySelector('#illustrationBtn').classList.remove('active2');
    document.querySelector('#illustrationBtn').classList.remove('active');
    const classGraphic = document.getElementsByClassName("graphic");
    for(var i = 0; i < classGraphic.length; i++){
        classGraphic[i].classList.add("none");
    }
    document.querySelector("#graphicBtn").classList.remove("active");
    document.querySelector("#songBtn").classList.add("active");
    document.querySelector("#bgmBtn").classList.add("active");
    const classMusic = document.getElementsByClassName("music");
    for(var i = 0; i < classMusic.length; i++){
        classMusic[i].classList.remove("none");
    }
  }
  else{
    const classGraphic = document.getElementsByClassName("graphic");
    for(var i = 0; i < classGraphic.length; i++){
        classGraphic[i].classList.remove("none");
    }
    document.querySelector("#songBtn").classList.remove("active");
    document.querySelector("#bgmBtn").classList.remove("active");
    document.querySelector("#songBtn").classList.remove("active2");
    document.querySelector("#bgmBtn").classList.remove("active2");
    const classBgm = document.getElementsByClassName("bgm");
    for(var i = 0; i < classBgm.length; i++){
        classBgm[i].classList.remove("none");
    }
    const classSong = document.getElementsByClassName("song");
    for(var i = 0; i < classSong.length; i++){
        classSong[i].classList.remove("none");
    }
  };
};

document.querySelector("#bgmBtn").onclick = function () {
  document.querySelector("#bgmBtn").classList.toggle("active2");

  if(document.querySelector('#bgmBtn').classList.contains('active2')){
    document.querySelector('#songBtn').classList.remove('active2');
    const classSong = document.getElementsByClassName("song");
    for(var i = 0; i < classSong.length; i++){
        classSong[i].classList.add("none");
    }
    const classBgm = document.getElementsByClassName("bgm");
    for(var i = 0; i < classBgm.length; i++){
        classBgm[i].classList.remove("none");
    }
  }
  else{
    const classSong = document.getElementsByClassName("song");
    for(var i = 0; i < classSong.length; i++){
        classSong[i].classList.remove("none");
    }
  };
};

document.querySelector("#songBtn").onclick = function () {
  document.querySelector("#songBtn").classList.toggle("active2");

  if(document.querySelector('#songBtn').classList.contains('active2')){
    document.querySelector('#bgmBtn').classList.remove('active2');
    const classBgm = document.getElementsByClassName("bgm");
    for(var i = 0; i < classBgm.length; i++){
        classBgm[i].classList.add("none");
    }
    const classSong = document.getElementsByClassName("song");
    for(var i = 0; i < classSong.length; i++){
        classSong[i].classList.remove("none");
    }
  }
  else{
    const classBgm = document.getElementsByClassName("bgm");
    for(var i = 0; i < classBgm.length; i++){
        classBgm[i].classList.remove("none");
    }
  };
};
