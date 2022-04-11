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

window.addEventListener("scroll", () => {
  const rect = document.getElementById('home').getBoundingClientRect().top;
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect + scroll;
  const windowHeight = window.innerHeight;
  if (scroll > offset - windowHeight) {
    document.body.style.backgroundColor = "#ffb457";

    const h1 = document.getElementsByTagName('h1');
    for (i = 0; i < h1.length; i++) {
      h1[i].style.background = "linear-gradient(25deg, #fff, #ffff33)";
      h1[i].style.webkitBackgroundClip = "text";
    }
    const h2 = document.getElementsByTagName('h2');
    for (i = 0; i < h2.length; i++) {
      h2[i].style.background = "linear-gradient(25deg, #fff, #ffff33)";
      h2[i].style.webkitBackgroundClip = "text";
    }
    const h3 = document.getElementsByTagName('h3');
    for (i = 0; i < h3.length; i++) {
      h3[i].style.background = "linear-gradient(25deg, #fff, #ffff33)";
      h3[i].style.webkitBackgroundClip = "text";
    }

    document.querySelector("#homeBtn .menu__item").classList.add("active");

    document.querySelector(".menu__border").style.marginLeft = "0%";
  } else {
    document.querySelector("#homeBtn .menu__item").classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const rect = document.getElementById('profile').getBoundingClientRect().top;
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect + scroll;
  const windowHeight = window.innerHeight;
  if (scroll > offset - windowHeight) {
    document.body.style.backgroundColor = "#ff96bd";

    const h1 = document.getElementsByTagName('h1');
    for (i = 0; i < h1.length; i++) {
      h1[i].style.background = "linear-gradient(25deg, #fff, #ffadff)";
      h1[i].style.webkitBackgroundClip = "text";
    }
    const h2 = document.getElementsByTagName('h2');
    for (i = 0; i < h2.length; i++) {
      h2[i].style.background = "linear-gradient(25deg, #fff, #ffadff)";
      h2[i].style.webkitBackgroundClip = "text";
    }
    const h3 = document.getElementsByTagName('h3');
    for (i = 0; i < h3.length; i++) {
      h3[i].style.background = "linear-gradient(25deg, #fff, #ffadff)";
      h3[i].style.webkitBackgroundClip = "text";
    }

    document.querySelector("#profileBtn .menu__item").classList.add("active");
    document.querySelector("#homeBtn .menu__item").classList.remove("active");

    document.querySelector(".menu__border").style.marginLeft = "20%";
  } else {
    document.querySelector("#profileBtn .menu__item").classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const rect = document.getElementById('contact').getBoundingClientRect().top;
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect + scroll;
  const windowHeight = window.innerHeight;
  if (scroll > offset - windowHeight) {
    document.body.style.backgroundColor = "#cffff1";

    const h1 = document.getElementsByTagName('h1');
    for (i = 0; i < h1.length; i++) {
      h1[i].style.background = "linear-gradient(25deg, #333, #3cb371)";
      h1[i].style.webkitBackgroundClip = "text";
    }
    const h2 = document.getElementsByTagName('h2');
    for (i = 0; i < h2.length; i++) {
      h2[i].style.background = "linear-gradient(25deg, #333, #3cb371)";
      h2[i].style.webkitBackgroundClip = "text";
    }
    const h3 = document.getElementsByTagName('h3');
    for (i = 0; i < h3.length; i++) {
      h3[i].style.background = "linear-gradient(25deg, #333, #3cb371)";
      h3[i].style.webkitBackgroundClip = "text";
    }

    document.querySelector("#contactBtn .menu__item").classList.add("active");
    document.querySelector("#profileBtn .menu__item").classList.remove("active");

    document.querySelector(".menu__border").style.marginLeft = "40%";
  } else {
    document.querySelector("#contactBtn .menu__item").classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const rect = document.getElementById('graphic').getBoundingClientRect().top;
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect + scroll;
  const windowHeight = window.innerHeight;
  if (scroll > offset - windowHeight) {
    document.body.style.backgroundColor = "#fffcf9";

    const h1 = document.getElementsByTagName('h1');
    for (i = 0; i < h1.length; i++) {
      h1[i].style.background = "linear-gradient(25deg, #ffa500, #ffff33)";
      h1[i].style.webkitBackgroundClip = "text";
    }
    const h2 = document.getElementsByTagName('h2');
    for (i = 0; i < h2.length; i++) {
      h2[i].style.background = "linear-gradient(25deg, #ffa500, #ffff33)";
      h2[i].style.webkitBackgroundClip = "text";
    }
    const h3 = document.getElementsByTagName('h3');
    for (i = 0; i < h3.length; i++) {
      h3[i].style.background = "linear-gradient(25deg, #ffa500, #ffff33)";
      h3[i].style.webkitBackgroundClip = "text";
    }

    document.querySelector("#graphicBtn .menu__item").classList.add("active");
    document.querySelector("#contactBtn .menu__item").classList.remove("active");

    document.querySelector(".menu__border").style.marginLeft = "60%";
  } else {
    document.querySelector("#graphicBtn .menu__item").classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const rect = document.getElementById('music').getBoundingClientRect().top;
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect + scroll;
  const windowHeight = window.innerHeight;
  if (scroll > offset - windowHeight) {
    document.body.style.backgroundColor = "#f9fcff";

    const h1 = document.getElementsByTagName('h1');
    for (i = 0; i < h1.length; i++) {
      h1[i].style.background = "linear-gradient(25deg, #333, #add6ff)";
      h1[i].style.webkitBackgroundClip = "text";
    }
    const h2 = document.getElementsByTagName('h2');
    for (i = 0; i < h2.length; i++) {
      h2[i].style.background = "linear-gradient(25deg, #333, #add6ff)";
      h2[i].style.webkitBackgroundClip = "text";
    }
    const h3 = document.getElementsByTagName('h3');
    for (i = 0; i < h3.length; i++) {
      h3[i].style.background = "linear-gradient(25deg, #333, #add6ff)";
      h3[i].style.webkitBackgroundClip = "text";
    }

    document.querySelector("#graphicBtn .menu__item").classList.remove("active");
    document.querySelector("#musicBtn .menu__item").classList.add("active");

    document.querySelector(".menu__border").style.marginLeft = "80%";
  } else {
    document.querySelector("#musicBtn .menu__item").classList.remove("active");
    }
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
