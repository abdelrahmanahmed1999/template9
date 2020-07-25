/*global $,alert ,console*/

$(function(){
    "use strict";

    //trigger niceScroll
    $('html').niceScroll({
        cursorcolor:"#ff4008",
        cursorborder: '1px solid #ff4008',    
    });

    //adjust header height
    $('.header').height($(window).height());

    $(window).resize(function(){
        "use strict";
        $('.header').height($(this).height());
    });

    $('.header ul li a').click(function(){
        "use strict";
        $(this).parent().addClass('active').siblings('li').removeClass('active');

        //console.log($('.'+$(this).attr('data-value')).offset().top+50);
       
        $("html,body").animate({
            scrollTop : $('.'+$(this).attr('data-value')).offset().top
        });
      
    });

});