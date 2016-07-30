'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['stylesheets'], function() {
	browserSync.init({
		server: "./public",
		port: 3010
	});
	gulp.watch('./frontend/stylesheets/**/*.scss', ['stylesheets']);
});

gulp.task('stylesheets', function () {
  return gulp.src('./frontend/stylesheets/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./public/css'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
