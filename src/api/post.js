import HTTP from './http-common'

export default {
	all () {
		return HTTP.get('posts/');
	},
	show (id) {
		return HTTP.get('posts/' + id)
	}
}
