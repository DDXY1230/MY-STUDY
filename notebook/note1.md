1.本地存储（localstorage 或者 sessionstorage）存储图片的话，要事先转成base64的方式
2.!function (){}()像这种函数前面加！+ ～等是自执行的函数
3.npm link 该命令可以把package.json里面的bin注册到全局，之后就可以执行命令了
4.JavaScript是单线程的

5.模块话学习
  给页面当中的script标签中设置  type = module 就可以了

6.可以通过browser-sync . --files **/*.js启动一个热更新的机制

7.abstract class Animal{}  抽象类只能被子类继承,不能再直接实例化

8.安装vue调试工具的方式: git clone https://github.com/vuejs/vue-devtools.git
                      cd vue-tool
                      npm i
                      npm run build
                      进去找到shells-》chrome
                      然后到Chrome浏览器中打开开发者模式选择加载已解压的扩展程序