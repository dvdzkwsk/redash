var gulp    = require('gulp'),
    config  = require('./config/gulp'),
    plugins = require('gulp-load-plugins')({
      scope: ['devDependencies']
    }),
    EXIT_ON_FAIL = false;


gulp.task('build', function () {
  EXIT_ON_FAIL = true;
  gulp.start('compile');
});

gulp.task('test', function () {
  gulp.src('./tests/*', { read : false })
    .pipe(plugins.mocha());
});

gulp.task('compile', ['lint'], function () {
  gulp.src(config.src)
    .pipe(plugins.plumber())
    .pipe(plugins.uglify({
      global_defs: config.js.globals,
      preserveComments: 'some'
    }))
    .pipe(plugins.concat(config.name + '.min.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('lint', function () {
  var stream = gulp.src(config.src + '.js')
    .pipe(plugins.jshint(config.lint))
    .pipe(plugins.jshint.reporter('jshint-stylish'));

  if (EXIT_ON_FAIL) {
    stream.pipe(plugins.jshint.reporter('fail'));
  }
});