import http from './../../http'

function get(callback) {
	http.fetch('maquina/config/', callback);
}

function save(config, callback) {
	http.post('maquina/config/', config, callback);
}

// Pegar a lista de um servidor:
//local --> window.ihm.config.local.host
//remote--> window.ihm.config.remote.host
function list(callback, host = (window.ihm.config.remote.host + ':' + window.ihm.config.remote.port + window.ihm.config.remote.api_root)) {
	http.get(host, 'maquina/', callback);
}

export default {
	get: get,
	list: list,
	save: save
}