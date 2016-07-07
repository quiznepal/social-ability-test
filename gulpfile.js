var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var cdnizer = require("gulp-cdnizer");
var replace = require('gulp-replace');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.task('build', function () {
   return gulp.src("./app/index.html")
       // .pipe(inject(sources)) // only local sources
       .pipe(cdnizer([
           {
               package: 'angular',
               file: 'app/bower_components/angular/angular.js',
               cdn: 'http://ajax.googleapis.com/ajax/libs/angularjs/${version}/angular.min.js'
           },
           {
               package: 'angular-router',
               file: 'bower_components/angular-route/angular-route.js',
               cdn: 'http://ajax.googleapis.com/ajax/libs/angularjs/${version}/angular-route.js'
           },
           {
           	package : 'bootstrap',
           	file : 'bower_components/bootstrap/dist/css/bootstrap.min.css',
           	cdn : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
           }
       ])
       .pipe(gulp.dest("./dist")));
});

gulp.task('templates', function(){
	gulp.src('app/components/*/*').pipe(gulp.dest('dist/components'));
	gulp.src('app/quizboard/*').pipe(gulp.dest('dist/quizboard'));
	gulp.src('app/startpage/*').pipe(gulp.dest('dist/startpage'));
	gulp.src('app/app.js').pipe(gulp.dest('dist/'));
	pragulp.src('app/app.css').pipe(gulp.dest('dist/'));

	gulp.src(['app/index.html'])
		.pipe(replace('bower_components/angular/angular.js', 
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js'))
		.pipe(replace('bower_components/angular-route/angular-route.js',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-route.min.js'))
		.pipe(replace('bower_components/bootstrap/dist/css/bootstrap.min.css',
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('copycomponents',function () {
	
})