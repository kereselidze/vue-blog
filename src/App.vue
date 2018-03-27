<template>
  <div id="app" class="container">
    <div class="header">
      <header-bar></header-bar>
    </div>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
	components: {HeaderBar},
	name: 'App'
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import './assets/scss/custom-bootstrap';
</style>
