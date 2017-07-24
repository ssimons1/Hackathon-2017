
var sitters = {'viv': { 
					'full_time': 'Yes', 
					'cancelation': 'Flexible', 
					'potty_frequency': '2-4',
					'puppes_under_one': 'No', 
					'home_type':'Apartment', 
					'yard':'fenced', 
					'smoking': 'No', 
					'children': 'Yes', 
					'cats_at_home': 'Yes', 
					'caged_pets': 'Yes', 
					'dogs_on_furniture': 'No', 
					'dogs_on_bed': 'Yes',
					'price': '25$/h',
					'rating': 5,
					'lat' : 32.109333,
					'lng' : 34.956499,
					'phone_no': '+972 50 5860918'
						}, 
			'yaron': { 
					'full_time': 'No', 
					'cancelation': 'Moderate', 
					'potty_frequency': '0-2',
					'puppes_under_one': 'Yes', 
					'home_type':'Farm', 
					'yard':'unfenced', 
					'smoking': 'No', 
					'children': 'Yes', 
					'cats_at_home': 'Yes', 
					'caged_pets': 'No', 
					'dogs_on_furniture': 'No', 
					'dogs_on_bed': 'Yes',
					'price': '23$/h',
					'rating': 4,
					'lat' : 32.209333,
					'lng' : 34.856499,
					'phone_no': '+972 50 5320918'
						}, 
			 'ana': {
					'full_time': 'Yes', 
					'cancelation': 'Moderate', 
					'potty_frequency': '4-6',
					'puppes_under_one': 'No', 
					'home_type':'House', 
					'yard':'Non', 
					'smoking': 'Yes', 
					'children': 'No', 
					'cats_at_home': 'Yes', 
					'caged_pets': 'No', 
					'dogs_on_furniture': 'No', 
					'dogs_on_bed': 'Yes',
					'price': '21$/h',
					'rating': 3,
					'lat' : 30.109333,
					'lng' : 34.956499,
					'phone_no': '+972 50 5860218'
						}, 
			 'sydney': {
					'full_time': 'No', 
					'cancelation': 'Strict', 
					'potty_frequency': '8+',
					'puppes_under_one': 'Yes', 
					'home_type':'Apartment', 
					'yard':'fenced', 
					'smoking': 'No', 
					'children': 'Yes', 
					'cats_at_home': 'Yes', 
					'caged_pets': 'Yes', 
					'dogs_on_furniture': 'No', 
					'dogs_on_bed': 'No',
					'price': '29$/h',
					'rating': 4,
					'lat' : 32.0690247,
					'lng' : 34.7767518,
					'phone_no': '+972 21 5140918'
						}, 
			 'sylvie': {
					'full_time': 'No', 
					'cancelation': 'Flexible', 
					'potty_frequency': '2-4',
					'puppes_under_one': 'No', 
					'home_type':'house', 
					'yard':'unfenced', 
					'smoking': 'Yes', 
					'children': 'No', 
					'cats_at_home': 'Yes', 
					'caged_pets': 'Yes', 
					'dogs_on_furniture': 'No', 
					'dogs_on_bed': 'No',
					'price': '27$/h',
					'rating': 4,
					'lat' : 32.072334,
					'lng' : 34.7816442,
					'phone_no': '+972 51 5869918'
						}, 
			'alper': {
					'full_time': 'Yes', 
					'cancelation': 'Flexible', 
					'potty_frequency': '2-4',
					'puppes_under_one': 'Yes', 
					'home_type':'house', 
					'yard':'non', 
					'smoking': 'No', 
					'children': 'No', 
					'cats_at_home': 'Yes', 
					'caged_pets': 'No', 
					'dogs_on_furniture': 'No', 
					'dogs_on_bed': 'No',
					'price': '24$/h',
					'rating': 5,
					'lat' : 32.065752,
					'lng' : 34.7753353,
					'phone_no': '+972 60 5860919'
						}, 
			'rifat': {
					'full_time': 'Yes', 
					'cancelation': 'Flexible', 
					'potty_frequency': '0-2',
					'puppes_under_one': 'No', 
					'home_type':'apartment', 
					'yard':'non', 
					'smoking': 'Yes', 
					'children': 'No', 
					'cats_at_home': 'No', 
					'caged_pets': 'No', 
					'dogs_on_furniture': 'No', 
					'dogs_on_bed': 'Yes',
					'price': '25$/h',
					'rating': 3,
					'lat' : 32.061493,
					'lng' : 34.7733403,
					'phone_no': '+972 50 5920918'
				}
				}

var image = 'images/marker.png';

