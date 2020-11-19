import foo from './foo'
import $ from 'jquery'
import './main.css'
foo.bar()
$(document.body).append('<h1>nice</h1>')
if (module.hot) {
    module.hot.accept(() => {
        console.log('bar')
    })
}