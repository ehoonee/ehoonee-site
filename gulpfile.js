'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'), //Будет нужен для наблюдения за изменениями файлов.
    prefixer = require('gulp-autoprefixer'), //автоматически добавляет вендорные префиксы к CSS свойствам 
    rigger = require('gulp-rigger'), // Плагин позволяет импортировать один файл в другой простой конструкцией "//= footer.html"
    rimraf = require('rimraf'), //rm -rf для ноды
    sass = require('gulp-sass'), //Компилятор sass
    concat = require('gulp-concat'), //Склейка файлов
    order = require('gulp-order'), //Выставляет очередь склейки файлов
    browserSync = require("browser-sync"), //с помощью этого плагина мы можем легко развернуть локальный dev сервер с блэкджеком и livereload, а так же с его помощью мы сможем сделать тунель на наш localhost, что бы легко демонстрировать верстку заказчику
    uglify = require('gulp-uglify'), //minify js
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    pagebuilder = require('gulp-pagebuilder'),
    reload = browserSync.reload;

var path = {

    build: {
        html: 'build/',
        css: 'build/css/',
        cssmin: 'build/css/min/',
        js: 'build/js/',
        jsmin: 'build/js/min/'
    },
    src: {
        html: 'src/html/**/*.html',
        style: 'src/style/*.scss',
        js: 'src/js/**/*.js'
    },
    watch: {
        html: 'src/html/**/*.html',
        style: 'src/style/**/*.scss',
        js: 'src/js/**/*.js'
    }
};

var config = {
    server: {
        baseDir: "build"
    },
    tunnel: false,
    host: 'localhost',
    port: 3000,
    logPrefix: "Frontend"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(pagebuilder('src'))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.build.css))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.cssmin))
        .pipe(reload({stream: true}));
});


gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.jsmin))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'style:build',
    'js:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});


gulp.task('default', ['build', 'webserver', 'watch']);