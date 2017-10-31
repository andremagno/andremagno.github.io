import $ from 'jquery';
import whatInput from 'what-input';

global.jQuery = require('jquery')
window.jQuery = $;

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
require('./lib/jquery.visible.min.js');

$(document).foundation();

$(document).ready(function(){
	
	$(".horizontal").on( 'scroll', function(){
		var i=0;
		$('.horizontal .project__link').each(function(){	
			// Is this element visible onscreen?
			var visible = $(this).visible();
			
			// Set the visible status into the span.
			$(this).toggleClass('active',visible);			

			if ($(this).is(':first-child')) {
		        i=0;
		    }
		    i++;
			$('.graph .bar:nth-child('+i+')').toggleClass('active',visible);
		});
	});

});
