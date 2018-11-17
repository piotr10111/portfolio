const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
var pump = require('pump');

sass.compiler = require('node-sass');

gulp.task( 'sass', function() {

  gulp.src( './src/scss/main.scss' )
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

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('src/js/scripts.js', ['uglify']);
});

gulp.task('js', function(){
  return gulp.src('src/js/scripts.js') 
  .pipe(uglify())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('src/js/min/scripts.js'));
});

gulp.task('script', function (cb) {
  pump([
    gulp.src('src/js/scripts.js'),
    terser(),
    concat('bundle.js'),
    gulp.dest('src/js/min')
  ], cb);
});


gulp.task( 'default',[ 'sass', 'watch', 'script' ] );