function initMap() {
	var telAviv = {lat: 32.109333, lng: 34.855499};
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 11,
    	center: telAviv
    });

	$('.back').on('click', function() {
    map.setZoom(11);
    map.setCenter(telAviv); 
    });

    $('.sitter').on('click', function() {
    var theName = $(this).attr('name');
    var latt = sitters[theName].lat;
    var lngg = sitters[theName].lng;
    console.log(latt);
    console.log(lngg);
    map.setZoom(16);
    map.setCenter({lat: latt, lng: lngg}); 

  });

  Object.keys(sitters).forEach(function(key){
  	var lat = sitters[key].lat;
  	var lng = sitters[key].lng;

  	var marker = new google.maps.Marker({
    	position: {lat: lat, lng: lng},
    	map: map,
    	icon: image
    })
  	// var infowindow = new google.maps.InfoWindow({
   //  content: "contentString"
  // });

    //  marker.addListener('click', function() {
   //  	infowindow.open(map, marker);
  //  });
 })
}




function dogSitters() {
	for (t = 0; t<Object.keys(sitters).length ; t++) {

		var person = Object.keys(sitters)[t];

    	var latt = sitters[person].lat;
    	var lngg = sitters[person].lng;

		
		console.log(person);

		var mainDiv = $('<div></div>').addClass('col-md-12 sitter').attr('name',Object.keys(sitters)[t]);
		var row = $('<div class="row"></div>');
		var paymentDiv = $('<h4></h4>').addClass('payment').css('display','inline-block');

		$(paymentDiv).text(sitters[person].price); // Will be retrieved from the object

		var ratingSpan = $('<span></span>').addClass('ratings');

		// $('.sidebar').append(mainDiv);
		$(mainDiv).append(row);
		$(row).append(paymentDiv);
		$(row).append(ratingSpan);

		var actualRating; // Will be retrieved from the object
		var emptyOnes = 5 - sitters[person].rating;

			for (i = 0; i < sitters[person].rating ; i++) { // instead of 5, there will be 'actualRating'
				var fullStar = $('<i></i>').addClass('fa fa-star');
				$(ratingSpan).append(fullStar);
			};

			for (i = 0; i < emptyOnes ; i++) { // instead of 5, there will be 'actualRating'
				var emptyStar = $('<i></i>').addClass('fa fa-star-o');
				$(ratingSpan).append(emptyStar);
			};

			

		var sidebarPic = $('<img/>').attr('src','images/'+Object.keys(sitters)[t]+'.jpg').addClass('walkerThumb');

		var row2 = $('<div class="row pdetails"></row>');
		var firstName = $('<span class="firstname">'+Object.keys(sitters)[t]+'</span>');
		$(row2).append('<button style="display:none" class="btn back">Back to the list!</button>')
		$(row2).append(firstName);
		var fullTime = $('<span style="display:inline-block">Full Time: <strong>'+ sitters[person].full_time +'</strong></span>')
		$(row2).append(fullTime);
		$(mainDiv).append(row2);


		$(mainDiv).append(sidebarPic);
		var aboutText = $('<span></span>').addClass('walkerAbout');
		var ul = $('<ul class="right"></ul>');
				var li = $('<li>Cancelation: '+sitters[person].cancelation+'</li>');
				var li2 = $('<li>Puppies under age 1: '+sitters[person].puppes_under_one+'</li>');
				var li3 = $('<li>Home Type: '+sitters[person].home_type+'</li>');
				var li4 = $('<li>Yard: '+sitters[person].yard+'</li>');
				var li5 = $('<li>Smoking: '+sitters[person].smoking+'</li>');
				var li6 = $('<li>Children: '+sitters[person].children+'</li>');
				var li7 = $('<li>Cats at home: '+sitters[person].cats_at_home+'</li>');

		$(ul).append(li);
		$(ul).append(li2);
		$(ul).append(li3);
		$(ul).append(li4);
		$(ul).append(li5);
		$(ul).append(li6);
		$(ul).append(li7);

		var textHolder = $('<div></div>').addClass('massiveHolder');
		$(aboutText).text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra nulla quis libero mollis condimentum id nec diam.')
		$(mainDiv).append(textHolder);
		$(textHolder).append(aboutText);
		$(textHolder).append(ul);

		var contactNo = $('<div style="display:none"><span>Phone no: '+sitters[person].phone_no+'</span></div>').addClass('contactno');
		$(textHolder).append(contactNo);
		$('.sidebar').append(mainDiv);
	}	
}

dogSitters();



$('.sitter').on('click', function(){
	$('.sitter').not(this).fadeOut();
	$('.sitter').removeClass('active');
	$(this).addClass('active');
	$(this).addClass('bigger');
	$(this).parent().css('width','95%');
	$(this).parent().css('height','90%');
	$('.mapDiv').css('width','95%');
	$('.back').fadeIn();
	google.maps.event.trigger(map, 'resize');
	$('.contactno').fadeIn();
	
});


$(document).on('click', ".back", function () {
	$('.sitter').removeClass('active');
	$('.sitter').removeClass('bigger');
	$('.mapDiv').css('width','');
	$('.sidebar').css('width','');
	$('.sidebar').css('height','');
	$('.back').fadeOut();
	$('.sitter').fadeIn();
	$('.contactno').fadeOut();
});

// $(document).on('click', ".asd", function () {
// 	$(this).removeClass('active');
// 	$('.sitter').fadeIn();
// });



