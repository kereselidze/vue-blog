import PostResource from './../../api/post'

const state = {
	posts: [{author: '212121'}]
};

const actions = {
	getSearchedPosts ({commit}, keyword) {
		PostResource.find(keyword).then(response => {
			commit('setPosts', response.data.articles)
		})
	}
}

const mutations = {
	setPosts (state, posts) {
		state.posts = posts
	}
}

const getters = {
	getSearchedPosts: state => {
		return state.posts
	}
}

export default {
	state,
	actions,
	mutations,
	getters
}
