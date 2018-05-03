<template>
  <div>
    <h2>这是A模块list</h2>
    <p v-for="(num, index) in list" :key="index">
      <button :class="{'active': current === num}" @click="checkActive(num)">前往详情页</button>
    </p>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      list: [1, 2, 3],
      current: -1
    }
  },
  created () {
    if (this.modulesQuery[this.$route.name] && this.modulesQuery[this.$route.name].current) {
      this.current = this.modulesQuery[this.$route.name].current
    }
  },
  methods: {
    checkActive (index) {
      this.current = index
      this.setModuleQuery({ path: this.$route.name, query: { current: index } })
      this.$router.push({name: 'A-active'})
    },
    ...mapMutations({
      'setModuleQuery': 'SET_MODULE_QUERY'
    })
  },
  computed: {
    ...mapGetters([
      'modulesQuery'
    ])
  }
}
</script>
<style>
  .active {
    background: burlywood
  }
</style>
