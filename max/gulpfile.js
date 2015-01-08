'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var compass = require('gulp-compass'); //OSX Yosemiteでgulp-compassが動かない可能性あり。その場合はgulp-ruby-sassで代用
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var iconfont = require('gulp-iconfont');
var spritesmith = require('gulp.spritesmith');
var exec = require('child_process').exec; //required gulp-shell

//css
gulp.task('task-css-debug', function() {
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
gulp.task('task-css-release', function() {
	gulp.src('resource/scss/*.scss')
		.pipe(plumber({errorHandler:notify.onError('<%= error.message %>')}))
		.pipe(compass({
			css: 'deploy/assets/css/',
			sass: 'resource/scss/',
			comments: true,
			style: 'compressed' //:expanded or :nested or :compact or :compressed
		}))
		.pipe(notify('CSS Compiled: <%= file.relative %>'));
});

//kss
var config = {
	'path': {
		'scss': './resource/scss',
		'styleguide': './deploy/styleguide',
		'styleguidetemplate': './resource/styleguide-template'
	}
};
gulp.task('task-kss',function(){
	return exec('kss-node ' + config.path.scss + ' ' + config.path.styleguide + ' --sass ' + config.path.scss + ' --template ' + config.path.styleguidetemplate);
});

//sprite
gulp.task('task-sprite', function() {
	var spriteData = gulp.src('resource/img/sprite/*.png')
		.pipe(spritesmith({
			padding: 10,
			imgName: 'sprite@2x.png',
			cssName: '_sprite.scss',
			imgPath: '/assets/img/sprite@2x.png',
			cssFormat: 'scss',
			cssVarmap: function(sprite) {
				sprite.mname = 'spite-' + sprite.name;
			}
		}));
		spriteData.img.pipe(gulp.dest('deploy/assets/img'));
		spriteData.css.pipe(gulp.dest('resource/scss/'));
});

//[js] concat - jshint - uglify
gulp.task('task-js-debug', function(cb) {
	runSequence('task-jsconcat','task-jshint','task-jscopy', cb);
});

gulp.task('task-js-release', function(cb) {
	runSequence('task-jsconcat','task-jshint','task-jsuglify', cb);
});

gulp.task('task-jsconcat', function() {
	gulp.src([
		'resource/js/head/libs/modernizr.js',
		'resource/js/head/mine/analytics.js'
		])
	.pipe(concat('head.js'))
	.pipe(gulp.dest('resource/js'));
	gulp.src([
		'resource/js/main/libs/jquery-1.11.1.min.js',
		'resource/js/main/libs/jquery.easing.1.3.js',
		'resource/js/main/libs/jQueryAutoHeight.js',
		'resource/js/main/mine/util.js'
		])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('resource/js'));
});

gulp.task('task-jshint', function () {
	return gulp.src([
			'resource/js/head/mine/**.js',
			'resource/js/main/mine/**.js'
		])
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('task-jscopy', function() {
	return gulp.src('resource/js/*.js')
		.pipe(gulp.dest('deploy/assets/js'));
});

gulp.task('task-jsuglify', function() {
	return gulp.src('resource/js/*.js')
		.pipe(uglify({
			preserveComments: 'some'
		}))
		.pipe(gulp.dest('deploy/assets/js'));
});

//imagemin
gulp.task('task-imagemin', function() {
	gulp.src(['deploy/assets/img/*.{png,jpg,gif}'])
		.pipe(imagemin())
		.pipe(gulp.dest('deploy/assets/img/'));
});

//iconfont
gulp.task('task-iconfont', function(){
	gulp.src(['resource/svg/*.svg'])
	.pipe(iconfont({
		fontName: 'myfont',
		appendCodepoints: true
	}))
	.pipe(gulp.dest('deploy/assets/fonts/'));
});

//webserver
gulp.task('task-webserver', function() {
	gulp.src('deploy')
	.pipe(webserver({
		livereload: true,
		port: 8500
	}));
});

//watch
gulp.task('task-watch', function () {
	gulp.watch('resource/scss/*.scss', ['task-css-debug']);
	gulp.watch('resource/js/**/*.js',['task-js-debug']);
});

//Tasks
gulp.task('default', ['task-css-debug','task-js-debug','task-webserver','task-watch']);
gulp.task('sprite', ['task-sprite']);
gulp.task('iconfont', ['task-iconfont']);
gulp.task('styleguide', ['task-css-debug','task-kss','task-watch']);
gulp.task('release', ['task-css-release','task-js-release','task-imagemin']);