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
    
        var index = $(this).parent().index();
        
        $("#slide > ul > li.current").removeClass("current");
        $($("#slide > ul > li")[index]).addClass("current");
        $("#slide > ul").css("margin-left", -(index * 100) + "%");
    
        $("#slide-pagination > ul > li.active").removeClass("active");
        $($("#slide-pagination > ul > li")[index]).addClass("active");
    });
});