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

gulp.task('bower_components', function() {
    return gulp.src('*bower_components/*').pipe(gulp.dest('build'));
});

gulp.task('html', function() {
    return gulp.src([
        '*.html',
        '*donation-thanks/*.html',
        '*help/*.html'
    ])
    .pipe(htmlMinifier({
        collapseWhitespace: true,
        minifyJS: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
    return gulp.src(['css/style.less'])
        .pipe(less())
        .pipe(unCSS({
            html: ['**/*.html']
        }))
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('images', function() {
    return gulp.src('*img/**/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['bower_components', 'styles', 'html', 'images']);