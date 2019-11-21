const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();

// bundles js files
function build() {
  return browserify({
    extensions: ['.js'],
    debug: true,
    fullPaths: true,
    entries: './src/js/index.js'
  })
    .bundle()
    .on('error', function(err) {
      console.log('Error : ' + err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
}

// watches for changes
function watchTask() {
  browserSync.init({
    server: './',
    open: 'external',
    port: 9000
  });
  gulp.watch('./src/js/**/*.js', build);
  gulp.watch(['./index.html', './src/**/*.*']).on('change', browserSync.reload);
}

let buildwatch = gulp.series(build, watchTask);

exports.build = build;
exports.watch = watchTask;
exports.default = buildwatch;
