import http from './../../http'

function get(callback) {
	http.fetch('maquina/config/', callback);
}

function save(config, callback) {
	http.post('maquina/config/', config, callback);
}

function list(callback) {
	http.get('http://192.168.0.1:1880/api/', 'maquinas/', callback);
}

export default {
	get: get,
	list: list,
	save: save
}