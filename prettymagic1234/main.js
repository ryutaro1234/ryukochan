var Ease = {
  easeInOut: function(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
}
var duration = 500;
window.addEventListener('DOMContentLoaded', function() {
  var smoothScrollTriggers = [].slice.call(document.querySelectorAll('a[href^="#"]'));
  smoothScrollTriggers.forEach(function(smoothScrollTrigger) {
    smoothScrollTrigger.addEventListener('click', function(e) {
      var href = smoothScrollTrigger.getAttribute('href');
      var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
      var targetElement = document.getElementById(href.replace('#', ''));
      if (targetElement) {
        e.preventDefault();
        e.stopPropagation();
        var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 115;
        var startTime = performance.now();
        var loop = function(nowTime) {
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

let scrollUp = document.getElementsByClassName('scroll-up');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollUp.length; i++) {
    const rect = scrollUp[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight) {
      scrollUp[i].classList.add('active2');
    }
  }
});

let scrollSlideL = document.getElementsByClassName('scroll-slide-l');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollSlideL.length; i++) {
    const rect = scrollSlideL[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight) {
      scrollSlideL[i].classList.add('active2');
    }
  }
});
let scrollSlideR = document.getElementsByClassName('scroll-slide-r');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollSlideR.length; i++) {
    const rect = scrollSlideR[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight) {
      scrollSlideR[i].classList.add('active2');
    }
  }
});

let scrollDown = document.getElementsByClassName('scroll-down');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollDown.length; i++) {
    const rect = scrollDown[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight) {
      scrollDown[i].classList.add('active2');
    }
  }
});

let scrollDownL = document.getElementsByClassName('scroll-down-l');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollDownL.length; i++) {
    const rect = scrollDownL[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight) {
      scrollDownL[i].classList.add('active2');
    }
  }
});
let scrollDownR = document.getElementsByClassName('scroll-down-r');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollDownR.length; i++) {
    const rect = scrollDownR[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight) {
      scrollDownR[i].classList.add('active2');
    }
  }
});

window.addEventListener("scroll", () => {
  for (let i = 0; i < document.getElementById('starDreamImage').length; i++) {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll < 0) {
      document.getElementById('starDreamImage').classList.add('fixed');
    }else {
      document.getElementById('starDreamImage').classList.remove('fixed');
    }
  }
});
