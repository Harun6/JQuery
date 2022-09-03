
//$("h1").text("Hey");

//$("button").html("<em>Don't Click Me</em>")


//$("a").attr("href", "https://www.yahoo.com");

/* for(let i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}
*/
/*

$("button").click(function(){
    $("h1").css("color", "purple");
});

*/
/*
$(document).keypress(function(event){
    $("h1").text(event.key);
});
*/

/*
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
});
*/
/*
$("h1").on("click", function(){
    $("h1").hide();
});
*/
/*
$("h1").on("click", function(){
    $("h1").fadeOut();
});
*/

/*
$("h1").on("click", function(){
    $("h1").toggle();
});
*/
/*
$("h1").on("click", function(){
    $("h1").slideUp();
});
*/
/*
$("h1").on("click", function(){
    $("h1").slideToggle();
});
*/
/*
$("h1").on("click", function(){
    $("h1").animate({opacity : 0.5, margin : 20})
});
*/
$("h1").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5})
});