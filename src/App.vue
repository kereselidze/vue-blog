<template>
  <div id="app" class="container">
    <header-bar/>
    <router-view />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import Container from './components/mdb/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'
import 'bootstrap/dist/js/bootstrap.min'

export default {
	data: () => ({
		spinnerVisible: false
	}),
	methods: {
		showSpinner () {
			console.log('show spinner');
			this.spinnerVisible = true;
		},
		hideSpinner () {
			console.log('hide spinner');
			this.spinnerVisible = false;
		}
	},
	components: {HeaderBar, Container},
	created: function () {
		// console.log(this.$store, 'App.vue')
	},
	beforeDestroy: function () {

	}
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import './assets/scss/custom-bootstrap';

</style>
