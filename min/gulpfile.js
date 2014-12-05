'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var compass = require('gulp-compass');
var webserver = require('gulp-webserver');

gulp.task('compass', function() {
	gulp.src('resource/scss/*.scss')
		.pipe(plumber({errorHandler:notify.onError('<%= error.message %>')}))
		.pipe(compass({
			config_file: './config.rb',
			css: 'deploy/assets/css/',
			sass: 'resource/scss/'
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
	gulp.watch('resource/scss/*.scss', ['compass']);
});

gulp.task('default', ['compass','webserver','watch']);