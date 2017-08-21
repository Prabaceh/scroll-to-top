$(document).ready(function(){

	$("#to-top").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#to-top').fadeIn();
			} else {
				$('#to-top').fadeOut();
			}
		});
		
		$('#to-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});