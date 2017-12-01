var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt6eef1c94c2ce0f4f')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('blta53058e6ac1fc255')

var extensionSDK = app.Extension({
	secret_key     : 'blt81fdec8a4d1a2361',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


