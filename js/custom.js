AOS.init();

$(document).ready(function(){
    $('.banner-owl').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            481:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    });
$(document).ready(function(){
  $(".menu-toggle").click(function(){
     $(".navigation").addClass("menu-active");
  });
   $(".close-btn-menu").click(function(){
     $(".navigation").removeClass("menu-active");
  });

  $(".main-nav li").each(function(){
    $(".subopener").click(function(){
    $(this).parent().toggleClass('active-menu').siblings().removeClass('active-menu');
    });

    $(".sidebar a").click(function(){
        $(".sidebar a").removeClass('active');
        $(this).addClass('active');
});
  });
});
/********pop up img */
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })