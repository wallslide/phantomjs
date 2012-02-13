function renderFdOut(fdOut, url, fileType, callback) {
    var page = require('webpage').create();
    var size = { width: 800, height : 800 };
    page.viewportSize = size;
    page.clipRect = size;
    page.settings.userAgent = "Phantom.js bot";

    page.open(url, function(status){
        var result;
        if ( status !== "success") {
            result = false;
        } else {
            result = page.renderFD(fdOut, fileType);
        }
        delete page;
        callback(result);
    });
}

if ( phantom.args.length  != 3 )
    console.log("Usage: phantomjs renderfd.js fileDescriptorNumber urlToRender fileType");


renderFdOut(phantom.args[0], phantom.args[1], phantom.args[2], function(result){
    phantom.exit();
});