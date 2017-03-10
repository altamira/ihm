import http from './../../http'

function get(callback) {
	http.fetch('maquina/config/', callback);
}

function save(config, callback) {
	http.post('maquina/config/', config, callback);
}

function list(callback, host = (window.ihm.config.local.host + ':' + window.ihm.config.local.port + window.ihm.config.local.api_root)) {
	http.get(host, 'maquina/', callback);
}

export default {
	get: get,
	list: list,
	save: save
}