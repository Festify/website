/**
 * Created by leobernard on 17/11/2016.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var unCSS = require('gulp-uncss');

gulp.task('default', function() {
    gulp.src(['css/style.less'])
        .pipe(less())
        .pipe(unCSS({
            html: ['**/*.html']
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'))
});