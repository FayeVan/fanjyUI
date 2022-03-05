const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css')// 压缩模块

// 设定任务
gulp.task('sass', async function() {
    // 指定路径
    return gulp.src('components/css/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
})
