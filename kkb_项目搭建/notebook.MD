1. 创建前端项目: npx create-nuxt-app front 






1. 同时创建一个server文件夹:mkdir server
2. cd server
3. 搭建一个服务: npm init egg --type=simple
4. npm i
5. 配置husky: npm insstall husky --save-dev 
6. 在package.json里面添加
"husky": {
    "hooks": {
      "pre-commit": "npm run test"
    }
  },

  之后提交代码,如果没有通过将提交不上去
"test": "npm run lint -- --fix && npm run test-local",   -- -- fix指的是强制修复


其他用来规范commit的工具:
1. npm install -g commitizen
2. 以上命令安装完之后: commitizen init cz-conventional-changelog --save-dev --save-exact

