$(document).ready(function(){

    console.log("reading script");
    // $('#add-venue').modal();
    setSideNav();

    $("#add-venue-trig").click(function(){
        console.log("clicked!");
    });

    // $('#hehe').click(function(){
    //     // $('#add-venue').modal("show");
    //     console.log("clicked!")
    // });


});

function setSideNav(){
    $('#side-nav-search').removeClass('active-nav');
    $('#side-nav-home').addClass('active-nav');
}
