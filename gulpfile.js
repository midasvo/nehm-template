var path = require("path");
var log = require('fancy-log');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

var tsProject = ts.createProject({
    declaration: true
});

gulp.task('default', ['jshint', 'watch', 'start']);

gulp.task('jshint', function() {
    log("Running JSHint...");
    return gulp.src('backend/API/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    log("Watching for changes...");
    gulp.watch('backend/API/**/*.ts', ['compiletypescript', 'jshint']);
});

gulp.task('compiletypescript', function() {
    return gulp.src('backend/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});

gulp.task('start', function () {
    nodemon({
      script: 'dist/API/RunAPI.js'
    , ext: 'js html'
    , env: { 'NODE_ENV': 'development' }
    })
})