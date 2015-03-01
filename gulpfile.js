'use strict';

const gulp    = require('gulp');
const config  = require('./config/gulp');
const plugins = require('gulp-load-plugins')({
  scope: ['devDependencies']
});
const runSequence = require('run-sequence');

// --------------------------------------
gulp.task('default', ['lint'], function () {
  runSequence('compile', 'test');
});

gulp.task('compile', function (cb) {

  // Copy to es6 folder for convenience.
  // TODO: create minified es6 copy when uglify supports it
  compile('./index.js')
    .pipe(gulp.dest('./es6'));

  // ES5-ified versions
  compile('./index.js', { babel : true })
    .pipe(gulp.dest('./es5'));

  compile('./index.js', { babel : true, minify : true })
    .pipe(gulp.dest('./es5/min'));

  setTimeout(cb, 1000); // hacky...
});

function compile (source, opts) {
  let stream = gulp.src(source)
    .pipe(plugins.plumber());

  opts = opts || {};
  if (opts.babel) stream.pipe(plugins.babel());
  if (opts.minify) stream.pipe(plugins.uglify({
    global_defs      : config.js.globals,
    preserveComments : 'some'
  }));

  return stream;
}

gulp.task('lint', function (cb) {
  gulp.src('./index.js')
    .pipe(plugins.jshint(config.lint))
    .pipe(plugins.jshint.reporter('jshint-stylish'));

  setTimeout(cb, 1000); // hacky...
});

gulp.task('test', function () {
  gulp.src('./tests/*', { read : false })
    .pipe(plugins.mocha());
});
