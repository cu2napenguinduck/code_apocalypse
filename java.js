$(document).ready(function(){
$("#character2").click(
    function(){
        $("#character2").css("opacity","0");
        $(".scare1").css("opacity","1");
    }   
);

$("#character3").click(
    function(){
        $("#character3").css("opacity","0");
        $(".scare2").css("opacity","1");
        }
);

$("#character4").click(
    function(){
        $("#character4").css("opacity","0");
        $(".scare3").css("opacity","1");

    }
);

$("#closedoor").click(
    function(){
        $("#closedoor").css("opacity","1");
        $(".good").css("opacity","1");
        $("#openwindow").css("opacity","1");
    }   
);
$(".openingdoor").click(
    function(){
        $(".idconfirm").css("opacity","1");
        $(".openingdoor").css("opacity","0.4");
        $(".door").css("opacity","0");
        $(".question").css("opacity","1");
        $(".border").css("opacity","1");
        $(".yes").css("opacity","1");
        $(".no").css("opacity","1");
    }
);
$(".face").click(
    function(){
        $(".myborder").css("opacity","1");
        $(".q1").css("opacity","1");
        $(".q2").css("opacity","1");
        $(".judge").css("opacity","0.4");
        $(".face").css("opacity","0");
    }   
);

});