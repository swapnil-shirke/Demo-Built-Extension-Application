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
				req.logger.log("get called")
				return when.resolve()				
			}
		},
		POST: {
			_pre: function(req, res) {
				req.logger.log("pre")
				req.bobjekt = req.bobjekt.set("age", 93)
				return when.resolve()
			},
			_post: function(req, res) {			
				req.logger.log("post")				
				return when.resolve()
			}
		}
	}
}	
