jQuery(document).ready(function() {

    jQuery(".nav_menu_button").click(function() {
        jQuery("nav.w-nav-menu.navigation_drop_down").toggleClass("active")
    })

    jQuery(document).on('click', function(e) {
        if ((jQuery(e.target).closest("nav.w-nav-menu.navigation_drop_down").length === 0) && (jQuery(e.target).closest(".nav_menu_button").length === 0)) {
            jQuery("nav.w-nav-menu.navigation_drop_down").removeClass("active");
        }
    });

});