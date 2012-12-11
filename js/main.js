$(document).ready(function(){
	
	// show dropdown
	$('.dropdown-toggle').click(function(){
		var dropdown = $(this).parent().find('.m-dropdown-menu');
		if( dropdown.css('display') == 'none' )
			dropdown.show();
		else 
			dropdown.hide();
		
		// clicks out the dropdown
	    $('body').click(function(event){
	    	if(!$(event.target).is('.m-dropdown-menu a')) {
	    		$(this).find('.m-dropdown-menu').hide();
	    	}
	    });
		event.stopPropagation();
	});
	
	// alert
	function showAlert(message, time) {
		$('#header').append('<div class="m-alert">' + message + '</div>');
		setTimeout(function() {
	       $('.m-alert').hide()
	   },5000);
	}
	
	// placeholder for old browsers
	if (!Modernizr.input.autofocus) {
        $('input').each(function(){
			if ($(this).attr('autofocus'))
				$(this).focus();
		});
    }
	if (!Modernizr.input.placeholder) {
        $('input').each(function(){
			if ($(this).attr('placeholder')) {
				var placeholder_text = $(this).attr('placeholder');
				$(this).attr('value', placeholder_text).addClass('nc');
			}
		});
		
		// for all fields with uncleared initial value, on focus
		$('.nc').focus(function() {

			// if it is uncleared
			if ($(this).hasClass('nc')) {

				// remeber the initial value
				$textbox = $(this).val();

				// and remove it
				$(this).removeClass('nc').val('');
			}
		}).focusout(function() { // on focus out

			// if there is no new value posted by user
			if ($(this).val() == '')

				// mark as uncleared and show initial value
				$(this).addClass('nc').val($textbox);
		});
    }
	
});
