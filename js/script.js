
  /* -------------------
  Preloader
  ---------------------*/
  jQuery(document).ready(function() {
    jQuery('.sk-circle').fadeOut('slow');
    jQuery('#preloader').delay(350).fadeOut('slow'); 

    var path = window.location.pathname.split('/');
    path = path[path.length-1];
    if (path !== undefined) {
      jQuery("ul.sf-menu")
        .find("a[href$='" + path + "']") // gets all links that match the href
        .parents('li')  // gets all list items that are ancestors of the link
        .children('a')  // walks down one level from all selected li's
        .addClass('active');
    }

    jQuery('.navbar').each(function(){
        if(jQuery(this).hasClass('navbar-fixed-top')){
            jQuery('.navbar-fixed-top .region-navigation').stickUp();
        }
    });
  });
