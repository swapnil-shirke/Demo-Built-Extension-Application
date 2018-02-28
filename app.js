var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt95ec9e00f1757c50')
.setHost("stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt56ca1f50372835a3')

var extensionSDK = app.Extension({
	secret_key     : 'swapnil',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client', 
	routes         : require('./server/routes')
}) 

return extensionSDK.start(9000)


//swapnil
