const gulp = require("gulp");
const webpack = require("webpack-stream");

function copyIndex(cb) {
    gulp.src("index.html").pipe(gulp.dest("build/app/"));
    cb();
}

function copyPackageJson(cb) {
    gulp.src("package.json").pipe(gulp.dest("build/app"));
    cb();
}

function packageJs(cb) {
    gulp.src("src/main.js").pipe(webpack({
        mode: "development",
        output: {
            filename: "bundle.js"
        }
    })).pipe(gulp.dest("build/app"));
    cb();
}

module.exports.default = gulp.series(copyIndex, copyPackageJson, packageJs);
module.exports.watch = function (cb) {
    gulp.watch("src/*.js", module.exports.default);
    cb();
};