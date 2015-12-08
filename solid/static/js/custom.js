(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

		
})(jQuery);


$(document).ready(function() {
     if ($.cookie('show-modal') == null) {
         $('#keyguardModal').modal('show');
     } else {
        $('div').remove("#keyguardModal");
     }
 });

$("#stopModal").click(function(){
    $.cookie('show-modal', '1');
});