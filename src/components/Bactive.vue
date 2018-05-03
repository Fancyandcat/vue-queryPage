<template>
  <div>
    <h2>这是B模块list下面的active页</h2>
  </div>
</template>
<script>
export default {
  methods: {
    checkActive (index) {
      this.current = index
    }
  }
}
</script>
<style>
  .active {
    background: burlywood
  }
</style>
