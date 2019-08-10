var cptr = 1, act = "inc";

function defilerSlideADroite(e) {
    e.preventDefault();
    
    var index = $("#slide > ul > li.current").index();
    if (index < $("#slide > ul > li").length - 1) {
        $("#slide > ul > li.current").removeClass("current").next().addClass("current");
        $("#slide > ul").css("margin-left", -((index + 1) * 100) + "%");
        
        $("#slide-pagination > ul > li.active").removeClass("active");
        $($("#slide-pagination > ul > li")[index + 1]).addClass("active");
    }
}

function defilerSlideAGauche(e) {
    e.preventDefault();
    
    var index = $("#slide > ul > li.current").index();
    if (index > 0) {
        $("#slide > ul > li.current").removeClass("current").prev().addClass("current");
        $("#slide > ul").css("margin-left", -((index - 1) * 100) + "%");
        
        $("#slide-pagination > ul > li.active").removeClass("active");
        $($("#slide-pagination > ul > li")[index - 1]).addClass("active");
    }
}

$(function() {
    $(document).on("click","#slide-next > a", defilerSlideADroite);
    $(document).on("click","#slide-prev > a", defilerSlideAGauche);
    $(document).on("click","#slide-pagination > ul > li > a", function(e) {
        e.preventDefault();
        console.log('call');
        var index = $(this).parent().index();
        
        $("#slide > ul > li.current").removeClass("current");
        $($("#slide > ul > li")[index]).addClass("current");
        $("#slide > ul").css("margin-left", -(index * 100) + "%");
    
        $("#slide-pagination > ul > li.active").removeClass("active");
        $($("#slide-pagination > ul > li")[index]).addClass("active");
    });

    console.log("ccc");
    setTimeout(function(){
        console.log("appel "+act+" "+cptr);
        if(cptr == 6) {
            act = "dec";
            cptr = 5;
        } else if (i == 1) {
            act = "inc";
            cptr = 1;
        } else {
            cptr = act == "inc" ? cptr + 1 : cptr - 1;
        }
        
    }, 1000);
});