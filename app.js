var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt2e6b7b62ee4e3213')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt741703e6e09e6bb4')

var extensionSDK = app.Extension({
	secret_key     : 'cliveblt',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client', 
	routes         : require('./server/routes')
}) 

return extensionSDK.start(9000)


//swapnil
