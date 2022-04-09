const SIZE = 140;
var tmp = {};
loadImageToTmp();
function loadImageToTmp(){
    for(var i=1;i<=SIZE;i++){
        const _i = i;
        const img = new Image();
        tmp[_i] = null;
        img.src = "images/anime"+_i+".png";
        img.addEventListener("load",()=>{
            tmp[_i] = img;
        })
    }
}

const image = document.getElementById("anim_img");

const PX = 5; // 5px分の移動ごと画像を1枚進める
const offset = $("#anim_img_box").offset();
$(window).scroll(function() {
  const y = $(window).scrollTop();
  const dy = y - offset.top;
  if(offset.top<y&&y<offset.top+SIZE*PX){
      $("#anim_img_box").css("top",0)
      const i = Math.floor(dy / PX);
      if(i<=0||i>=SIZE) return;
      if(tmp[i].src) image.src = tmp[i].src;
   }else if(y>=offset.top+SIZE*PX){
       $("#anim_img_box").css("top","-"+(dy-SIZE*PX))
   }
});

$("#anim_img_padding").height(SIZE*PX); // スペースの変更
