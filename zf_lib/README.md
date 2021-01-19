## 实现一个数学库 +-*/
打包成压缩包和非压缩包
支持AMD/CJS/ESM方式的导入

require('zf_lib') // commonjs
import zf_lib from 'zf_lib // es6de modules


打包成一个库,上传到npm,给别人使用

登录npm
命令:npm login
然后输入用户名密码邮箱进行登陆
登陆成功之后搜一下看别用用过这个包名没有,有的话要进行修改,不能跟别人重名
命令: npm search xxx
如果没有那么就可以直接发布了  : npm publish


