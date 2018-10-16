var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');

gulp.task('js', function(){
    
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(gulp.dest('src/wwwroot/js'));
});

gulp.task('css', function(){

    return gulp.src([
        'src/styles/styles.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(concat('site.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('src/wwwroot/css'))
})