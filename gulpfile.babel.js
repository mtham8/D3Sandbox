import gulp from 'gulp'
import watch from 'gulp-watch'
import webpack from 'webpack-stream'
import config from './webpack.config.js'

const dev = {
  'static': ['src/*.json', 'src/*.html', 'src/*.css'],
  'js': ['src/**/*.js']
}

gulp.task('static', cb => gulp.src(dev.static).pipe(gulp.dest('build')))
gulp.task('js', cb =>
  gulp.src(dev.js)
  .pipe(webpack(config))
  .pipe(gulp.dest('build'))
)

gulp.task('stream:static', () => watch(dev.static).on('change', cb => gulp.start('static')))
gulp.task('stream:js', () => watch(dev.js).on('change', cb => gulp.start('js')))

gulp.task('stream', ['stream:static', 'stream:js'])

gulp.task('watch', ['stream'])

