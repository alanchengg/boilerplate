var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    scss = require('gulp-scss'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('lint', function() {
  gulp.src('./source/javascripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('css', function() {

  var postcss = require('gulp-postcss');
  var sourcemaps = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer');

  return gulp.src('./source/stylesheets/*.scss')
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions', '> 1%'] })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

// Minify images. compresss them to save a bit of data
gulp.task('img-minify', function() {
  return gulp.src('./source/images/**')
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true,
      multipass: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/images'));
});