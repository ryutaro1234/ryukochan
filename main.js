window.addEventListener("scroll", () => {
  const rect = document.getElementById('musicH1').getBoundingClientRect().top;
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect + scroll;
  const windowHeight = window.innerHeight;
  if (scroll > offset - windowHeight) {
    document.getElementById('musicH1').classList.add("reveal-text");
  }
  else {
      document.getElementById('musicH1').classList.remove("reveal-text");
  }
});

window.addEventListener("scroll", () => {
  const rect = document.getElementById('graphicH1').getBoundingClientRect().top;
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offset = rect + scroll;
  const windowHeight = window.innerHeight;
  if (scroll > offset - windowHeight) {
    document.getElementById('graphicH1').classList.add("reveal-text");
  }
  else {
    document.getElementById('graphicH1').classList.remove("reveal-text");
  }
});
