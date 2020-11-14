## 本项目是用来练习typescript
### 初始化package.json
yarn init --yes
### 在开发依赖中安装typescript
yarn add typescript --dev

写一个.ts结尾的文件
yarn tsc xxx.ts
运行完就会多出一个同名的js文件typescript有自己的配置文件
运行:yarn tsc --ini
会在当前目录下添加tscon fig.json的配置文件
有了配置文件就不要单个的执行tsc了
需要yarn tsc 整个项目按照配置执行
yarn tsc xxx.ts后面带文件就是单个的执行

通过yarn tsc运行出来的如果出错一般是英文版的,如果强制是想看中文版的错误可以用
yarn tsc --locale zh-CN(不推荐,还是用英文吧,因为谷歌引擎只支持搜索英文解决问题更加快)


