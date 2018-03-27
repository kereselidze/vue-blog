import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({
	modules: {
		cart,
		products
	},
	strict: debug
})
