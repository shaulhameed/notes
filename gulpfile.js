'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload');


    gulp.task('html', ()=>{

        return gulp.src('*.html')
        .pipe(livereload({auto: false}))
    })

    gulp.task('watch', ()=>{
        livereload.listen({auto: false});

        gulp.watch("*.html", gulp.series('html'));
    });

    