var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltc16645c5e4947de4')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt23499a665a3f876f')

var extensionSDK = app.Extension({
	secret_key     : 'asdasd',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


