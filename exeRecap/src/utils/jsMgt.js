let compressor = require('node-minify');
let fs = require('fs');
let devMode = true;
function JsMgt() {
    function render(page, cb) {
        let file = `public/scripts/${page.name}.min.js`;
        if(devMode){
            new compressor.minify({
                type: 'uglifyjs',
                fileIn: page.js,
                fileOut:file,
                callback: function(err, min) {
                    console.log('uglifyjs');
                    if (err) console.log(err);
                    cb();
                }
            });
        } else {
            fs.stat(file, function(err, stats) {
                if (err) console.log(err);
                if (stats) {
                    cb();
                } else {
                    new compressor.minify({
                        type: 'uglifyjs',
                        fileIn: page.js,
                        fileOut:file,
                        callback: function(err, min) {
                            console.log('uglifyjs');
                            if (err) console.log(err);
                            cb();
                        }
                    });
                }
            });
        }
    }
    let that = {};
    that.render = render;
    return that;
}
module.exports = JsMgt;