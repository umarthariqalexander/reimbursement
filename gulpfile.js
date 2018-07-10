'use strict';
var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");


gulp.task('tasks', function(){
    gulp.start('scripts', 'sass', 'sass:watch')
});

gulp.task('sass', function(){
    return gulp.src('./styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});

gulp.task('scripts', function(){
    return gulp.src('./scripts/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public'));
}); 

gulp.task('sass:watch', function () {
    gulp.watch('./styles/*.scss', ['sass']);
});