var CrijApp = {

};


$(document).bind("mobileinit", function(){
    $.mobile.loadPage( "http//crij-haute-normandie.org", {
        pageContainer: $('appContent')
    });
});