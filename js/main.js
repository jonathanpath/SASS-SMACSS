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
	
});
