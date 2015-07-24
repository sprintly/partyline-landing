var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var csso = require('gulp-csso');
var rename = require('gulp-rename');

gulp.task('less', function() {
  gulp.src('less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'));
});

gulp.task('cssmin', function() {
  gulp.src('css/main.css')
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('public/less/**/*.less', ['less']);
});

gulp.task('css', ['less', 'cssmin']);

gulp.task('default', ['less', 'watch']);
