
$(document).ready(function(){
    var carouselFunc = setInterval(function(){
        $("#GameVideo div ul").animate({marginLeft:-1440},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
});

var navigation = $(".Navigation");
var headerHeight = $(".main-header").outerHeight(true);
var navBarHeight = $(".Navigation").height();
var navigationHeading = $(".nav-heading");
var minScrollPos = 0;
var maxScrollPos = 100;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if(scrollTop > headerHeight) {
        navigation.addClass("Navigation-Scrolled");
        navigationHeading.addClass("nav-heading-shrink")
    } else {
        navigation.removeClass("Navigation-Scrolled");
        navigationHeading.removeClass("nav-heading-shrink");
    }
    var gameVideoPos = $("#GameVideo").offset().top - scrollTop - 40;
    var portfolioPos = $("#Portfolio").offset().top - scrollTop - navBarHeight;
    var aboutPos = $("#About").offset().top - scrollTop - navBarHeight;
    var contactPos = $("#Contact").offset().top - scrollTop - navBarHeight;
    console.log($("#GameVideo").offset().top - scrollTop);
    if( gameVideoPos  >= minScrollPos && gameVideoPos < maxScrollPos){
        $("#gamevideo-link").addClass("nav-selected");
        $("#portfolio-link").removeClass("nav-selected");
        $("#about-link").removeClass("nav-selected");
        $("#contact-link").removeClass("nav-selected");

    } if ( portfolioPos >= minScrollPos && portfolioPos < maxScrollPos){
        $("#gamevideo-link").removeClass("nav-selected");
        $("#portfolio-link").addClass("nav-selected");
        $("#about-link").removeClass("nav-selected");
        $("#contact-link").removeClass("nav-selected");

    } if (aboutPos >= minScrollPos && aboutPos < maxScrollPos){
        $("#gamevideo-link").removeClass("nav-selected");
        $("#portfolio-link").removeClass("nav-selected");
        $("#about-link").addClass("nav-selected");
        $("#contact-link").removeClass("nav-selected");
    } if ( contactPos >= minScrollPos && contactPos < $(window).height() / 2 ){
        $("#gamevideo-link").removeClass("nav-selected");
        $("#portfolio-link").removeClass("nav-selected");
        $("#about-link").removeClass("nav-selected");
        $("#contact-link").addClass("nav-selected");

    }

});

$("#gamevideo-link").click(function() {
    $("html, body").animate({scrollTop: $("#GameVideo").offset().top - 60});
    $("#gamevideo-link").addClass("nav-selected");
    $("#portfolio-link").removeClass("nav-selected");
    $("#about-link").removeClass("nav-selected");
    $("#contact-link").removeClass("nav-selected");

});

$("#portfolio-link").click(function() {
    $("html, body").animate({scrollTop: $("#Portfolio").offset().top - navBarHeight});

});

$("#about-link").click(function() {
    $("html, body").animate({scrollTop: $("#About").offset().top - navBarHeight - 60});

});

$("#contact-link").click(function() {
    $("html, body").animate({scrollTop: $("#Contact").offset().top - navBarHeight});

});