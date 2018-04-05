// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vueMoment from 'vue-moment'
import { sync } from 'vuex-router-sync'
import BoootstrapVue from 'bootstrap-vue';

sync(store, router)

Vue.use(BoootstrapVue);
Vue.use(vueMoment);

Vue.config.productionTip = false;

window.Vue = new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
	created () {
		this.$moment.locale('ka')
	}
})
