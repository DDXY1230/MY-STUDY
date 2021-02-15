<!-- 微服务 -->
首先进入根目录: cd ~
创建文件夹: mkdir my-single-spa
进入: cd my-single-spa  
(
  如果创建文件显示已经存在,可以先删除在创建
  删除:rm -rf my-single-spa
)

以上创建文件夹并且进入可以合并为一句命令: cd ~ && mkdir my-single-spa && cd "$_"
查看完整路径: pwd
初始化项目: npm init -y
查看packag.json: vi package.json
退出查看: :q
安装依赖: npm install @babel/core @babel/plugin-syntax-dynamic-import @babel/preset-env rollup rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-node-resolve rollup-plugin-serve -D
依赖安装完毕之后,配置一个babel文件: touch babel.config.js
配置完,按esc, 然后输入:  :wq   保存并且退出