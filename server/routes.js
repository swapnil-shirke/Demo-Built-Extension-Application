var when = require("when");
var request = require("request");

module.exports = {
  "/v1/functions/clive": {
		GET: function(req, res) {
			this.resSuccess(req, res, {
				clive: "is awesome"
			})
		}
	},
	"/v1/classes/person/objects" : {
		GET: {
			_post: function(req, res) {
				req.logger.log("in post objects", req.bobjekt)
				req.logger.error("in post objects we are")				
				// req.bobjekt.unknown()								
				return when.resolve()				
			}
		},
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 11)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Mumbai"
				})
				req.logger.log("object hook POST call in s_pre call")
					
				// .save()
				// .then(function(data) {
				// 	req.logger.log(data.toJSON())
				// })	
				
				// if(req.bobjekt.name != "Clive") {
				// 	// throw { error: "What the hell" } 	
				// }
				return when.resolve()
			},
			_post: function(req, res) {								
				req.bobjekt['v1'] = "merge will not reflect on classes in backend"				
				return when.resolve()
			}
		}
	},
	"/v1/classes/person/objects/:objectUid": {
		GET: {
			_post: function(req, res) {
				req.logger.warn("in get _post uid object", req.bobjekt)
				req.logger.log("in get _post uid current user", req.built.getContextVar("currentUser"))				
				req.builtApp.Class('person').Object({
					 'name'		:req.bobjekt.name,
					 'age'    : 33,
					 'address': [ "blt4f0760710e0b10c5" ]
				})
				.save().then(function(succ) {
					req.logger.log("new object " + req.bobjekt.name + " posted", succ)
				}).catch(function(err) {
					req.logger.error("object abc error", err)					
				})

				req.logger.log("req.bclass", req.bclass)
				
				return when.resolve()								
			}
		},
		PUT: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("name", "Rohini")
				req.logger.log("_pre updated:  ", req.bobjekt)								
				return when.resolve()
			},
			_post: function(req, res) {
				req.logger.log("post updated:  ", req.bobjekt)												
				return when.resolve()				
			}
		},
		DELETE: { 
			_pre: function(req, res) {	
				req.logger.log("Deleted:  ", req.bobjekt)				
				return when.resolve()
			},
			_post: function(req, res) {
				var defered = utils.Promise.defer()				
				setTimeout(function(){
					req.logger.warn("Timeout completed")
					defered.resolve()
				},1000)
				return defered.resolve()				
			}
		}
	},
	/**	
	 * v2 (Didn't work)
	 */
	"/v2/classes/person/objects": {
		GET: {
			_post: function(req, res) {
				req.logger.error(req.bobjekt)				
				return when.resolve()				
			}
		},
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 2)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Vasai"
				})		
				return when.resolve()
			},
			_post: function(req, res) {			
				req.bobjekt['v2'] = "v2 merge will not reflect on classes in backend"				
				return when.resolve()
			}
		}
	},
	/**	
	 * v3 (Didn't work)
	 */
	"/v3/classes/person/objects": {
		GET: {
			_post: function(req, res) {
				req.logger.error(req.bobjekt)				
				return when.resolve()				
			}
		},
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 3)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Virar"
				})			
				return when.resolve()
			},
			_post: function(req, res) {			
				req.bobjekt['v3'] = "v3 merge will not reflect on classes in backend"				
				return when.resolve()
			}
		}
	},
	/**
	 * v4 (Didn't work)
	 */
	"/v4/classes/person/objects": {
		GET: {
			_post: function(req, res) {
				req.logger.error(req.bobjekt)				
				return when.resolve()				
			}
		},
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 4)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Borivali"
				})			
				return when.resolve()
			},
			_post: function(req, res) {			
				req.bobjekt['v4'] = "v4 merge will not reflect on classes in backend"				
				return when.resolve()
			}
		}
	},
	/**
	 * Uploads (Didn't work)
	 */
	"/v1/uploads": {
		GET : {
			_post: function(req, res) {
				req.logger.log(req.bobjekt)				
				return when.resolve()	
			}
		},
		POST : {
			_post: function (req, res) {
				req.logger.log("in Post Uploads", req.bobjekt)								
				return when.resolve()					
			}
		}
	}
}	
