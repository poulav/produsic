$(".country-click").on("click", function(e){
    e.preventDefault();
    if($("#dropdown").hasClass("open")) {
        $("#dropdown").removeClass("open");
        $("#dropdown").children("ul").slideUp("fast");
    } else {
        $("#dropdown").addClass("open");
        $("#dropdown").children("ul").slideDown("fast");
    }
    });