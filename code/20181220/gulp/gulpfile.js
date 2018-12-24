const gulp = require("gulp");
var uglify = require('gulp-uglify');
var pump = require('pump');
const concat = require("gulp-concat");

gulp.task("default", function (cb) {
    // gulp.src(["src/hello.js", "src/main.js"]).pipe(gulp.dest("dist"));
    // cb();

    pump([
        gulp.src(["src/hello.js", "src/main.js"]),
        concat("all.min.js"),
        uglify(),
        gulp.dest("dist")
    ], cb);
});