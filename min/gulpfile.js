'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var compass = require('gulp-compass'); //OSX Yosemiteでgulp-compassが動かない可能性あり。その場合はgulp-ruby-sassで代用
var webserver = require('gulp-webserver');

gulp.task('compass', function() {
	gulp.src('resource/scss/*.scss')
		.pipe(plumber({errorHandler:notify.onError('<%= error.message %>')}))
		.pipe(compass({
			css: 'deploy/assets/css/',
			sass: 'resource/scss/',
			comments: true,
			style: 'expanded' //:expanded or :nested or :compact or :compressed
		}))
		.pipe(notify('CSS Compiled: <%= file.relative %>'));
});

gulp.task('webserver', function() {
	gulp.src('deploy')
	.pipe(webserver({
		livereload: true,
		port: 8500
	}));
});

gulp.task('watch', function () {
	gulp.watch('resource/scss/**/*.scss', ['compass']);
});

gulp.task('default', ['compass','webserver','watch']);