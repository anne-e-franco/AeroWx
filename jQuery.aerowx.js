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
			url: 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20from%20xml%20WHERE%20url%3D%20%22http%3A%2F%2Fweather.aero%2Fdataserver_current%2Fhttpparam%3Fdatasource%3Dmetars%26requestType%3Dretrieve%26format%3Dxml%26mostRecentForEachStation%3Dconstraint%26hoursBeforeNow%3D3%26stationString%3D'+ settings.station +'%22',
			dataType: "xml",
			success: function(xml) {
	        	console.log("Success - METAR Data retrieved from ADDS service");
	        	$('<div id="'+settings.station+'"class="station"/>').appendTo('body');
	        	$("<ul></ul>").appendTo('#'+settings.station);
//	        	$(xml).find('METAR').each(function(){
		
			// Station ID
				$("<li></li>").html("Station ID: " + settings.station).appendTo('#'+settings.station);
			
			// Time
	  			var time = $(xml).find('observation_time').text();
				$("<li></li>").html("Observation Time: " + time).appendTo('#'+settings.station);
			
			// Flight Rules 
	  			var rule = $(xml).find('flight_category').text();
				$("<li></li>").html("Flight Rule: " + rule).appendTo('#'+settings.station);
			
			// Temperature (degrees celcius)
				var temp = $(xml).find('temp_c').text();
				$("<li></li>").html("Temp: " + temp).appendTo('#'+settings.station);
	  		
	  		// Wind Direction
	  			var windDir = $(xml).find('wind_dir_degrees').text();
				$("<li></li>").html("Wind Direction: " + windDir).appendTo('#'+settings.station);
			
			// Wind Speed 
	  			var windSpd = $(xml).find('wind_speed_kt').text();
				$("<li></li>").html("Wind Speed: " + windSpd).appendTo('#'+settings.station);
 			
 			// Visibility 
	  			var visibility = $(xml).find('visibility_statute_mi').text();
				$("<li></li>").html("Visibility: " + visibility).appendTo('#'+settings.station);
  			
//	  			})
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus); //error logging
			}
		  });

	  }
		
    });
	return this;
  };
})( jQuery );