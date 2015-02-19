

var carouselposition = 1;
$("#left-arrow").click(function(){
    if(carouselposition > 1) {
        $("#GameVideo div ul").animate({marginLeft: '+=' + 1440 + 'px'}, 1000, function () {

        });
        --carouselposition;
        $("#selector" + carouselposition).addClass("fa-circle");
        $("#selector" + carouselposition).removeClass("fa-circle-o");
        $("#selector" + (carouselposition+1)).addClass("fa-circle-o");
        $("#selector" + (carouselposition+1)).removeClass("fa-circle");

    }
});

$("#right-arrow").click(function(){
    if(carouselposition < 3) {
        $("#GameVideo div ul").animate({marginLeft: '-=' + 1440 + 'px'}, 1000, function () {

        });
        ++carouselposition;
        $("#selector" + carouselposition).addClass("fa-circle");
        $("#selector" + carouselposition).removeClass("fa-circle-o");
        $("#selector" + (carouselposition-1)).removeClass("fa-circle");
        $("#selector" + (carouselposition-1)).addClass("fa-circle-o");
    }

});


$("#sprite-pic, #image-layover i").click(function(){
    $(".modal-container").css({visibility: "visible"}).animate({opacity: 1}, 500);
});

$(".modal-container").click(function(){
    $(".modal-container").animate({opacity: 0}, 500);
    setTimeout(function(){
        $(".modal-container").css({visibility: "hidden"});
    }, 500);
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
    if(scrollTop > 900){
        $("#sprite-sheet-background").css({visibility: "visible"});
    } else {
        $("#sprite-sheet-background").css({visibility: "hidden"});
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