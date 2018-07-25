(function (jQuery) {
  // we can now rely on jQuery within the safety of our "bodyguard" function
  jQuery(document).ready(function () {
    jQuery(function () {
      var includes = jQuery('[data-include]');
      jQuery.each(includes, function () {
        var file = 'views/' + jQuery(this).data('include') + '.html';
        jQuery(this).load(file);
      });
    });
  });
})(jQuery);