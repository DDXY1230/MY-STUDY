# webpack工程化实战
---
webpack5.x已经在今年10.1国庆期间发布上线,但是考虑到不稳定性,和生态插件的更新,所以本课程仍以webpack4.x版本为主.(webpack@4.43.0,webpack-cli@3.3.12,webpack-dev-server@3.11.0)
## webpack入门
### 1.webpack简介
webpack是一个现代JavaScript应用程序的静态模块打包器(module bundle),当webpack处理应用时,它会递归的构建一个依赖关系图(dependency graph),其中包含应用程序需要的每个模块,然后将所有这些模块打包成一个或多个bundle.
webpack是一个打包模块化JavaScript的工具,他会从入口模块出发,识别出源码中的模块化导入语句,递归地找出入口文件的所有依赖,将入口和其所有的依赖打包到一个单独的文件中
是工程化.自动化思想在前端开发的体现.

### 2.webpack的安装
环境准备
nodejs: https://nodejs.org/en/
版本参考官网发布的最新版本,可以提升webpack的打包速度
安装方式:
局部安装(推荐使用)
```
npm init -y    #初始化npm配置文件
npm install --save-dev webpack #安装核心库
npm install --save-dev webpack-cli  #安装命令行工具

#安装最新的4.x稳定版本
npm i -D webpack@4.44.0

#安装制定版本
npm i -D webpack@<version>
```
