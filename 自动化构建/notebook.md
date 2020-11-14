命令行重要输入完整的路径:  ./node_modules/.bin/sass scss/main.scss css/style.css
在package.json中的script不需要输入完整的路径:  sass scss/main.scss css/style.css
因为package.json会自动找到node_modules下面的模块命令

yarn add browser-sync --dev:用于启动服务
启动一个服务前要yarn build 
也可以用script钩子函数
"preserve": "yarn build"
也可以给sass 命令添加--watch命令,只要监听到scss文件发生变化马上进行变异
这样就要同时执行多个,那么我们需要借助于:yarn add npm-run-all --dev

package.json中的script中
"serve": "browser-sync . --files \"css/*.css\"", --files 可以监听到项目中文件的变化,同步到浏览器,然我们实时看到效果
