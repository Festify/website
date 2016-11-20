/**
 * Created by leobernard on 17/11/2016.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-clean-css');
var unCSS = require('gulp-uncss');
var htmlMinifier = require('gulp-html-minifier');
var imagemin = require('gulp-imagemin');
var del = require('del');
const path = require('path');

const dist = 'build';

gulp.task('pages', function() {
    return gulp.src('pages/**/*.html')
    .pipe(htmlMinifier({
        collapseWhitespace: true,
        minifyJS: true
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('styles', function() {
    return gulp.src(['css/style.less'])
        .pipe(less())
        .pipe(unCSS({
            html: ['pages/**/*.html']
        }))
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest(path.join(dist, 'css')));
});

gulp.task('assets', function() {
    return gulp.src([
        'fonts/**/*',
        'img/**/*',
        'js/**/*',
        'bower_components/**/*',
        'favicon.ico'
    ], { base: './' })
    .pipe(gulp.dest(dist));
});

gulp.task('build', ['styles', 'pages', 'assets']);

gulp.task('default', ['build']);
