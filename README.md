# VNotice 通知插件

通知插件包含有消息提示组件、消息弹框组件。

## 使用

```js

//引入
import vueNotice from './vnotice'

//全局使用插件
Vue.use(vueNotice)

```

```js

<script>
export default {
    ...
    methods: {
        useMessage() {
            this.$message({msg: '消息提示'});
        },
        useMessageBox() {
            this.$confirm({
                content: '弹窗提示',
                confirm_text: '确定',
                cancel_text: '取消',
                confirm: vm => {
                    vm.show = false;
                    //todo something...
                },
                cancel: vm => {
                    vm.show = false;
                    //todo something...
                }
            });
        }
    }
}

```









