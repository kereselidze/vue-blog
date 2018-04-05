import Vuex from 'vuex'
import Vue from 'vue'
import posts from './posts/index'
import articles from './articles/index'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		posts,
		articles
	}

})
