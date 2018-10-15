var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');


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

gulp.task('babel', () =>
    gulp.src('src/js/scripts.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./src/js'))
);

gulp.task( 'uglify', function() {
  gulp.src( 'src/js/scripts.js' )
  .pipe(uglify().on('error', function(e){
    console.log(e);
 }))
  .pipe( gulp.dest( 'src/js/min' ) )
} );


gulp.task( 'default',[ 'sass', 'watch', 'uglify', 'babel' ] );