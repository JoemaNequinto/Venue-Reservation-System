$(document).ready(function(){

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: 'yyyy-mm-dd'
    });

    $('select').material_select();
    // // $('#add-venue').modal();
    setSideNav();

    $("#add-venue-trig").click(function(){
        $(".modal-card").fadeOut("fast");
        $("#add-venue").fadeIn("fast");
    });

    $("#add-event-trig").click(function(){
        $(".modal-card").fadeOut("fast");
        $("#add-event").fadeIn("fast");
    });

$("#add-admin-trig").click(function(){
    $(".modal-card").fadeOut("fast");
    $("#add-admin").fadeIn("fast");
});

    $("#overlay").click(function(){
        $(this).hide();
        $(".modal-card").fadeOut("fast");
    });

    $("#add-fab").hover(function(){
        $("#overlay").fadeTo(100, 0.8);
    });

    $("#overlay").hover(function(){
        if(!$(".modal-card").is(":visible")) {
            $(this).hide();
        }
    });

    $('.collapsible-header').click(function(){
        // $('.collapsible-header').removeClass('active-collapsible');
        $(this).toggleClass('active-collapsible');
    });

    $(".modal-close").click(function(){
        $("#overlay").hide();
        $(".modal-card").fadeOut("fast");
    });

});

function setSideNav(){
    $('.nav-item').removeClass('active-nav');
    $('#side-nav-home').addClass('active-nav');
}
