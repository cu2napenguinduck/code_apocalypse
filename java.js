$(document).ready(function(){
$("#character2").click(
    function(){
        $("#character2").css("opacity","0");
    }
);

$("#character3").click(
    function(){
        $("#character3").css("opacity","0");
    }
);

$("#character4").click(
    function(){
        $("#character4").css("opacity","0");
    }
);

$("#closedoor").click(
    function(){
        $("#closedoor").css("opacity","1");
        $(".good").css("opacity","1");
        $("#openwindow").css("opacity","1");
    }   
);
});