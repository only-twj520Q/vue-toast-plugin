<template>
  <div :class="['toast', visible ? 'fade-in' : 'fade-out']">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 5px;
    color: #fff;
    background: rgba(0, 0, 0, .35);
    border-radius: 10px;
    text-align: center;
    z-index: 999;
  }
  .fade-in {
    animation: animate-fade-in .8s;
  }
  .fade-out {
    animation: animate-fade-out .8s;
    opacity: 0;
  }
  @keyframes animate-fade-in{
    0%{
      opacity: 0
    }
    100%{
      opacity: 1
    }
  }
  @keyframes animate-fade-out{
    0%{
      opacity: 1
    }
    100%{
      opacity: 0;
    }
  }
</style>
