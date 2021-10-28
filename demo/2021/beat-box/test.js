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
  $("#beat_box02 a").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }
  });
});


$(function() {
  $("#beat_box03 a").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }
  });
});

$(function() {
  $("#play01").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎再生");
      $('#audiobox1').get(0).pause();
      $('#audiobox1').get(0).currentTime = 0;
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■再生");
      $('#audiobox1').get(0).play();
    }
  });
});
