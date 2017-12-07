var when = require("when");

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
				req.logger.error(req.bobjekt)				
				return when.resolve()				
			}
		},
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 93)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Mumbai"
				}).save()
				.then(function(data){
					req.logger.log(data.toJSON())
				})				
				return when.resolve()
			},
			_post: function(req, res) {			
				req.bobjekt['merge_this'] = "merge will not reflect on classes in backend"				
				return when.resolve()
			}
		}
	},
	"/v1/classes/person/objects/:objectUid": {
		GET: {
			_post: function(req, res) {
				req.logger.warn(req.bobjekt)
				return when.resolve()				
			}
		}
	}
}	
