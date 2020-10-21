$(function(){

    // Accordion
    $('.accordion__header').on('click', function(){
        $(this).closest('.accordion__item').toggleClass('accordion__item_active');
        $(this).siblings().slideToggle('300');
        //$(this).addClass('accordion__item_active');
    });

    // Tabs
    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab_active');
        $($(this).closest('.tabs').siblings()).removeClass('tabs__content_active');

        $(this).addClass('tab_active');
        $($(this).attr('href')).addClass('tabs__content_active');
    });

    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger_active');
        $('.header__menu').toggleClass('header__menu_active');
    });
});