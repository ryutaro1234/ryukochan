$(function() {
  $("#box1_1").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box1_2").removeClass("active");
      $("#box1_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box1_2").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box1_1").removeClass("active");
      $("#box1_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box1_3").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box1_1").removeClass("active");
      $("#box1_2").removeClass("active");
    }
  });
});



$(function() {
  $("#box2_1").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_2").removeClass("active");
      $("#box2_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box2_2").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_1").removeClass("active");
      $("#box2_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box2_3").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_1").removeClass("active");
      $("#box2_2").removeClass("active");
    }
  });
});



$(function() {
  $("#box3_1").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_2").removeClass("active");
      $("#box3_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box3_2").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_1").removeClass("active");
      $("#box3_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box3_3").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_1").removeClass("active");
      $("#box3_2").removeClass("active");
    }
  });
});

$(function() {
  $("#play01").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎再生");

      $('#audio1_1')[0].pause();
      $('#audio1_2')[0].pause();
      $('#audio1_3')[0].pause();
      $('#audio2_1')[0].pause();
      $('#audio2_2')[0].pause();
      $('#audio2_3')[0].pause();
      $('#audio3_1')[0].pause();
      $('#audio3_2')[0].pause();
      $('#audio3_3')[0].pause();

    }//if

    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■停止");

      if ($("#box1_1").hasClass("active")) {
        $('#audio1_1')[0].currentTime = 0;
        $('#audio1_1')[0].play();
      }
      else {
        $('#audio1_1')[0].pause();
      };

      if ($("#box1_2").hasClass("active")) {
        $('#audio1_2')[0].currentTime = 0;
        $('#audio1_2')[0].play();
      }
      else {
        $('#audio1_2')[0].pause();
      };

      if ($("#box1_3").hasClass("active")) {
        $('#audio1_3')[0].currentTime = 0;
        $('#audio1_3')[0].play();
      }
      else {
        $('#audio1_3')[0].pause();
      };


      if ($("#box2_1").hasClass("active")) {
        $('#audio2_1')[0].currentTime = 0;
        $('#audio2_1')[0].play();
      }
      else {
        $('#audio2_1')[0].pause();
      };

      if ($("#box2_2").hasClass("active")) {
        $('#audio2_2')[0].currentTime = 0;
        $('#audio2_2')[0].play();
      }
      else {
        $('#audio2_2')[0].pause();
      };

      if ($("#box2_3").hasClass("active")) {
        $('#audio2_3')[0].currentTime = 0;
        $('#audio2_3')[0].play();
      }
      else {
        $('#audio2_3')[0].pause();
      };


      if ($("#box3_1").hasClass("active")) {
        $('#audio3_1')[0].currentTime = 0;
        $('#audio3_1')[0].play();
      }
      else {
        $('#audio3_1')[0].pause();
      };

      if ($("#box3_2").hasClass("active")) {
        $('#audio3_2')[0].currentTime = 0;
        $('#audio3_2')[0].play();
      }
      else {
        $('#audio3_2')[0].pause();
      };

      if ($("#box3_3").hasClass("active")) {
        $('#audio3_3')[0].currentTime = 0;
        $('#audio3_3')[0].play();
      }
      else {
        $('#audio3_3')[0].pause();
      };

    }//if
  });
});

document.querySelector("#audio1_1").onpause = function(){
  document.querySelector("#play01").classList.remove("active");
  document.querySelector("#play01").text("▶︎再生");
};
