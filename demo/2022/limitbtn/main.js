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
