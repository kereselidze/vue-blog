import HTTP from '../HTTP/newsapi.org'

export default {

	find (keyword) {
		return HTTP.get('everything?q=' + keyword);
	}

}
