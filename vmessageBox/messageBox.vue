<style scoped>
.vmessage_box {position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 10000; text-align: center; background: rgba(0,0,0,.5);}
.vmessage_box:after{content: ''; width: 0; height: 100vh; display: inline-block; vertical-align: middle;}
.vmessage_box_wrap {width: 300px; display: inline-block; vertical-align: middle; background: #121E3B; border: 1px solid #4D76AD; text-align: left;}
.vmessage_content{padding: 28px 14px; color: #A7C5E1; position: relative;}
.vmessage_content .tips_text{width: 36px; height: 36px; position: absolute; left: 14px; top: 50%; margin-top: -18px; background: url(../../../assets/images/tooltip_icon.png) center no-repeat;}
.content_wrap{padding-left: 50px; word-break: break-all; word-wrap: break-word;}
.vmessage_footer{ border-top: 1px solid #031332; padding: 10px 14px; text-align: right;}
.vmessage_footer .btn{ display: inline-block; padding: 0 15px; height: 24px; font-size: 13px; color: #C5E1F8; text-align: center; line-height: 24px; margin-left: 10px; background: #3D527F; border-radius: 2px;}
.vmessage_footer .yes_btn{background: #4A99FF;}
.fade-enter-active,.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
<template>
<transition name="fade">
    <div class="vmessage_box" v-if="show">
        <div class="vmessage_box_wrap">
            <div class="unlocktop vmessage_title">
                {{title}}
                <a href="javascript:;" @click="onCancel"></a>
            </div>
            <div class="vmessage_content">
                <span class="tips_text"></span>
                <div class="content_wrap" v-html="content"></div>
            </div>
            <div class="vmessage_footer">
                <a 
                    v-if="confirm_text" 
                    href="javascript:;" 
                    class="btn yes_btn"
                    @click="onConfirm"
                >{{confirm_text}}</a>
                <a 
                    v-if="cancel_text" 
                    href="javascript:;" 
                    class="btn no_btn"
                    @click="onCancel"
                >{{cancel_text}}</a>
            </div>            
        </div>

    </div>
</transition>
</template>

<script>
export default {
    name: 'vmessageBox',
    data() {
        return {
            title: '提示',
            content: '提示消息',
            confirm_text: '',
            cancel_text: '',
            confirm: null,
            cancel: null,
            show: false
        }
    },
    methods: {
        onConfirm() {
            if (this.confirm) {
                this.confirm(this);
            } else {
                this.show = false;
            }
        },
        onCancel() {
            if (this.cancel) {
                this.cancel(this);
            } else {
                this.show = false;
            }
        }
    }
};
</script>