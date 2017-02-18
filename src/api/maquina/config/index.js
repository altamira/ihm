import http from './../../http'

function get(callback) {
	http.fetch('maquina/config/', callback);
}

export default {
	get: get
}