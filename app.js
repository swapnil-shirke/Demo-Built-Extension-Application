var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltca4688e817a165b4')
.setHost("stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt6d76ddfb84a8cb60')

var extensionSDK = app.Extension({
	secret_key     : 'swapnil23',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client', 
	routes         : require('./server/routes')
}) 

return extensionSDK.start(9000)


//swapnil
