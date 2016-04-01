$(document).ready(function() {
    $('#add').click(function() {
        $('.list').prepend('<li>' + $('#item').val() + '</li>');
    })
    
    .mousedown(function() {
    	$('.list').on('click', 'li', function(e) {
    		$(this).css('background', 'black');
    	})
    })
});
