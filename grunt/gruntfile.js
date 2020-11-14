// Grunt入口函数
/**
 * 用于定义一些需要Grunt自动执行的任务
 * 需要导出一个函数
 * 此函数接收一个Grunt的形参,内部提供一些创建任务的api
 */
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
    grunt.registerTask('foo', () => {
        console.log('哈哈哈哈')
    })
    grunt.registerTask('bar', '第二个参数是任务的描述', () => {
            console.log('这个任务有自己的描述')
        })
        // grunt.registerTask('default', () => {
        //     console.log('这是一个默认任务')
        // })
        // 如果第二个参数是数组就会依次调用,但是如果前面的一个任务失败了,后面的全部不执行
        // 如果你需要在中途的某个任务失败仍然想继续只想后续任务那么就要用
        // yarn grunt default --force
        // grunt.registerTask('default', ['bar', 'foo'])
        //grunt如果有一部任务,那么不能用箭头函数
        // grunt.registerTask('async-task', () => {
        //     setTimeout(() => {
        //         console.log('这是异步任务')
        //     }, 1000)
        // })这是错误的写法
        // 正确写法
    grunt.registerTask('async-task', function() {
            const done = this.async()
            setTimeout(() => {
                console.log('这是异步任务调用')
                done()
            }, 1000)
        })
        // 任务失败return false就可以了
    grunt.registerTask('bad', () => {
            console.log('bad working')
            return false
        })
        // 异步任务标记为失败的热舞
    grunt.registerTask('bad-async', function() {
        const done = this.async()
        setTimeout(() => {
            console.log('bad work')
            done(false) // 标记为失败任务
        }, 1000)
    })
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    'dist/css/main.css': 'src/scss/main.scss' // 键是输入的路径,值是输出的文件路径
                }
            }
        },
        foofo: 'hahahaenene这里是fool',
        aaa: {
            bbb: '这厮bbb'
        },
        build_a: {
            options: {
                foo: 'bar'
            },
            css: {
                options: 'abcdefg'
            },
            js: '2'
        },
        clean: {
            temp: 'temp/app.js'
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/js/app.js': 'src/js/app.js'
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/app.js'], // 监视源文件的地址,实际去用的时候时候是通配符
                tasks: ['babel'] // 当文件发生变化的时候你需要执行什么任务
            },
            css: {
                files: ['src/scss/main.scss'], // 监视源文件的地址,实际去用的时候时候是通配符
                tasks: ['sass'] // 当文件发生变化的时候你需要执行什么任务
            },
        }

    })
    grunt.registerTask('hha', () => {
            console.log(grunt.config('foofo'))
            console.log(grunt.config('aaa.bbb'))
        })
        // 多目标模式,可以让任务根据配置形成多个子任务
        // yarn grunt build_a  运行多个子任务
        // yarn grunt build_a:js 运行多任务中的某个子任务,如果该子任务中有options,那么就会覆盖外层的options
        // 此处用到this,不能箭头函数 
    grunt.registerMultiTask('build_a', function() {
        console.log('运行多个子任务')
        console.log(this.options())
        console.log(`target:${this.target}, data: ${this.data}`)
    })


    //--------------------------------------------
    //yarn add grunt-contrib-clean 安装清除临时文件的插件
    // grunt.initConfig({
    //     clean: {
    //         temp: 'temp/app.js' // 清除temp下面的app.js,这里也可以用通配符去匹配文件
    //         temp: 'temp/*.js' // 清除temp下面的app.js,这里也可以用通配符去匹配文件
    //         temp: 'temp/**' // 两个*表示清空temp下面所有的文件包括子目录里面的文件
    //     }
    // })
    grunt.loadNpmTasks('grunt-contrib-clean')


    //------------------------------------
    // yarn add grunt-sass sass --dev
    // 有了grunt-sass之后就可以载入了
    grunt.loadNpmTasks('grunt-sass')


    //--------------------------------------------------------
    // yarn add grunt-babel @babel/core @babel/preset-env --dev 有了这三个模块之后就可以去使用es6语法了
    //随着安装的模块越来越多,社区也提供了grunt.loadNpmTask的模块
    // yarn add load-grunt-tasks --dev 安装完记得在头部导入
    loadGruntTasks(grunt) // 自动加载所有的grunt插件中的任务,上面的grunt.loadNpmTasks('xxx')就可以不用写了

    // ------------------------------------------------
    // yarn add grunt-contrib-watch --dev  当文件发生变化是自动去执行编译

    grunt.registerTask('default', ['sass', 'babel', 'watch']) // 这样在启动的时候就去执行编译一次比较合理,然后再有文件的变化的话就会及时监听
        //grunt基本已经退出历史舞台了,所以就学到这里啦哈哈哈,因为grunt是鼻祖,了解它更容易学习现在比较流行的其它打包工具
}