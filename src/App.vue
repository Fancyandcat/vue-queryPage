<template>
  <div id="app">
    <button @click="goAlist">去A</button>
    <button @click="goBlist">去B</button>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: {
    goAlist () {
      this.$router.push({name: 'A-list'})
    },
    goBlist () {
      this.$router.push({name: 'B-list'})
    },
    ...mapMutations({
      'clearModuleQuery': 'CLEAR_MODULE_QUERY'
    })
  },
  watch: {
    $route (to, from, next) {
      from.name.split('-')[0] !== to.name.split('-')[0] && (this.clearModuleQuery())
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
