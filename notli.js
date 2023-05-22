$(document).ready(function(){
    $("#direction").click(
        function(){
            $("#direction").css("opacity","0");
            $("#ans").css("opacity","1");
        });
        
    $(".ch1").click(
        function(){
            $(".ch1").css("opacity","0.2");
            $(".white").css("opacity","0.5");
            $(".border").css("opacity","1");
            $(".judgeq").css("opacity","1");
            $(".judgeq").css("z-index","4");
            $(".border").css("z-index","3");
            $(".white").css("z-index","1");
            $(".ch1").css("z-index","2");
            $(".ans1").css("opacity","1");
            $(".ans2").css("opacity","1");
            $(".ans1").css("z-index","5");
            $(".ans2").css("z-index","6");
        });
     
           
    
    });