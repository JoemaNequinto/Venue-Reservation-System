$(document).ready(function(){

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: 'yyyy-mm-dd'
      });

    $('select').material_select();
    setSideNav();

    $("#add-fab").click(function(){
        $("#overlay").fadeTo(100, 0.8);
        $(".modal-card").fadeOut("fast");
        $("#add-event").fadeIn("fast");
    });

    $("#overlay").click(function(){
        $(this).hide();
        $(".modal-card").fadeOut("fast");
    });

    $("#overlay").hover(function(){
        if(!$(".modal-card").is(":visible")) {
            $(this).hide();
        }
    });

    $(".modal-close").click(function(){
        $("#overlay").hide();
        $(".modal-card").fadeOut("fast");
    });

});
function setSideNav(){
    $('#side-nav-search').removeClass('active-nav');
    $('#side-nav-home').addClass('active-nav');
}
