$(document).ready(function() {
	$('#add').click(function() {
	$('.list').prepend('<li>' + $('#item').val() + '</li>');
});
	$('.list').on('click', 'li', function(e) {
		$(this).css('text-decoration','line-through');
	});
});
