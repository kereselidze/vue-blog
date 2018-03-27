import HTTP from './http-common'

export default {
	all () {
		return HTTP.get('everything?q=food');
	},
	show (id) {
		return HTTP.get('everything/' + id)
	}
}
