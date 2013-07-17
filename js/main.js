/**
 * Global variables
 *
 * @author Jonathan Path
 */

// size of the document
var global_W = $('body').width();
var global_H = $(window).height();

// responsive medium screens
var medium_W = 780;
var medium_H = 600;

// responsive small screens/mobile
var small_W = 752;
var small_H = 415;

// Remove NavBar from iOS
if( !window.location.hash && window.addEventListener ){
    window.addEventListener( "load",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener( "orientationchange",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
}

$(document).ready(function(){

	// Show Dropdown on click
	showDropdown();

	// Placeholders for old browsers
	placeholderOldBrowsers();

    // Global Fade (by @LordSlop)
    fadePopy();

});


/**
 * Global Fade (by @LordSlop)
 */
function fadePopy() {
	// need to put 'display:none;' on the following elements in CSS
	var elementsToFade = $(".l-header, .l-footer, .l-grid, .main");

	elementsToFade.fadeIn(1000);
	$(".l-header a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		elementsToFade.fadeOut(500, redirectPage);
	});
	function redirectPage() {
		window.location = linkLocation;
	}
}

/**
 * Show Dropdown on click
 */
function showDropdown() {
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
}

/**
 * Alert module
 */
function showAlert(message, time) {
	$('body').prepend('<div class="m-alert">' + message + '</div>');
	setTimeout(function() {
       $('.m-alert').hide()
   },5000);
}


/**
 * Placeholders for old browsers
 */
function placeholderOldBrowsers() {
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
}