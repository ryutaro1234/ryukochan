var audio01 = document.getElementById("audio01");
audio01.onplay = function(){
  document.getElementById("snare01").classList.add("pop01")
  document.getElementById("bass01").classList.add("pop01")
  document.getElementById("hat01-top").classList.add("pop01")
  document.getElementById("clash01-r").classList.add("pop01")
};
audio01.onpause = function(){
  audio01.currentTime = 0;
  document.getElementById("snare01").classList.remove("pop01")
  document.getElementById("bass01").classList.remove("pop01")
  document.getElementById("hat01-top").classList.remove("pop01")
  document.getElementById("clash01-r").classList.remove("pop01")
};
