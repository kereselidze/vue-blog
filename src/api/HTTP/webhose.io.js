import axios from 'axios'

const HTTP = axios.create({
	baseURL: `http://webhose.io/filterWebContent?token=662e01e2-481e-4fe3-a99b-f9a191eafddb&format=json?`
})

export default HTTP
