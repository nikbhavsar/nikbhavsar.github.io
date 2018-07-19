//Loader Initalize
$(function () {

    $(".loader").animate({
        color: "#4684ee"
    }, 1000);

    $(".message").animate({
        color: "#3869be"
    }, 1000);

    $(".loader").fadeOut(3000, function () {
     
        $(".maincontent").fadeIn(500);
    });
});

// Changing Letters in Jumbortron

var child = document.querySelector("slogan-span");



