var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


gulp.task( 'sass', function() {

  gulp.src( './src/scss/*.scss' )
  .pipe( sourcemaps.init() )
  .pipe( sass({
    errorLogToConsole: true,
    outputStyle: 'compressed'
  }) )
  .on( 'error', console.error.bind( console ) )
  .pipe( autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }) )
  .pipe( rename( {suffix: '.min'} ) )
  .pipe( sourcemaps.write( './' ) )
  .pipe( gulp.dest( './src/css' ) );

} )

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('default',['sass', 'sass:watch']);