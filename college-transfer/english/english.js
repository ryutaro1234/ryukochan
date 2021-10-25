
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

$(function () {
    $('.btn-hide01').on('click', () => {
        $('#lesson01 section table td').css("color","transparent");
    });
});
$(function () {
    $('.btn-show01').on('click', () => {
        $('#lesson01 section table td').css("color","#333");
    });
});


$(function () {
    $('.btn-hide02').on('click', () => {
        $('#lesson02 section table td').css("color","transparent");
    });
});
$(function () {
    $('.btn-show02').on('click', () => {
        $('#lesson02 section table td').css("color","#333");
    });
});
