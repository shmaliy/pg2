var CrijApp = {

};


$(document).on("mobileinit", function() {

    alert('mobileinit');

    $.mobile.loadPage( "http//crij-haute-normandie.org", {
        pageContainer: $('appContent')
    });
});