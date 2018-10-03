// gulp modules required
let gulp = require('gulp');
let sass = require('gulp-sass');

// compile Sass task
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

// Optimize Images
gulp.task('imageMin', () =>
  gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
);

// watch task running 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('images/*', ['imageMin']);
});