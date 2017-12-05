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
		POST: {
			_pre: function(req, res) {
				req.logger.log("pre")
				req.bobjekt = req.bobjekt.set("age", 67)
				// req.bobjekt = req.bobjekt.setReferenceWhere("address", {
				// 	"city": "Mumbai"
				// })
				return when.resolve()
			},
			_post: function(req, res) {			
				req.logger.log("post")				
				// // req.bobjekt['new_field'] = "new_value"
				return when.resolve()
			}
		}
	}
}	
