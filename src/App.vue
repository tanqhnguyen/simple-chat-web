<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    this.$store.dispatch('fetchMessages')
    this.$store.dispatch('fetchMe')
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  background-color: #f5f8fa;
  padding: 10px 0px;
}
</style>
