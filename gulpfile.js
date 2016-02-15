var gulp = require('gulp'),
  httpServer = require('http-server'),
  watch = require('gulp-watch'),
  ejs = require('gulp-ejs-noext');

var SERVE_PORT = '8080',
    YMB_HOST = 'http://localhost:8086';

var compile = function(host){
  return function(){
    return gulp.src('src/index.html')
      .pipe(ejs({
        ymbHost: host
      }))
      .pipe(gulp.dest('./dist'));
  };
};

gulp.task('copy',function(){
  return gulp.src([
      'src/img/**/*',
    ],{ base : 'src' })
    .pipe(gulp.dest('dist/'));
});

gulp.task('copyModules',function(){
  return gulp.src([
    'node_modules/**/*'
  ],{ base: 'node_modules' })
  .pipe(gulp.dest('dist/node_modules'));
});

gulp.task('serve',function(){
  var server = httpServer.createServer({
    root: './dist'
  });
  server.listen(SERVE_PORT,'0.0.0.0');
});

gulp.task('dev',['serve','copy','copyModules'],function(){
  watch('src/index.html',compile(YMB_HOST));
  return compile(YMB_HOST)();
});