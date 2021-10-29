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
    }//
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■再生");

      if ($("#box1_1").hasClass("active")) {
          new Audio("c.mp3").play()
      }
      else if (!$(this).hasClass("active")) {
          new Audio("c.mp3").pause()
          new Audio("c.mp3").currentTime = 0
      }
    }//


  });
});
