$(document).ready(function(){

    console.log("reading script");
    // $('#add-venue').modal();
    setSideNav();

    $("#add-venue-trig").click(function(){
        console.log("clicked!");
    });

    $("#overlay").hover(function(){
        $(this).hide();
    });

    $("#add-fab").hover(function(){
        $("#overlay").fadeTo(100, 0.8);
    });

});

function setSideNav(){
    $('#side-nav-search').removeClass('active-nav');
    $('#side-nav-home').addClass('active-nav');
}
