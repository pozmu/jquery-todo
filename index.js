// $("#q1").click(() => { 
//     $("#a1").slideToggle("slow");
//     $("#arrow1-down, #arrow1-up").toggleClass("collapse");
//     // $("#arrow1-up").toggleClass("collapse");
// })

// $("#q2").click(() => { 
//     $("#a2").slideToggle("slow");
//     $("#arrow2-down, #arrow2-up").toggleClass("collapse");
//     // $("#arrow1-up").toggleClass("collapse");
// })

// $("#q3").click(() => { 
//     $("#a3").slideToggle("slow");
//     $("#arrow3-down, #arrow3-up").toggleClass("collapse");
//     // $("#arrow1-up").toggleClass("collapse");
// })



$(".question").click(function() { 
    $(this).next().animate({
        width: ["toggle", "swing"],
        height: ["toggle", "swing"],
        opacity: "toggle"
    });
    $(this).children().toggleClass("collapse");
})