$(function () {
    $('.btn-hide').on('click', () => {
        $('span').hide();
    });
});

$(function () {
    $('.btn-show').on('click', () => {
        $('span').show();
    });
});

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

