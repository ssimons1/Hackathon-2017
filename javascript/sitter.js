$('#submitSitter').on('click', function(){
	$(document).scrollTop( 0 );
	$('body').css('overflow', 'hidden')
	$('.pendingRequest').fadeIn();

setTimeout(function(){ window.location.href = './owner.html' }, 3000);


})