var mySwiper = new Swiper(".swiper-container",{
    direction:"vertical",
    loop:true,


    onTransitionEnd:function(swiper){
        var curIndex = swiper.activeIndex;
        var slides = swiper.slides;
        [].forEach.call(slides,function(item,index){
            item.id ='';
            if(index ==curIndex){
                switch(index){
                    case 0:
                        item.id = "page"+(slides.length -2);
                        break;
                    case slides.length-1:
                        item.id ="page1";
                        break;
                    default :
                        item.id= "page"+curIndex
                }
            }



        })


    }



});
var   music = document.querySelector('.music'),
    mp3 = document.querySelector('#mp3');
window.setTimeout(function(){
   mp3.play();
    mp3.addEventListener("canplay",function(){
        music.style.opacity ="1";
        music.className ="music musicCur"


    },false)


},1000);
music.addEventListener("click",function(){
    if(mp3.paused){
        mp3.play();
        music.className ="music musicCur";

    }else{
        mp3.pause();
        music.className="music"
    }

},false);


/*树*/

/*
window.onload = function() {
    var span = document.querySelectorAll('#contact li');
    for(var i = 0; i < span.length; i++){
        span[i].style.WebkitAnimation = span[i].style.animation = " .2s "+(i*50)+"ms fontMove linear infinite alternate";
    }
};*/


