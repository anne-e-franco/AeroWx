(function($){
	$.fn.aerowx = function(options) {  
	var defaults = {
			station: 'KAZO'
		}
	var	settings = $.extend({}, defaults, options); 

	$('<div class="wxstation">')
	.appendTo(this)
	.hide()
	.text(station)
	.fadeIn(350);
	
})(jQuery);