//var when = require("when");
var request = require('request');

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
				req.logger.log(res)
				req.bobjekt = req.bobjekt.set("age", 44)
				// // // req.bobjekt = req.bobjekt.setReferenceWhere("address", {
				// // // 	"city": "Mumbai"
				// // // })
				return when.resolve()
			},
			_post: function(req, res) {
				req.logger.log(res)			
				// // req.bobjekt['new_field'] = "new_value"
				return when.resolve()
			}
		}
	}
}	
