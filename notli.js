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
     
    $(".nn1").click(
        function(){
            $(".nn2").css("opacity","1");
        });

    $(".nn2").click(
        function(){
            $(".nn3").css("opacity","1");
        });

    $(".nn3").click(
        function(){
            $(".nn4").css("opacity","1");
        });
    
    $(".nn4").click(
        function(){
            $(".nn5").css("opacity","1");
        });
    
    $(".nn5").click(
        function(){
            $(".nn6").css("opacity","1");
        });
    
    $(".nn6").click(
        function(){
            $(".nn7").css("opacity","1");
        });

    $(".nn7").click(
        function(){
            $(".nn8").css("opacity","1");
        });
    
    $(".nn8").click(
        function(){
            $(".nn9").css("opacity","1");
        });
    
    $(".nn9").click(
        function(){
            $(".dop").css("opacity","1");
            $(".arw").css("opacity","1")
        });

    $(".arw").mouseenter(
        function(){
            $(".help").css("opacity","1");
        });

    $(".arw").mouseleave(
        function(){
            $(".help").css("opacity","0");
        });

            
    });