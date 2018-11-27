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
var color = ["#D1C4DF", "#F0DF9D", "#C6C5C3"];
var color1 = ["#F0DF9D", "#C6C5C3", "#D1C4DF"];
var color2 = ["#C6C5C3", "#D1C4DF", "#F0DF9D"];
var jobType = document.querySelector(".developer-span");
var myName = document.querySelector(".name-span");
var slogan = document.querySelector(".slogan-span");
var i = 0;

setInterval(function () {

    jobType.innerHTML = whoAmI[i];
    jobType.style.color = color[i];

    myName.style.color = color1[i];
    slogan.style.color = color2[i++];

    if (i == whoAmI.length) i = 0;
}, 1250);


//Section Hide and Display Effect

    const targetHeading = document.querySelectorAll(".plus-minus");

    console.log(targetHeading);

    for(var j=0 ; j<targetHeading.length; j++){

        targetHeading[j].addEventListener("click", function(event){  

      
 
            if(event.target.className === "fas fa-minus-circle plus-minus"){
                
               event.target.className = "fas fa-plus-circle plus-minus";
       
                if( (event.target.parentNode.parentNode.children)[1].classList.contains("d-flex")){
                   (event.target.parentNode.parentNode.children)[1].classList.remove("d-flex");
                }
               
                (event.target.parentNode.parentNode.children)[1].style.display = "none";
            } else {
                event.target.className = "fas fa-minus-circle plus-minus";
                (event.target.parentNode.parentNode.children)[1].classList.add("d-flex");
            }
        
           }
           ,false);
        
       

    }

  

  


