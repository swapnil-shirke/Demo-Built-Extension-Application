var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt431824a55358b8c9')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('bltd934e0eec21cbc99')

var extensionSDK = app.Extension({
	secret_key     : 'cliveblt',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client', 
	routes         : require('./server/routes')
}) 

return extensionSDK.start(9000)


