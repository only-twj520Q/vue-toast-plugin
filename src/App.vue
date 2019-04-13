<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <button @click="onShow">按钮二</button>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
    },
    methods: {
      onShow() {
        this.$toast({
          message: '这是第二条toast',
          duration: 1000
        })
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  padding: 2px;
  margin-bottom: 5px;
}
</style>
