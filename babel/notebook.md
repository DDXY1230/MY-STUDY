npm install -D babel-plugin-transform-es2015-arrow-functions


》安装的不是全局的babel，所以在使用的时候会报错
解决方法是： ./node_modules/.bin/babel index.js 
但是这样又太麻烦，可以在package.json里面配置