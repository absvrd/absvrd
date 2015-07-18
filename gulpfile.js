var gulp = require('gulp');
var bower = require('gulp-bower');



// get dependencies

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/assets/libs'));
});

