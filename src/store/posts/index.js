import PostResource from '../../api/resources/post'

const state = {
	posts: []
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
