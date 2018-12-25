const gulp = require("gulp");
const closureCompiler = require('google-closure-compiler').gulp();

module.exports.default = function () {
    return gulp.src('main.js')
        .pipe(closureCompiler({
            compilation_level: 'SIMPLE',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: '(function(){\n%output%\n}).call(this)',
            js_output_file: 'output.min.js'
        }, {
            platform: 'javascript'
        }))
        .pipe(gulp.dest('./dist/js'));
};