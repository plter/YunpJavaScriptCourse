const gulp = require("gulp");
const babel = require("gulp-babel");

module.exports.default = function (cb) {
    gulp.src("main.js").pipe(babel()).pipe(gulp.dest("build/"));
    
    cb();
}