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
				req.logger.log(req.bobjekt)
				return when.resolve()				
			}
		},
		POST: {
			_pre: function(req, res) {
				req.logger.log("pre", req.bobjekt)
				req.bobjekt = req.bobjekt.set("age", 93)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Mumbai"
				})				
				return when.resolve()
			},
			_post: function(req, res) {			
				req.logger.log("post")				
				return when.resolve()
			}
		}
	},
	"/v1/classes/person/objects/:object:Uid": {
		GET: {
			_post: function(req, res) {
				req.logger.log(req.bobjekt)
				req.logger.log("get called")
				return when.resolve()				
			}
		}
	}
}	
