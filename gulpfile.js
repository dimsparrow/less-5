'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var twig = require('gulp-twig');
var data = require('gulp-data');
var path = require('path');

gulp.task('serve', ['stylesheets', 'twig'], function() {
	browserSync.init({
		server: "./public",
		port: 3010
	});
	gulp.watch('./frontend/stylesheets/**/*.scss', ['stylesheets']);
	gulp.watch('./views/pages/*.twig', ['twig']);
	gulp.watch('./fixtures/*.json', ['twig']);
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

gulp.task('twig', function () {
	return gulp.src('./views/pages/*.twig')
		.pipe(data(function(file) {
			return require('./fixtures/' + path.basename(file.path, '.twig') + '.json');
		}))
		.pipe(twig())
		.pipe(gulp.dest('./public'));
});