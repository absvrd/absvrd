var gulp = require('gulp');
var bower = require('gulp-bower');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');
var sass = require('gulp-ruby-sass');
var minify = require('gulp-minify-css');
var watch = require('gulp-watch');
var concat = require('gulp-concat');



// get dependencies

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/assets/libs'));
});



// ===============================================
//        markup for index and views
// ===============================================

// cleans views to get rid of deleted views on copy
gulp.task('kill-views', function() {
  return gulp.src('./public/views', { read: false }) 
    .pipe(rimraf());
});


// copies all of the component views
gulp.task('views', function(){
  return gulp.src('./src/app/components/**/*.html')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./public/views/pages'));
});


// copies just index
gulp.task('index', function(){
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./public/views'));
});


// master task to run them sequentially
gulp.task('views-master', function(callback) {
  runSequence('kill-views',
              ['views', 'index'],
              callback);
});


// ===============================================
//        asset src util
// ===============================================

gulp.task('kill-assets', function() {
  return gulp.src(['./public/css','./public/js'], { read: false }) 
    .pipe(rimraf());
});


// Uses the Ruby SASS library to allow for extending multiple classes
// less performant than gulp-SASS, but the functionality is much 
// better. Multiple class extension key component of grid based design.
gulp.task('sass', function () {
    return sass('./src/assets/stylesheets/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('./public/css'));
});


// Standard minification of css
gulp.task('minify-css', function(){
  return gulp.src('./public/css/*.css')
    .pipe(minify({keepBreaks:true}))
    .pipe(gulp.dest('./public/css/'));
});

// master task to run them sequentially
gulp.task('assets-master', function(callback) {
  runSequence('kill-assets',
              'sass', 
              'minify-css',
              callback);
});

// ===============================================
//        angular tasks
// ===============================================

// Puts Angular in a master minified file
gulp.task('compile-angular', function(){

  var src = {
    app: './src/app/app.js',
    routes: './src/app/app.routes.js',
    mnctrl: './src/app/shared/*.js',
    ctrl:  './src/app/components/**/*.js',
  };   
 
  return gulp.src([src.app, src.routes, src.mnctrl, src.ctrl])
    
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./public/app'));
});

gulp.task('kill-app', function() {
  return gulp.src('./public/app', { read: false }) 
    .pipe(rimraf());
});

gulp.task('app-master', function(callback) {
  runSequence('kill-app',
              'compile-angular', 
              callback);
});





// ===============================================
//        watch tasks
// ===============================================



gulp.task('watch', function () {
   
    gulp.watch(['./src/app/**/**/*.js'],['app-master']);

    gulp.watch(['./src/*.html','./src/app/components/**/*.html'],['views-master']);
    

    gulp.watch(['./src/app/components/**/style/**/*.scss',
                './src/app/components/**/style/*.scss',
                './src/assets/stylesheets/*.scss',
                './src/assets/stylesheets/**/*.scss'],
                                    ['assets-master']);
    

});

gulp.task('default',['watch']);

