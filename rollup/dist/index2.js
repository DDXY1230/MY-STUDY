(function (_) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

    const log = msg => {
        console.log('---info---');
        console.log(msg);
        console.log('---info2---');
    };

    var messages = {
        hi: 'hi guys, i am xixi',
        haha: 'hahah'
    };

    const msg = messages.hi;
    log(msg);
    log(___default['default'].camelCase('hello world'));


    // console.log(name)
    // console.log(version)

    // 先安装: yarn add rollup -D
    // 查看帮助: yarn rollup
    // 按照浏览器的格式打包输出在控制台: yarn rollup ./src/index.js --format iife
    // 打包输出到指定文件: yarn rollup ./src/index.js --format iife --file ./dist/index.js
    // 默认打包用到的部分,没有用到的部分一律不打包,因为rollup会自动开启treeshakeing
    // yarn rollup --config rollup.config.js   用配置文件启动

    //-----------------
    /**
     * rollup使用插件的方式: 
     * yarn add rollup-plugin-json -D
     * 
     * 按照模块名称进行: yarn add rollup-plugin-node-resolve -D
     * rollup默认支持es modules,所以commonjs的不会被支持,为了解决这个问题
     * 需要安装插件:yarn add rollup-plugin-commonjs -D
     * 
     * 
     */

}(_));
