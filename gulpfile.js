var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');

gulp.task('css', function() {
  return gulp.src('assets/css/src/main.css')
    .pipe(postcss([
      tailwindcss('tailwind.js'),
      require('autoprefixer')
    ]))
    .pipe(gulp.dest('assets/css/dist'));
});