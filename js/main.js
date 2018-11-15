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

// Header Animation

var whoAmI = ["Software Developer", "Web Developer", "Android Developer"];
var color = ["#FFFFFF", "#F0DF9D", "#C6C5C3"];
var jobType = document.querySelector(".developer-span");

var i = 0;

setInterval(function () {
    jobType
        .innerHTML = whoAmI[i];
    jobType.style.color = color[i++];

    if (i == whoAmI.length) i = 0;
}, 1250);





