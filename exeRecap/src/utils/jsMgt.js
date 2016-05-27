let compressor = require('node-minify');

function JsMgt() {
    function render(page, cb) {
        new compressor.minify({
            type: 'uglifyjs',
            fileIn: page.js,
            fileOut: `public/scripts/${page.name}.min.js`,
            callback: function(err, min) {
                console.log('uglifyjs');
                if (err) console.log(err);
                cb();
            }
        });
    }
    let that = {};
    that.render = render;
    return that;
}
module.exports = JsMgt;