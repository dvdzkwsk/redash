var gulp    = require('gulp'),
    config  = require('./config/gulp'),
    plugins = require('gulp-load-plugins')({
      scope: ['devDependencies']
    });

gulp.task('default', function() {
  compile(gulp.src('./' + config.name + '.js'), true);
});

function compile(source, exitOnFail) {
  
  // lint
  var stream = source
    .pipe(plugins.jshint(config.lint))
    .pipe(plugins.jshint.reporter('jshint-stylish'));

  exitOnFail && stream.pipe(plugins.jshint.reporter('fail'));

  // compile/minify
  stream
    .pipe(plugins.plumber())
    .pipe(plugins.uglify({ global_defs: config.js.globals }))
    .pipe(plugins.concat(config.name + '.min.js'))
    .pipe(gulp.dest('./'));
}

gulp.task('test', function() {
  gulp.src('./tests/suite.js', { read: false })
    .pipe(plugins.mocha());
});

gulp.task('watch', function() {
  gulp.src(file).pipe(plugins.watch(function() {
    gulp.start('js'); 
  }));
});