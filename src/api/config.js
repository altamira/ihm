function setErrorCallback(callback) {
	window.ihm.handlers.onError = callback;
}

export default {
	setErrorHandler: setErrorCallback
}