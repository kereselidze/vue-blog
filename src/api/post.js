import HTTP from './http-common'

export default {
	all () {
		return HTTP.get('everything?q=mariami');
	},
	find (keyword) {
		return HTTP.get('everything?q=' + keyword);
	},
	show (id) {
		return HTTP.get('everything/' + id)
	}
}
