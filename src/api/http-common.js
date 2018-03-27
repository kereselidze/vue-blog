import axios from 'axios'

const HTTP = axios.create({
	baseURL: `https://newsapi.org/v2/`,
	headers: {
		Authorization: 'Bearer 22b30da0537a4133b8f31881a7032638'
	}
});

export default HTTP
