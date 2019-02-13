/*created by xaobi*/

import message from './vmessage'
import comfirm from './vmessageBox'

const install = function(Vue) {
    //注册全局组件
    Vue.component(message.name, message)
    Vue.component(comfirm.name, comfirm)
    
    //添加全局API
    Vue.prototype.$message = message
    Vue.prototype.$confirm = comfirm
}
export default install