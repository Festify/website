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

gulp.task('downloads', function() {
    return gulp.src('downloads/**/*')
    .pipe(gulp.dest(path.join(dist, 'downloads')));
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

gulp.task('images', function() {
    return gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(path.join(dist, 'img')));
});

gulp.task('assets', function() {
    return gulp.src([
        'fonts/**/*',
        'js/**/*',
        'bower_components/**/*',
        'favicon.ico'
    ], { base: './' })
    .pipe(gulp.dest(dist));
});

gulp.task('build', ['styles', 'pages', 'images', 'assets', 'downloads']);

gulp.task('default', ['build']);
