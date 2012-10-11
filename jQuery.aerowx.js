(function( $ ){

  $.fn.aerowx = function( options ) {  

    // Create some defaults, extending them with any options that were provided
	var defaults = {
  		station: 'KAZO'
 	 };
	var settings = $.extend(defaults, options);

    this.each(function() {        
		$.ajax({
			type: "GET",
			url: 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20from%20xml%20WHERE%20url%3D%20%22http%3A%2F%2Fweather.aero%2Fdataserver_current%2Fhttpparam%3Fdatasource%3Dmetars%26requestType%3Dretrieve%26format%3Dxml%26mostRecentForEachStation%3Dconstraint%26hoursBeforeNow%3D1.25%26stationString%3D'+ settings.station +'%22',
			dataType: "xml",
			success: parseXML
		  });
	  function parseXML(xml){
	  	//stub
	  }
		// Aerowx plugin code here
		$('<div class="station"/>')
		.appendTo(this)
		.hide()
		.text(settings.station + '<br/>' )
		.css({
			backgroundColor:'#fefefe',
			border: '1px solid #ccc',
			'border-radius': 8,
			height:200,
			width:150
		})
		.fadeIn(450);
    });
	return this;
  };
})( jQuery );