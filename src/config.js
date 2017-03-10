const LOCAL_HOST = 'http://localhost'
const LOCAL_PORT = '80'; 
const LOCAL_API_ROOT = '/api/';

const REMOTE_HOST = 'http://localhost';
const REMOTE_PORT = '80';
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
