var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt8b104e2a85d96a9d')
.setHost("stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt4eacfe5b25245d5e')

var extensionSDK = app.Extension({
	secret_key     : 'swapnil',
	extension_key	 : 'myext',
	static         : __dirname + '/client', 
	routes         : require('./server/routes')
}) 

return extensionSDK.start(9000)


//swapnil
