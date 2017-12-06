$(document).ready(function() {
	/**
	 Custom highlighting
	 */
	var target;

	$('tr').hover(function() {
		if (! ($(this).children('th').length > 0)) {
			$(this).addClass('shadow-drop-lr');
			$(this).css({'cursor':'pointer'});
			var attribute = $(this).find('td:first-child').text();

			if (attribute == '200') {
				// Means we are in the "Response Schema" section under
				// an endpoint and we don't need to do highlighing
				return false;
			}

			var codeblock = $(this).parent().parent().prev().prev().children().first().children();

			$(codeblock).each(function(i, obj) {
				if ($(obj).first().hasClass('s2')) {
					var col = $(obj).first();
					attribute = attribute.replace(' ', '');
					attribute = attribute.replace('»', '');

					if ($(col).text() == '"'+attribute+'"') {
						target = $(col);
						$(target).css({
							'color':'#fff',
							'font-weight':'bold',
							'border-bottom':'1px solid #44bfd4'
						});
						return false;
					}
				}
			});
		}
	}, function() {
		$(this).removeClass('shadow-drop-lr');
		$(target).css({'color':'#e6db74', 'font-weight':'normal', 'border-bottom':'none'});
	});
});