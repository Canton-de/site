const gulp = require('gulp')
const sass = require('gulp-sass')


const style = () =>{
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
}

const watch = () =>{
    gulp.watch ('./scss/**/*.scss',style)
}

exports.style = style
exports.gulpwatch = watch