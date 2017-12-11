var when = require("when");

module.exports = {
  "/v1/functions/clive": {
		GET: function(req, res) {
			this.resSuccess(req, res, {
				clive: "is awesome"
			})
		}
	},
	// "/v1/classes/person/objects" : {
	// 	GET: {
	// 		_post: function(req, res) {
	// 			req.logger.error(req.bobjekt)				
	// 			return when.resolve()				
	// 		}
	// 	},
	// 	POST: {
	// 		_pre: function(req, res) {
	// 			req.bobjekt = req.bobjekt.set("age", 1)
	// 			req.bobjekt = req.bobjekt.setReferenceWhere("address", {
	// 				"city": "Mumbai"
	// 			})
	// 			// .save()
	// 			// .then(function(data){
	// 			// 	req.logger.log(data.toJSON())
	// 			// })				
	// 			return when.resolve()
	// 		},
	// 		_post: function(req, res) {			
	// 			req.bobjekt['merge_this'] = "merge will not reflect on classes in backend"				
	// 			return when.resolve()
	// 		}
	// 	}
	// },
	// "/v1/classes/person/objects/:objectUid": {
	// 	GET: {
	// 		_post: function(req, res) {
	// 			req.logger.warn(req.bobjekt)
	// 			return when.resolve()				
	// 		}
	// 	},
	// 	PUT: {
	// 		_pre: function(req, res) {
	// 			req.bobjekt = req.bobjekt.set("name", "Rohini")
	// 			req.logger.log("pre updated:  ", req.bobjekt)								
	// 			return when.resolve()
	// 		},
	// 		_post: function(req, res) {
	// 			req.logger.log("post updated:  ", req.bobjekt)												
	// 			return when.resolve()				
	// 		}
	// 	},
	// 	DELETE: { 
	// 		_pre: function(req, res) {	
	// 			req.logger.log("Deleted:  ", req.bobjekt)				
	// 			return when.resolve()
	// 		},
	// 		_post: function(req, res) {
	// 			var defered = utils.Promise.defer()				
	// 			setTimeout(function(){
	// 				req.logger.warn("Timeout completed")
	// 				defered.resolve()
	// 			},1000)
	// 			return when.resolve()				
	// 		}
	// 	}
	// },
	/**
	 * v2
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
	 * v3
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
	 * v4
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
	 * Uploads
	 */
	"/v1/uploads": {
		GET : {
			_post: function(req, res) {
				req.logger.log("in get Uploads", req.bobjekt)				
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
