import $ from 'jquery';
import whatInput from 'what-input';

global.jQuery = require('jquery')
window.jQuery = $;

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function(){
	$('a.work__reveal').click(function(){
		var url = $(this).find('img')[0].src;
		var img = $(this).html();
		if (Foundation.MediaQuery.atLeast('medium')) {
			$('#element').foundation('open');
			$('.work__modal-img').html(img);		 
		} else {
			window.open(url,'_blank','',''); 
		}		
	});
	$('ul.work__list li').each(function(){
		// Get the content
		var str = $(this).html();
		// Set the regex string
		var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig
		// Replace plain text links by hyperlinks
		var replaced_text = str.replace(regex, "<a href='$1' target='_blank'>$1</a>");
		// Echo link
		$(this).html(replaced_text);
	});
});