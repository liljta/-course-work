var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var rigger = require('gulp-rigger');

var config = {
    path: {
        scss: './src/scss/**/*.scss',
        html: './src/*.html',
        js: './src/js/**/*.js',
    },
    output: {
        cssName: 'styles.min.css',
        cssPath: './css',
        htmlPath: './',
        jsName: 'common.min.js',
        jsPath: './js',
    }
};

gulp.task('html:build', function () {
    gulp.src(config.path.html)
        .pipe(rigger())
        .pipe(gulp.dest(config.output.htmlPath));
});

gulp.task('js:build', function () {
    gulp.src(config.path.js)
        .pipe(rigger())
        .pipe(concat(config.output.jsName))
        .pipe(gulp.dest(config.output.jsPath));
});

gulp.task('scss', function() {
    return gulp.src(config.path.scss)
        .pipe(sass())
        //.pipe(cleanCss())
        .pipe(concat(config.output.cssName))
        .pipe(gulp.dest(config.output.cssPath));
});

gulp.task('default', ['scss', 'html:build', 'js:build']);
