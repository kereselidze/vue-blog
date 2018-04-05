import ArticlesResource from './../../api/resources/articles'

const state = {
	articles: []
};

const actions = {
	getLatestArticles ({commit}) {
		ArticlesResource.latest('language:georgian').then(response => {
			commit('setArticles', response.data.posts);
			console.log(response);
		})
	}
};

const mutations = {
	setArticles (state, articles) {
		state.articles = articles;
	}
};

const getters = {
	getLatestArticles: state => {
		return state.articles;
	}
};

export default {
	state,
	actions,
	mutations,
	getters
}
