var gulp = require('gulp');
var child = require('child_process');
var fs = require('fs');
var del = require('del');
var gp_concat = require('gulp-concat');

var libs = [
];

var views = [
  'public/index.html'
];

var application = [
  'public/scripts/application/application.js',
  'public/scripts/index.js'
];

var styles = [
  'public/styles/layout.css'
];

gulp.task('cleanup-pre', function(){
  return del('public/libs/*');
});

gulp.task('libs', function(){
  return gulp.src(libs).pipe(gulp.dest('public/libs'));
});

// Default task

gulp.task('default', ['cleanup-pre', 'libs']);

// Build task

gulp.task('cleanup-pre', function(){
  return del('public/dist/*');
});

gulp.task('views', ['cleanup-pre'], function(){
  return gulp.src(views)
  .pipe(gulp.dest('public/dist'));
});

gulp.task('application', ['cleanup-pre'], function(){
  return gulp.src(application)
  .pipe(gp_concat('scripts.min.js'))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('styles', ['cleanup-pre'], function(){
  return gulp.src(styles)
  .pipe(gp_concat('stylesheets.min.css'))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('build', ['cleanup-pre', 'views', 'application', 'styles']);

// Watching mechanism

gulp.task('server', function() {
  var server = child.spawn('node', ['server.js']);
  var log = fs.createWriteStream('server.log', {flags: 'a'});
  server.stdout.pipe(log);
  server.stderr.pipe(log);
});

gulp.task('watch', function(){
  var files_to_watch = [];
  files_to_watch.push(application);
  files_to_watch.push(libs);
  files_to_watch.push(styles);
  files_to_watch.push(views);
  gulp.watch(files_to_watch, ['build']);
});

// Default task

gulp.task('default', ['server', 'watch']);
