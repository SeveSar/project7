$(document).ready(function(){

    const menuList = $('#jsMenu');
    const burger = $("#jsHamburger");
    
    function toggleMenu() {
        menuList.toggleClass('menu__active');
        burger.toggleClass('hamburger__active')
        $('.hamburger__overflow').toggleClass('hamburger__overflow_active');
        if (burger.hasClass('hamburger__active')) {
            $('body').css({'overflow': 'hidden'});
        } 
        else {
            $('body').css({'overflow': 'auto'});
        }
    }
    
    burger.on('click', () => toggleMenu());
    $('#jsMenu .menu__item').on('click', () => toggleMenu());
    $('.hamburger__overflow').on('click',() => toggleMenu());
    
   
    // $(window).on('click',function (event) {
        
    //     if ($(event.target).hasClass('hamburger') || $(event.target).hasClass('jsLine')){
    //         $(menuList).toggleClass('menu__active');
    //         $(burger).toggleClass('hamburger__active');
    //     }
    //     else if (!$(event.target).hasClass('menu menu__active')){
    //         $(menuList).removeClass('menu__active');
    //         $(burger).removeClass('hamburger__active');
    //     }

    // })

}); 


