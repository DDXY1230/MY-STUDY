(function () {
    'use strict';

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

    // 先安装: yarn add rollup -D
    // 查看帮助: yarn rollup
    // 按照浏览器的格式打包输出在控制台: yarn rollup ./src/index.js --format iife
    // 打包输出到指定文件: yarn rollup ./src/index.js --format iife --file ./dist/index.js
    // 默认打包用到的部分,没有用到的部分一律不打包,因为rollup会自动开启treeshakeing

}());
