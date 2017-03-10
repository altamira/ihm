import axios from 'axios';

function get(h = window.ihm.config.local.host + ':' + window.ihm.config.local.port + window.ihm.config.local.api_root, url, callback, error) {
	if (!callback) {
		window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
		return;	
	} 

	axios
	.get(h + url)
	.then( response => {
		callback ? callback(response.data) : window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
	})
	.catch( err => {
		console.log('Error: ' + JSON.stringify(err, null, 2))
		error ? error(err) : window.ihm.handlers.onError && window.ihm.handlers.onError(err)
	})
}

function fetch(url, callback, error) {
	if (!callback) {
		window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
		return;	
	} 

	axios
	.get(window.ihm.config.local.host + ':' + window.ihm.config.local.port + window.ihm.config.local.api_root + url)
	.then( response => {
		callback ? callback(response.data) : window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
	})
	.catch( err => {
		console.log('Error: ' + JSON.stringify(err, null, 2))
		error ? error(err) : window.ihm.handlers.onError && window.ihm.handlers.onError(err)
	})
}

function post(url, data, callback, error) {
	axios
	.post(window.ihm.config.local.host + ':' + window.ihm.config.local.port + window.ihm.config.local.api_root + url, data)
	.then( response => {
		callback ? callback(response.data) : window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
	})
	.catch( err => {
		console.log('Error: ' + JSON.stringify(err, null, 2))
		error ? error(err) : window.ihm.handlers.onError && window.ihm.handlers.onError(err)
	})
}

function put(url, data, callback, error) {
	axios
	.put(window.ihm.config.local.host + ':' + window.ihm.config.local.port + window.ihm.config.local.api_root + url, data)
	.then( response => {
		callback ? callback(response.data) : window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
	})
	.catch( err => {
		console.log('Error: ' + JSON.stringify(err, null, 2))
		error ? error(err) : window.ihm.handlers.onError && window.ihm.handlers.onError(err)
	})
}

function patch(url, data, callback, error) {
	axios
	.patch(window.ihm.config.local.host + ':' + window.ihm.config.local.port + window.ihm.config.local.api_root + url, data)
	.then( response => {
		callback ? callback(response.data) : window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
	})
	.catch( err => {
		console.log('Error: ' + JSON.stringify(err, null, 2))
		error ? error(err) : window.ihm.handlers.onError && window.ihm.handlers.onError(err)
	})
}

function del(url, callback, error) {
	axios
	.delete(window.ihm.config.local.host + ':' + window.ihm.config.local.port + window.ihm.config.local.api_root + url)
	.then( response => {
		callback ? callback(response.data) : window.ihm.handlers.onError && window.ihm.handlers.onError({mensagem: 'API: função de callback não foi definida !'})
	})
	.catch( err => {
		console.log('Error: ' + JSON.stringify(err, null, 2))
		error ? error(err) : window.ihm.handlers.onError && window.ihm.handlers.onError(err)
	})
}

export default {
	get:get,
	fetch: fetch,
	post: post,
	put: put,
	patch: patch,
	delete: del
};
