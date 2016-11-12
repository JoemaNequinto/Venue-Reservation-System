$(document).ready(function(){

    console.log("reading script");
    setSideNav();

    $("#overlay").hover(function(){
        if(!($(".modal-card").is(":visible"))) {
            $(this).hide();
        }
    });

    $("#overlay").click(function(){
        $(this).hide();
        $(".modal-card").hide();
    });

    $('#add-menu').hover(function(){
        $("#overlay").fadeIn();
    });

    $("#add-venue-trig").click(function(){
        $("#overlay").fadeIn();
        $('.modal-card').hide();
        $("#add-venue-card").show();
    });

    $("#add-event-trig").click(function(){
        $("#overlay").fadeIn();
        $('.modal-card').hide();
        $("#add-event-card").show();
    });

});

function setSideNav(){
    $('#side-nav-search').removeClass('active-nav');
    $('#side-nav-home').addClass('active-nav');
}
