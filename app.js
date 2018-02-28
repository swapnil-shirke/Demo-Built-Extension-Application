var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltc8b6b9e952929343')
.setHost("stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt13a73f2b5ae3a00e')

var extensionSDK = app.Extension({
	secret_key     : 'qa',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


