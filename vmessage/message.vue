<style scoped>
.vmessage { position: fixed; top: 20%; left: 50%; margin-left: -150px; padding: 14px; width: 300px; color: #FFF; text-align: center; background-color: #B27E00; border: 1px solid #4D76AD; z-index: 999; word-break: break-all; word-wrap: break-word;
}
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
        <div class="vmessage" v-if="show">
            {{message}}
        </div>
    </transition>
</template>

<script>
export default {
  name: 'vmessage',
  data() {
    return {
        message: '提示消息',
        show: false
    }
  }
};
</script>

