'use strict';

import path from "path";
import gulp from "gulp";
import uglify from "gulp-uglify";
import autoprefixer from "gulp-autoprefixer";
import header from "gulp-header";
import gutil from "gulp-util";
import sourcemaps from "gulp-sourcemaps";
import connect from "gulp-connect";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import pug from "gulp-pug";
import sass from "gulp-sass";
import pkg from "./package.json";

const appName = 'duocoder';

const outputPaths = {
  css: './public',
  js: './public',
  pug: './public',
  sourceMaps: './'
};

const banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

// Build Directories
const cssDir = path.join(__dirname, 'css', '**', '*.scss');
const jsDir = path.join(__dirname, 'js', '**', '*.js');
const pugDir = path.join(__dirname, 'pug', '**', '*.pug');

function onError(err) {
  console.log(err);
  this.emit('end');
}

// CSS
gulp.task('build-css', () => {
  gutil.log('\n\nBuild CSS Paths: \n', cssDir, '\n\n');

  return gulp.src(cssDir)
    .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(header(banner, {pkg}))
    .pipe(gulp.dest(outputPaths.css))
    .pipe(connect.reload());
});

// JS
gulp.task('build-js', () => {
  gutil.log('\n\nBuild JS Paths: \n', jsDir, '\n\n');

  return browserify({
    entries: './js/index.js',
    debug: true
  })
    .transform('babelify', {
      presets: ['es2015']
    })
    .bundle()
    .on('error', onError)
    .pipe(source(`${appName}.js`))
    .pipe(header(banner, {pkg}))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write(outputPaths.sourceMaps))
    .pipe(gulp.dest(outputPaths.js))
    .pipe(connect.reload());

});

// PUG
gulp.task('build-pug', () => {
  gutil.log('\n\nBuild pug Paths: \n', pugDir, '\n\n');

  var PUG_LOCALS = {title: pkg.name};

  return gulp.src(pugDir)
    .pipe(pug({locals: PUG_LOCALS}).on('error', onError))
    .pipe(gulp.dest(outputPaths.pug))
    .pipe(connect.reload());
});

// Build
gulp.task('build', ['build-css', 'build-js', 'build-pug']);

// Server
gulp.task('connect', function () {
  connect.server({
    port: process.env.PORT || 8080,
    livereload: true
  });
});

// Watch
gulp.task('watch', function () {
  gulp.watch(cssDir, ['build-css']);
  gulp.watch(jsDir, ['build-js']);
  gulp.watch(pugDir, ['build-pug']);
});

// Default
gulp.task('default', ['connect', 'watch']);