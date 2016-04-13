// On document ready:

$(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp();

});


$( ".customFilter" ).click(function() {
  $( ".controls" ).slideToggle( "slow" );
});

$('.customFilter').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});

