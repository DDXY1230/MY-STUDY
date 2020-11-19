// import json from "@rollup/plugin-json"  // 不知道为什么报错
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index2.js',
        format: 'iife'
    },
    plugin: [
        // json(),
        resolve(),
        commonjs()
    ]
}