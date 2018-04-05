import HTTP from '../HTTP/webhose.io'

export default {

	latest (keyword) {
		return HTTP.get('q=' + keyword);
	}

}
