var gulp = require('gulp');
var stylus = require( 'gulp-stylus' );
var jade = require( 'gulp-jade' );
var autoprefixer = require('gulp-autoprefixer');

gulp.task( 'styles', function() {
	gulp.src( 'stylus/style.styl' )
		.pipe( stylus() )
		.pipe(autoprefixer({
				browsers: ['last 2 versions']
			}))
		.pipe( gulp.dest( 'css/style.css' ) )
});

gulp.task( 'jade', function() {
	gulp.src( 'jade/index.jade' )
		.pipe( jade() )
		.pipe( gulp.dest( 'index.html' ) )
});

gulp.task( 'watch', function() {
	gulp.watch( 'stylus/*.stylus', ['stylus'] );
});