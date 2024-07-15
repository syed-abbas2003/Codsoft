$(document).on("scroll", function() {
    if ($(document).scrollTop() > 86) {
        $("#navbar").addClass("sticky").css("transition", "background-color 0.5s, padding 0.5s");
        $("#nav-logo").addClass("color-white").css("transition", "color 0.5s");
        $(".nav-custom-link").addClass("color-white").css("transition", "color 0.5s");
        $(".navbar-btn").addClass("nav-btn-icon").css("transition", "color 0.5s");
    } else {
        $("#navbar").removeClass("sticky").css("transition", "background-color 0.5s, padding 0.5s");
        $("#nav-logo").removeClass("color-white").css("transition", "color 0.5s");
        $(".nav-custom-link").removeClass("color-white").css("transition", "color 0.5s");
        $(".navbar-btn").removeClass("nav-btn-icon").css("transition", "color 0.5s");
    }
});
