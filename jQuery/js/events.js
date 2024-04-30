$(document).ready(function(){
    $('#box').scroll(function(){
        console.log("You are scrolling");
    })

    $(window).resize(function(){
        console.log("You are Resizing window")
    })
})