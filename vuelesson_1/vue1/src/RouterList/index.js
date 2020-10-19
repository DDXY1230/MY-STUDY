import abc from '../components/abc'
import test1 from '../components/test1'
import formtest from '../components/formtest'

export default {
    mode: 'history',
    routes: [{
        path: '/abc',
        component: abc
    }, {
        path: '/test1',
        component: test1
    },{
        path: '/formtest',
        component: formtest
    }]
}