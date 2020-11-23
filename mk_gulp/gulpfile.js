const { src, dest, series, watch } = require('gulp')
    // gulp-uglify => plugin.uglify = require('gulp-uglify')
    // 注意: 后面一定要加括号
const plugins = require('gulp-load-plugins')()
    // 
const del = require('del')


// 压缩js uglify
function js(cb) {
    src('js/*.js').pipe(plugins.uglify()).pipe(dest('dist/js'))
    cb()
}

function css(cb) {
    src('css/*.scss').pipe(plugins.sass({ outpiutStyle: 'compressed' })).pipe(plugins.autoprefixer({
        cascade: false,
        remove: false
    })).pipe(dest('dist/css'))
    cb()
}

function watcher() {
    watch('js/*.js', js)
    watch('css/*.scss', css)
}
//删除dist目录
function clean(cb) {
    del('./dist')
    cb()
}
exports.scripts = js
exports.clean = clean
exports.style = css
exports.default = series([
    clean, js, css, watcher
])