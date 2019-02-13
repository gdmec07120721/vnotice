/*created by xaobi*/

import Vue from 'vue'
import MessageComponent from './message.vue'

const Message = (option = {}) => {
    //扩展实例，创建一个子类，参数包含组件选项里面的所有对象
    const MessageConstructor = Vue.extend(MessageComponent)
    //生成一个实例
    const instance = new MessageConstructor()

    //将实例挂载到新创建的div上
    instance.$mount(document.createElement('div'));

    //添加到body上
    document.body.appendChild(instance.$el)

    instance.message = option.msg || '提示消息';
    instance.show = true;

    setTimeout(() => {
        instance.show = false;
    }, option.duration || 1500);
}

export default Message