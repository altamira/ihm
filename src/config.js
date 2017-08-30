const LOCAL_HOST = 'http://localhost'
const LOCAL_PORT = '1880'; 
const LOCAL_API_ROOT = '/api/';

//Servidor remoto
const REMOTE_HOST = 'http://192.168.0.1';
const REMOTE_PORT = '1880';
const REMOTE_API_ROOT = '/api/';

function setConfiguration(callback) {
	window.ihm = {
		config: {
			local: {
				host: LOCAL_HOST || window.location.hostname,
				port: LOCAL_PORT || 1880,
				api_root: LOCAL_API_ROOT || '/api/'
			},
			remote: {
				host: REMOTE_HOST || window.location.hostname,
				port: REMOTE_PORT || 1880,
				api_root: REMOTE_API_ROOT || '/api/'
			}
		},
		handlers: {
			onError: null
		}
	}
}

export default {
	setConfiguration: setConfiguration
}
