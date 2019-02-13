/*created by xaobi*/

import Vue from 'vue'
import MessageBoxComponent from './messageBox.vue'

const MessageBox = (option = {}) => {
    //扩展实例，创建一个子类，参数包含组件选项里面的所有对象
    const MessageBoxConstructor = Vue.extend(MessageBoxComponent)
    //生成一个实例
    const instance = new MessageBoxConstructor()

    //将实例挂载到新创建的div上
    instance.$mount(document.createElement('div'));

    //添加到body上
    document.body.appendChild(instance.$el)

    Object.keys(option).forEach(key => {
        instance[key] = option[key];
    });

    return new Promise((resolve, reject) => {
        instance.show = true;

        let confirm = instance.onConfirm;
        let cancel = instance.onCancel;

        instance.onConfirm = () => {
            //先执行instance.onConfirm
            confirm();
            //再执行回调
            resolve();
        }

        instance.onCancel = () => {
            //先执行instance.onCancel
            cancel();
            //再执行回调
            resolve();
        }
    });
}

export default MessageBox