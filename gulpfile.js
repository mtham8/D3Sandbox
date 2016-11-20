const gulp = require('gulp')

const dev = {
  'static': ['src/*.json', 'src/*.html', 'src/*.css'],
  'js': 'src/**/*.js',
  'all': 'src/**/*'
}

gulp.task('copy:static', () => gulp.src(dev.static).pipe(gulp.dest('build')))
gulp.task('copy:js', () => gulp.src(dev.js))

gulp.task('build', ['copy:static', 'copy:js'])

gulp.task('watch', () => gulp.watch(dev.all, ['build']))
