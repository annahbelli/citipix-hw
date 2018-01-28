// grab input

var input = $('#city-type');

// grab submit

var submit = $('#submit-btn');

//listen for click on submit

$(submit).click(changeThePhoto); 

function changeThePhoto(event){
  event.preventDefault();
  console.log(event);

 // check the value of the input
    var value = $(input).val();
    value = value.toLowerCase().trim();  

 // nyc options

	if(value === 'new york city' || value === 'nyc' ||  value === 'new york') {
		$('body').removeClass();
		$('body').addClass('nyc');
	} 
// sf options
	else if(value === 'san francisco' || value === 'sf' || value === 'bay area') {
		$('body').removeClass();
		$('body').addClass('sf');
	}
// la options
	else if(value === 'los angeles' || value === 'la' || value === 'lax') {
		$('body').removeClass();
		$('body').addClass('la');
	}
// austin options
	else if(value === 'austin' || value === 'atx') {
		$('body').removeClass();
		$('body').addClass('austin');
	}
// sydney options
	else if(value === 'sydney' || value === 'syd') {
		$('body').removeClass();
		$('body').addClass('sydney');
	}
// else
	else {
		$('body').removeClass();
	}

};





  // - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
  // - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
  // - "Austin" or "ATX" make the background of the page austin.jpg
  // - "Sydney" or "SYD" make the background of the page sydney.jpg